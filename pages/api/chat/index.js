import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: process.env.NVIDIA_AI_API,
    baseURL: 'https://integrate.api.nvidia.com/v1',
});

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { question, model } = req.body;

            if (!question || !model) {
                return res.status(400).json({ error: 'Question and model are required' });
            }

            const completion = await openai.chat.completions.create({
                model: model,
                messages: [{ role: 'user', content: question }],
                temperature: 0.5,
                top_p: 1,
                max_tokens: 900,
                stream: false,
            });

            res.status(200).json({ answer: completion.choices[0]?.message?.content });
        } catch (error) {
            console.error('Error fetching data from NVIDIA API:', error);
            res.status(500).json({ error: 'Internal Server Error', details: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
