import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.NVIDIA_API_KEY,
    baseURL: 'https://integrate.api.nvidia.com/v1',
    // Optional: Add organization ID if needed
    // organization: process.env.OPENAI_ORG_ID,
});

// Define a list of allowed models
const allowedModels = [
    'qwen/qwen2-7b-instruct',
    'nvidia/llama-3.1-nemotron-51b-instruct',
    'abacusai/dracarys-llama-3.1-70b-instruct',
    'tokyotech-llm/llama-3-swallow-70b-instruct-v0.1',
    'nvidia/nemotron-mini-4b-instruct',
    'microsoft/phi-3.5-moe-instruct',
    'meta/llama-3.2-3b-instruct',
    'meta/llama-3.2-1b-instruct'
];

// --- Rate Limiting Placeholder (Conceptual) ---
// In a real production application, you would implement robust rate limiting
// to protect your API and manage costs. This is a placeholder.
const rateLimit = async (req, res) => {
    // Example: Basic in-memory rate limiting (not production-ready)
    const clientIp = req.ip || req.socket.remoteAddress; // Get client IP
    // ... (Implement your rate limiting logic here, e.g., using a counter, timestamp, etc.) ...
    // ... (Check if clientIp has exceeded rate limit) ...
    // if (rateLimitExceeded) {
    //     res.status(429).json({ error: 'Too many requests, please try again later.' });
    //     return true; // Indicate rate limit exceeded
    // }
    return false; // Rate limit not exceeded
};

// --- Conversation History Management (Conceptual Placeholder) ---
// If you need to maintain conversation history, you would implement logic here
// to store and retrieve messages for each user session.
const conversationHistory = async (req, res, question, model, messages) => {
    // Example: Basic in-memory history (not persistent, not scalable)
    // const sessionId = req.session.id; // Or use a user ID if authenticated
    // ... (Logic to store and retrieve 'messages' array associated with sessionId) ...
    // ... (Append current user 'question' and AI response to history) ...
    // ... (Optionally, trim history to a max length) ...
    return messages; // Return the updated message history (or empty array for stateless)
};


export default async function handler(req, res) {
    if (req.method === 'POST') {

        // --- Rate Limiting Check (Conceptual) ---
        // if (await rateLimit(req, res)) { // Apply rate limiting
        //     return; // Stop processing if rate limit exceeded
        // }

        try {
            const { question, model, messages = [] } = req.body; // Accept 'messages' for history (optional)

            // --- Request Logging ---
            console.log(`Incoming Chat Request - Model: ${model}, Question: "${question.substring(0, 50)}...", IP: ${req.ip || req.socket.remoteAddress}`); // Log request

            // Input Validation: Enhanced validation (same as before)
            if (!question) { /* ... validation checks ... */ }
            if (typeof question !== 'string' || question.trim() === '') { /* ... validation checks ... */ }
            if (!model) { /* ... validation checks ... */ }
            if (typeof model !== 'string' || !allowedModels.includes(model)) { /* ... validation checks ... */ }

            // --- Conversation History Handling (Conceptual) ---
            // const updatedMessagesHistory = await conversationHistory(req, res, question, model, messages);
            // const messagesForApi = updatedMessagesHistory ? updatedMessagesHistory : [{ role: 'user', content: question }];
            const messagesForApi = [{ role: 'user', content: question }]; // No history for now - just current question

            // OpenAI Chat Completions API Call with Streaming enabled
            const stream = await openai.chat.completions.create({
                model: model,
                messages: messagesForApi, // Use messages for API call (history or just current question)
                temperature: 0.5,
                top_p: 1,
                max_tokens: 900,
                stream: true, // Enable streaming
            });

            // Set headers for Server-Sent Events (for streaming)
            res.setHeader('Content-Type', 'text/event-stream');
            res.setHeader('Cache-Control', 'no-cache, no-transform');
            res.setHeader('Connection', 'keep-alive');

            // Stream the response back to the client
            for await (const part of stream) {
                const content = part.choices[0]?.delta?.content || '';
                if (content) {
                    res.write(`data: ${content}\n\n`); // Format as Server-Sent Events
                }
            }
            res.end(); // End the stream when complete

            // --- Success Logging ---
            console.log(`Successful API Response - Model: ${model}, Question: "${question.substring(0, 50)}..."`); // Log success

        } catch (apiError) {
            // Enhanced Error Handling: More specific error messages and logging (same as before)
            console.error('Error fetching data from NVIDIA API:', apiError);

            if (apiError instanceof OpenAI.APIError) { /* ... APIError handling ... */ }
             else { /* ... Generic error handling ... */ }

        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
