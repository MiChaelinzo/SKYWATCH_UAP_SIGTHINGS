'use client'

import { useState } from 'react'
import axios from 'axios'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

import AudioRecorder from './AudioRecorder';
import ScreenShare from './ScreenShare';
import LiveVideo from './LiveVideo';

export default function Chat() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedModel, setSelectedModel] = useState('nvidia/nemotron-mini-4b-instruct');

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
            const response = await axios.post('/api/chat', {
                message: input,
                senderId: 'user-chat-page',
                roomId: 'ai-chat-room',
                model: selectedModel
            });

            setMessages([...messages, { user: input, ai: response.data.message }]);
            setInput('');
        } catch (error) {
            console.error('Error sending message:', error);
            setMessages([...messages, { user: input, ai: "Error: Could not send message." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col p-4">
            {/* AI Chat Section */}
            <div className="mb-8">
                <div className="overflow-y-auto h-96 border border-cyber-yellow/30 p-4 mb-4 bg-cyber-darker/50 font-sharetech text-sm">
                    {messages.length === 0 && (
                        <div className="text-gray-600 text-center py-8 uppercase tracking-widest text-xs">
                            // Awaiting transmission...
                        </div>
                    )}
                    {messages.map((msg, index) => (
                        <div key={index} className="my-4">
                            <div className="mb-2">
                                <span className="text-cyber-cyan text-xs uppercase tracking-widest">User &gt;</span>
                                <span className="text-gray-300 ml-2">{msg.user}</span>
                            </div>
                            <div>
                                <span className="text-cyber-yellow text-xs uppercase tracking-widest">Sentinel &gt;</span>
                                <span className="text-gray-300 ml-2">{msg.ai}</span>
                            </div>
                            <div className="cyber-divider mt-3 opacity-30"></div>
                        </div>
                    ))}
                    {loading && (
                        <div className="my-4 text-cyber-yellow animate-neon-pulse font-sharetech text-xs uppercase tracking-widest">
                            Processing neural response...
                        </div>
                    )}
                </div>

                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Enter query..."
                    className="cyber-input w-full mb-3"
                    disabled={loading}
                />

                <div className="mt-1 mb-3">
                    <label className="text-xs font-sharetech text-cyber-cyan uppercase tracking-[0.2em] mb-1 block">Select Model</label>
                    <Select defaultValue={selectedModel} onValueChange={setSelectedModel}>
                        <SelectTrigger className="border-cyber-yellow/30 bg-cyber-darker text-cyber-yellow font-sharetech">
                            <SelectValue placeholder="Select Model" />
                        </SelectTrigger>
                        <SelectContent className="bg-cyber-darker border-cyber-yellow/30">
                            <SelectGroup label="Models">
                                {Models.map((model, index) => (
                                    <SelectItem key={index} value={model} className="text-gray-300 font-sharetech hover:text-cyber-yellow">
                                        {model}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <button
                    onClick={handleSend}
                    className={`cyber-btn ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={loading}
                >
                    Transmit
                </button>
            </div>

            {/* Multimodal Features Section */}
            <div className="my-8 p-4 border border-cyber-yellow/20 bg-cyber-gray text-gray-200">
                <h2 className="text-xl font-orbitron font-semibold mb-4 text-cyber-cyan uppercase tracking-wider">
                    <span className="text-cyber-yellow mr-2">▸</span>Multimodal Tools
                </h2>

                <div className="space-y-4">
                    <div className="p-3 border border-cyber-yellow/10 bg-cyber-darker/50">
                        <AudioRecorder />
                    </div>
                    <div className="p-3 border border-cyber-cyan/10 bg-cyber-darker/50">
                        <ScreenShare />
                    </div>
                    <div className="p-3 border border-cyber-pink/10 bg-cyber-darker/50">
                        <LiveVideo />
                    </div>
                </div>
            </div>
        </div>
    );
}
