'use client'

import { useState } from 'react';
import axios from 'axios';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Chat() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedModel, setSelectedModel] = useState('nvidia/nemotron-mini-4b-instruct'); // New state for selected model

    const Models = [
        'qwen/qwen2-7b-instruct',
        'nvidia/llama-3.1-nemotron-51b-instruct',
        'abacusai/dracarys-llama-3.1-70b-instruct',
        'tokyotech-llm/llama-3-swallow-70b-instruct-v0.1',
        'nvidia/nemotron-mini-4b-instruct',
        'microsoft/phi-3.5-moe-instruct',
        'meta/llama-3.2-3b-instruct',
        'meta/llama-3.2-1b-instruct'
    ];

    const handleSend = async () => {
        if (!input) return;
        setLoading(true);

        try {
            const response = await axios.post('/api/chat', { question: input, model: selectedModel }); // Include selected model
            setMessages([...messages, { user: input, ai: response.data.answer }]);
            setInput('');
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex flex-col p-4'>
            <div className='overflow-y-auto h-96 border border-gray-300 p-2 mb-4 rounded'>
                {messages.map((msg, index) => (
                    <div key={index} className='my-4'>
                        <strong className='text-white'>User:</strong> <span className='text-white'>{msg.user}</span><br />
                        <strong className='text-white'>SkyWatch AI:</strong> <span className='text-white'>{msg.ai}</span>
                    </div>
                ))}
                {loading && (
                    <div className='my-4 text-gray-500'>Processing...</div>
                )}
            </div>

            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Ask about UAP's...'
                className='border border-gray-300 p-2 mb-2 rounded'
                disabled={loading}
            />

            <div className='mt-1 mb-2'>
                <h1 className='text-gray-200'>Select Model</h1>
                <Select defaultValue={selectedModel} onValueChange={setSelectedModel}> {/* Update selected model on change */}
                    <SelectTrigger>
                        <SelectValue placeholder='Select Model' />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup label='Models'>
                            {Models.map((model, index) => (
                                <SelectItem key={index} value={model}>
                                    {model}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <button
                onClick={handleSend}
                className={`bg-blue-500 text-white p-2 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
            >
                Send
            </button>
        </div>
    );
}
