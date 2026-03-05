import React from 'react'

export default function page() {
    return (
        <div className="py-10 px-4">
            <div className="grid place-items-center pb-4">
                <div className="flex items-center gap-2 mb-2">
                    <span className="status-online"></span>
                    <span className="text-xs font-sharetech text-cyber-cyan uppercase tracking-[0.3em]">Satellite Uplink Active</span>
                </div>
                <h1 className="text-4xl md:text-5xl text-center text-cyber-yellow font-orbitron font-bold text-glow-yellow">
                    GLOBAL MAP
                </h1>
                <h2 className="text-sm text-center text-gray-500 font-sharetech uppercase tracking-widest mt-2">
                    3D Globe Visualization — HATCH Dataset
                </h2>
                <div className="cyber-divider w-64 my-4"></div>
            </div>

            <div className="grid place-items-center">
                <div className="border-glow-cyan p-1 relative">
                    <iframe
                        src="/map/map.html"
                        height="600"
                        width="800"
                        title="UAP Sighting Map"
                        className="max-w-full"
                    />
                    <div className="absolute top-2 right-2 bg-cyber-darker/80 border border-cyber-yellow/30 px-3 py-1">
                        <span className="font-sharetech text-cyber-yellow text-xs uppercase tracking-widest animate-neon-pulse">Live</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
