"use client"

import React from 'react'
import Chat from '@/components/Chat'
import AudioRecorder from '@/components/AudioRecorder';
import ScreenShare from '@/components/ScreenShare';
import LiveVideo from '@/components/LiveVideo';

export default function Page() {
    return (
        <div className="p-4 md:p-8 lg:p-12 bg-cyber-dark text-gray-200 min-h-screen flex flex-col">
            <header className="mb-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="status-online"></span>
                    <span className="text-xs font-sharetech text-cyber-cyan uppercase tracking-[0.3em]">Neural Link Active</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron text-cyber-yellow text-glow-yellow">
                    SKYWATCH <span className="text-cyber-cyan text-glow-cyan">SENTINEL</span>
                </h1>
                <p className="text-gray-500 mt-2 font-sharetech uppercase tracking-widest text-sm">Multimodal AI Analysis &amp; Communication Suite</p>
            </header>

            <main className="flex-grow flex flex-col lg:flex-row gap-6">
                <div className="lg:w-2/3 p-4 cyber-card">
                    <h2 className="text-xl font-orbitron font-semibold mb-4 text-cyber-yellow uppercase tracking-wider">
                        <span className="text-cyber-pink mr-2">▸</span>AI Chat Interface
                    </h2>
                    <Chat />
                </div>

                <aside className="lg:w-1/3 p-4 cyber-card">
                    <h2 className="text-xl font-orbitron font-semibold mb-4 text-cyber-cyan uppercase tracking-wider">
                        <span className="text-cyber-yellow mr-2">▸</span>Multimodal Tools
                    </h2>
                    <div className="mb-6 p-3 border border-cyber-yellow/20 bg-cyber-darker/50">
                        <AudioRecorder />
                    </div>
                    <div className="mb-6 p-3 border border-cyber-cyan/20 bg-cyber-darker/50">
                        <ScreenShare />
                    </div>
                    <div className="p-3 border border-cyber-pink/20 bg-cyber-darker/50">
                        <LiveVideo />
                    </div>
                </aside>
            </main>

            <footer className="mt-8 text-center text-gray-600 border-t border-cyber-yellow/10 pt-4">
                <p className="text-xs font-sharetech uppercase tracking-widest">
                    &copy; {new Date().getFullYear()} SkyWatch Project // All Systems Operational
                </p>
            </footer>
        </div>
    )
}
