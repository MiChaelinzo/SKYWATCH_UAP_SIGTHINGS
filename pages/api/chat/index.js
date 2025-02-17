import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.NVIDIA_API_KEY,
    baseURL: 'https://integrate.api.nvidia.com/v1',
});

// Define a list of allowed models (optional, but recommended for validation and control)
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

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { question, model } = req.body;

            // Input Validation: Enhanced validation
            if (!question) {
                return res.status(400).json({ error: 'Question is required.' });
            }
            if (typeof question !== 'string' || question.trim() === '') {
                return res.status(400).json({ error: 'Question must be a non-empty string.' });
            }
            if (!model) {
                return res.status(400).json({ error: 'Model is required.' });
            }
            if (typeof model !== 'string' || !allowedModels.includes(model)) { // Validate model against allowed list
                return res.status(400).json({ error: 'Invalid or unsupported model selected.', allowedModels });
            }

            // OpenAI Chat Completions API Call with Streaming enabled
            const stream = await openai.chat.completions.create({
                model: model,
                messages: [{ role: 'user', content: question }],
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

        } catch (apiError) {
            // Enhanced Error Handling: More specific error messages and logging
            console.error('Error fetching data from NVIDIA API:', apiError);

            if (apiError instanceof OpenAI.APIError) {
                // Handle OpenAI API errors specifically
                const errorStatus = apiError.status;
                const errorCode = apiError.code;
                const errorMessage = apiError.message;
                return res.status(errorStatus).json({
                    error: `NVIDIA API Error: ${errorMessage}`,
                    status: errorStatus,
                    code: errorCode,
                    details: apiError.cause?.message // Include cause if available for more detail
                });
            } else {
                // Generic error for other types of exceptions
                res.status(500).json({ error: 'Internal Server Error', details: apiError.message });
            }

        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
