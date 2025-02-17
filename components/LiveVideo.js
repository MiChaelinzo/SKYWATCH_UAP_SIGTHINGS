// app/AIBackground/components/LiveVideo.js
"use client"

import { useState, useRef, useEffect } from 'react';

function LiveVideo() {
    const [isVideoChatting, setIsVideoChatting] = useState(false);
    const [localVideoStream, setLocalVideoStream] = useState(null);
    const videoChatVideoRef = useRef(null);

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

    useEffect(() => {
        return () => { // Cleanup on unmount
            stopVideoChat();
        };
    }, []);

    return (
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
    );
}

export default LiveVideo;
