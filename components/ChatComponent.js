// components/ChatComponent.js
"use client"

import { useState } from 'react';

function ChatComponent() {
    const [chatMessages, setChatMessages] = useState([]);

    const handleSendMessage = (message) => {
        if (message.trim()) {
            setChatMessages([...chatMessages, { sender: 'user', text: message }]);
        }
    };

    return (
        <div>
            <h3 className="text-sm font-sharetech text-cyber-yellow uppercase tracking-widest mb-3">▸ Live Chat</h3>
            <div className="chat-messages mb-2 p-3 border border-cyber-yellow/20 h-40 overflow-y-auto bg-cyber-darker/50 font-sharetech text-sm">
                {chatMessages.length === 0 && (
                    <div className="text-gray-600 text-center py-4 uppercase tracking-widest text-xs">
                        // No messages yet...
                    </div>
                )}
                {chatMessages.map((msg, index) => (
                    <div key={index} className={`chat-message my-1 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                        <span className="text-cyber-cyan text-xs">{msg.sender}:</span>{' '}
                        <span className="text-gray-300">{msg.text}</span>
                    </div>
                ))}
            </div>
            <div className="flex gap-2">
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="cyber-input flex-grow text-sm"
                    onKeyDown={(e) => { if (e.key === 'Enter') { handleSendMessage(e.target.value); e.target.value = ''; } }}
                />
                <button
                    className="cyber-btn text-sm py-1 px-4"
                    onClick={(e) => {
                        const input = e.target.previousElementSibling;
                        handleSendMessage(input.value); input.value = '';
                    }}
                >
                    Send
                </button>
            </div>
            <p className="text-xs text-gray-600 mt-2 font-sharetech">For real-time chat, integrate with a backend service.</p>
        </div>
    );
}

export default ChatComponent;
