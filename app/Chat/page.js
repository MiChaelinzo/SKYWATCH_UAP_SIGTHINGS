"use client"

import React from 'react'
import Chat from '@/components/Chat' // Assuming Chat.js is in your root components directory
import AudioRecorder from '@/components/AudioRecorder'; // Assuming these are also in root components
import ScreenShare from '@/components/ScreenShare';
import LiveVideo from '@/components/LiveVideo';
import ChatComponent from '@/components/ChatComponent'; // Keep this if you want to use separate ChatComponent

export default function Page() {
    return (
        <div className="p-4 md:p-8 lg:p-12 bg-gray-900 text-white min-h-screen flex flex-col"> {/* Added padding, background, min-height, flex layout */}
            <header className="mb-8 text-center"> {/* Added a header section */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-tektur">SkyWatch Multimodal AI</h1> {/* Title */}
                <p className="text-gray-400 mt-2">Explore AI-powered Chat, Audio, Video, and Screen Sharing Features</p> {/* Subtitle */}
            </header>

            <main className="flex-grow flex flex-col lg:flex-row"> {/* Main content area with flex layout */}
                <div className="lg:w-2/3 p-4 mb-8 lg:mb-0 lg:mr-8 border border-gray-700 rounded-lg bg-gray-800 shadow-md"> {/* Chat area */}
                    <h2 className="text-2xl font-semibold mb-4">AI Chat</h2>
                    <Chat /> {/* Render the Chat component here */}
                </div>

                <aside className="lg:w-1/3 p-4 border border-gray-700 rounded-lg bg-gray-800 shadow-md"> {/* Multimodal tools aside */}
                    <h2 className="text-2xl font-semibold mb-4">Multimodal Tools</h2>
                    <div className="mb-4">
                        <AudioRecorder /> {/* Audio Recorder */}
                    </div>
                    <div className="mb-4">
                        <ScreenShare /> {/* Screen Share */}
                    </div>
                    <div>
                        <LiveVideo /> {/* Live Video */}
                    </div>
                    {/* Optional: Chat Component (if you want a separate chat UI here as well) */}
                    {/* <div className="mt-4">
                        <ChatComponent />
                    </div> */}
                </aside>
            </main>

            <footer className="mt-8 text-center text-gray-500 border-t border-gray-700 pt-4"> {/* Footer section */}
                <p className="text-sm">
                    © {new Date().getFullYear()} SkyWatch Project. All rights reserved. | <a href="/about" className="hover:text-white">About</a> | <a href="/help" className="hover:text-white">Help</a>
                </p>
            </footer>
        </div>
    )
}
