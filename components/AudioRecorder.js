// app/AIBackground/components/AudioRecorder.js
"use client"

import { useState, useRef } from 'react';

function AudioRecorder() {
    const [isRecording, setIsRecording] = useState(false);
    const [audioURL, setAudioURL] = useState(null);
    const mediaRecorder = useRef(null);
    const audioChunks = useRef([]);

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
                audioChunks.current = [];
                stream.getTracks().forEach(track => track.stop());
            };
            audioChunks.current = [];
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

    return (
        <div>
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
    );
}

export default AudioRecorder;
