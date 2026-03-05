// components/LiveVideo.js
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
        } catch (error) {
            console.error("Error starting video chat:", error);
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
    };

    useEffect(() => {
        return () => {
            stopVideoChat();
        };
    }, []);

    return (
        <div>
            <h3 className="text-sm font-sharetech text-cyber-pink uppercase tracking-widest mb-3">▸ Live Video Feed</h3>
            <div className="mb-2">
                {!isVideoChatting ? (
                    <button
                        className="cyber-btn text-sm py-1 px-4"
                        onClick={startVideoChat}
                        disabled={isVideoChatting}
                    >
                        Start Video
                    </button>
                ) : (
                    <button
                        className="relative px-4 py-1 font-rajdhani font-bold uppercase tracking-wider text-white bg-cyber-pink border border-cyber-pink hover:bg-cyber-pink/80 transition-all text-sm"
                        onClick={stopVideoChat}
                        disabled={!isVideoChatting}
                    >
                        Stop Video
                    </button>
                )}
            </div>
            {isVideoChatting && localVideoStream && (
                <video ref={videoChatVideoRef} autoPlay muted playsInline className="border border-cyber-pink/30" style={{ maxWidth: '320px' }} />
            )}
            <p className="text-xs text-gray-600 mt-2 font-sharetech">Local video preview. Integrate WebRTC for remote connections.</p>
        </div>
    );
}

export default LiveVideo;
