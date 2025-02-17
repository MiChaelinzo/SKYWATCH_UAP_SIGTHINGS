// app/AIBackground/components/ScreenShare.js
"use client"

import { useState, useRef } from 'react';

function ScreenShare() {
    const [isScreenSharing, setIsScreenSharing] = useState(false);
    const screenShareStream = useRef(null);
    const screenShareVideoRef = useRef(null);

    const startScreenShare = async () => {
        try {
            screenShareStream.current = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
            setIsScreenSharing(true);
            if (screenShareVideoRef.current) {
                screenShareVideoRef.current.srcObject = screenShareStream.current;
            }
            screenShareStream.current.getVideoTracks()[0].onended = () => {
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

    return (
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
    );
}

export default ScreenShare;
