// app/AIBackground/components/ChatComponent.js
"use client"

import { useState } from 'react';

function ChatComponent() {
    const [chatMessages, setChatMessages] = useState([]);

    const handleSendMessage = (message) => {
        if (message.trim()) {
            setChatMessages([...chatMessages, { sender: 'user', text: message }]);
            // In a real app, you'd send this message to a chat service/backend
            // and handle responses to update chatMessages
        }
    };

    return (
        <div>
            <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
            <div className="chat-messages mb-2 p-2 border border-gray-400 rounded-md h-40 overflow-y-auto bg-gray-700">
                {chatMessages.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                        <strong>{msg.sender}:</strong> {msg.text}
                    </div>
                ))}
            </div>
            <div className="flex">
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="border border-gray-400 rounded-md py-2 px-2 text-black flex-grow mr-2"
                    onKeyDown={(e) => { if (e.key === 'Enter') { handleSendMessage(e.target.value); e.target.value = ''; } }}
                />
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4 focus:outline-none"
                    onClick={(e) => {
                        const input = e.target.previousElementSibling;
                        handleSendMessage(input.value); input.value = '';
                    }}
                >
                    Send
                </button>
            </div>
            <p className="text-sm text-gray-400 mt-1">For real-time chat, you'd integrate with a backend service.</p>
        </div>
    );
}

export default ChatComponent;
