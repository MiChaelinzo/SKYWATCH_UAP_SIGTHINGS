// components/ScreenShare.js
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
            <h3 className="text-sm font-sharetech text-cyber-cyan uppercase tracking-widest mb-3">▸ Screen Sharing</h3>
            <div className="mb-2">
                {!isScreenSharing ? (
                    <button
                        className="cyber-btn text-sm py-1 px-4"
                        onClick={startScreenShare}
                        disabled={isScreenSharing}
                    >
                        Start Screen Share
                    </button>
                ) : (
                    <button
                        className="relative px-4 py-1 font-rajdhani font-bold uppercase tracking-wider text-cyber-dark bg-cyber-yellow border border-cyber-yellow hover:bg-cyber-yellow/80 transition-all text-sm"
                        onClick={stopScreenShare}
                        disabled={!isScreenSharing}
                    >
                        Stop Screen Share
                    </button>
                )}
            </div>
            {isScreenSharing && (
                <video ref={screenShareVideoRef} autoPlay muted className="border border-cyber-cyan/30" style={{ maxWidth: '320px' }} />
            )}
            <p className="text-xs text-gray-600 mt-2 font-sharetech">Share your screen. For remote sharing, integrate WebRTC signaling.</p>
        </div>
    );
}

export default ScreenShare;
