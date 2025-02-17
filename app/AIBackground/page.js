"use client"

import { useState, useRef, useEffect } from 'react';

function AIArt() {
    const [inputValue, setInputValue] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [chatMessages, setChatMessages] = useState([]); // For live chat
    const [isRecording, setIsRecording] = useState(false); // For audio recording
    const [audioURL, setAudioURL] = useState(null); // For recorded audio
    const mediaRecorder = useRef(null); // For MediaRecorder
    const audioChunks = useRef([]); // For storing audio chunks
    const [isScreenSharing, setIsScreenSharing] = useState(false); // For screen sharing
    const screenShareStream = useRef(null); // For screen share stream
    const screenShareVideoRef = useRef(null); // For displaying screen share

    // --- Video Chat State and Refs ---
    const [isVideoChatting, setIsVideoChatting] = useState(false);
    const [localVideoStream, setLocalVideoStream] = useState(null);
    const videoChatVideoRef = useRef(null); // Ref for local video display in video chat

    // --- Chat Functionality (Placeholder - For real-time chat, you'd need a backend) ---
    const handleSendMessage = (message) => {
        if (message.trim()) {
            setChatMessages([...chatMessages, { sender: 'user', text: message }]);
            // In a real app, you'd send this message to a chat service/backend
            // and handle responses to update chatMessages
        }
    };

    // --- Audio Recording Functionality ---
    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorder.current = new MediaRecorder(stream);
            mediaRecorder.current.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    audioChunks.current.push(event.data);
                }
            };
            mediaRecorder.current.onstop = () => {
                const audioBlob = new Blob(audioChunks.current, { type: 'audio/webm' });
                const url = URL.createObjectURL(audioBlob);
                setAudioURL(url);
                audioChunks.current = []; // Clear chunks for next recording
                stream.getTracks().forEach(track => track.stop()); // Stop microphone access
            };
            audioChunks.current = []; // Reset chunks for new recording
            mediaRecorder.current.start();
            setIsRecording(true);
        } catch (error) {
            console.error("Error starting recording:", error);
        }
    };

    const stopRecording = () => {
        if (mediaRecorder.current && mediaRecorder.current.state === 'recording') {
            mediaRecorder.current.stop();
            setIsRecording(false);
        }
    };

    // --- Screen Sharing Functionality ---
    const startScreenShare = async () => {
        try {
            screenShareStream.current = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
            setIsScreenSharing(true);
            if (screenShareVideoRef.current) {
                screenShareVideoRef.current.srcObject = screenShareStream.current;
            }
            screenShareStream.current.getVideoTracks()[0].onended = () => { // Handle when screen share is stopped by user
                stopScreenShare();
            };
        } catch (error) {
            console.error("Error starting screen sharing:", error);
        }
    };

    const stopScreenShare = () => {
        if (screenShareStream.current) {
            screenShareStream.current.getTracks().forEach(track => track.stop());
            screenShareStream.current = null;
            setIsScreenSharing(false);
            if (screenShareVideoRef.current) {
                screenShareVideoRef.current.srcObject = null;
            }
        }
    };

    // --- Video Chat Functionality ---
    const startVideoChat = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            setLocalVideoStream(stream);
            setIsVideoChatting(true);
            if (videoChatVideoRef.current) {
                videoChatVideoRef.current.srcObject = stream;
            }
            // --- In a real video chat app, you would now initiate signaling to connect to another user via WebRTC ---
            // --- Example: Initialize WebRTC connection, send offer, etc. ---
            console.log("Video chat started, local stream acquired. Now implement WebRTC signaling.");

        } catch (error) {
            console.error("Error starting video chat:", error);
            alert("Failed to start video chat. Please check camera and microphone permissions.");
            setIsVideoChatting(false);
            setLocalVideoStream(null);
        }
    };

    const stopVideoChat = () => {
        if (localVideoStream) {
            localVideoStream.getTracks().forEach(track => track.stop());
            setLocalVideoStream(null);
        }
        setIsVideoChatting(false);
        // --- In a real video chat app, you would also close the WebRTC connection and handle cleanup ---
        console.log("Video chat stopped, local stream stopped. Clean up WebRTC connection if active.");
    };


    // --- Existing AI Image Generation Functionality ---
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const response = await fetch('/api/aiImage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ value: inputValue }),
        });

        if (response.ok) {
            const data = await response.json();
            setImageUrl(data[0]);
        } else {
            console.error('Error:', response.statusText);
        }
        setLoading(false);
    };

    const handleDownload = () => {
        if (imageUrl) {
            fetch(imageUrl)
                .then((response) => response.blob())
                .then((blob) => {
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = 'generated_image.png';
                    link.click();
                    URL.revokeObjectURL(url);
                })
                .catch((error) => console.error('Error:', error));
        }
    };

    useEffect(() => {
        return () => { // Cleanup function when component unmounts
            stopVideoChat(); // Ensure camera/mic is released if video chat was active
        };
    }, []); // Run cleanup on unmount


    return (
        <div>
            <div className="py-10">
                <div className="grid place-items-center">
                    <h1 className="text-5xl text-center text-white font-tektur">AI Background</h1>
                    <h4 className="text-1xl text-center text-white font-tektur">How to use: add (shape), add (comma), and add (description summary)</h4>
                    <h4 className="text-1xl text-center text-white font-tektur">For example: The object was circular and metallic, with a diameter of about 10 meters. It had no visible windows, wings, or propellers. It moved silently and swiftly across the sky, changing direction abruptly. It emitted a faint blue glow from its edges.</h4>
                    <div className="bg-secondary w-64 h-1 my-2 rounded-md"></div>
                </div>

                <form className="flex items-center justify-center my-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="input"
                        placeholder="Type here..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="border border-gray-300 rounded-md py-2 px-4 mr-2 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4 focus:outline-none"
                    >
                        Generate
                    </button>
                </form>
            </div>
            {loading && <div className="text-center py-12 text-gray-100">Loading...</div>}

            {imageUrl && !loading && (
                <div className="my-12 grid place-items-center">
                    <img src={imageUrl} alt="Generated image" className="rounded-xl shadow-lg" />
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4 mt-4 focus:outline-none"
                        onClick={handleDownload}
                    >
                        Download
                    </button>
                </div>
            )}

            {/* --- Multimodal Features Section --- */}
            <div className="my-8 p-4 border border-gray-300 rounded-md bg-gray-800 text-white">
                <h2 className="text-2xl font-semibold mb-4">Multimodal Tools</h2>

                {/* --- Live Chat (Basic Input Example) --- */}
                <div className="mb-4">
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

                {/* --- Audio Recording --- */}
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Audio Message</h3>
                    <div className="flex items-center space-x-4">
                        {!isRecording ? (
                            <button
                                className="bg-green-500 hover:bg-green-600 text-white rounded-md py-2 px-4 focus:outline-none"
                                onClick={startRecording}
                                disabled={isRecording}
                            >
                                Start Recording
                            </button>
                        ) : (
                            <button
                                className="bg-red-500 hover:bg-red-600 text-white rounded-md py-2 px-4 focus:outline-none"
                                onClick={stopRecording}
                                disabled={!isRecording}
                            >
                                Stop Recording
                            </button>
                        )}
                        {audioURL && (
                            <audio src={audioURL} controls className="block" />
                        )}
                    </div>
                    <p className="text-sm text-gray-400 mt-1">Record and play audio messages.</p>
                </div>

                {/* --- Screen Sharing --- */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Screen Sharing</h3>
                    <div className="mb-2">
                        {!isScreenSharing ? (
                            <button
                                className="bg-purple-500 hover:bg-purple-600 text-white rounded-md py-2 px-4 focus:outline-none"
                                onClick={startScreenShare}
                                disabled={isScreenSharing}
                            >
                                Start Screen Sharing
                            </button>
                        ) : (
                            <button
                                className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-md py-2 px-4 focus:outline-none"
                                onClick={stopScreenShare}
                                disabled={!isScreenSharing}
                            >
                                Stop Screen Sharing
                            </button>
                        )}
                    </div>
                    {isScreenSharing && (
                        <video ref={screenShareVideoRef} autoPlay muted className="rounded-md shadow-lg" style={{ maxWidth: '320px' }} />
                    )}
                    <p className="text-sm text-gray-400 mt-1">Share your screen. For remote sharing, you'd need WebRTC and signaling.</p>
                </div>

                {/* --- Live Video Chat --- */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Live Video Chat (Local Preview Only)</h3>
                    <div className="mb-2">
                        {!isVideoChatting ? (
                            <button
                                className="bg-teal-500 hover:bg-teal-600 text-white rounded-md py-2 px-4 focus:outline-none"
                                onClick={startVideoChat}
                                disabled={isVideoChatting}
                            >
                                Start Video Chat
                            </button>
                        ) : (
                            <button
                                className="bg-orange-500 hover:bg-orange-600 text-black rounded-md py-2 px-4 focus:outline-none"
                                onClick={stopVideoChat}
                                disabled={!isVideoChatting}
                            >
                                Stop Video Chat
                            </button>
                        )}
                    </div>
                    {isVideoChatting && localVideoStream && (
                        <video ref={videoChatVideoRef} autoPlay muted playsInline className="rounded-md shadow-lg" style={{ maxWidth: '320px' }} />
                    )}
                    <p className="text-sm text-gray-400 mt-1">Starts local video preview. For real video chat, you need to integrate WebRTC signaling and remote video display.</p>
                </div>


            </div>
        </div>
    );
}

export default AIArt;
