"use client"

import React, { useState } from 'react'
import Link from 'next/link';
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {

    const [showNavbar, setShowNavbar] = React.useState(false);

    return (
        <div className="border-b border-cyber-yellow/20 bg-cyber-darker/90 backdrop-blur-sm">
            <nav className="flex items-center py-2 flex-wrap pl-4 tracking-wider text-gray-300">
                <Link href="/">
                    <span className="p-2 font-orbitron mr-4 inline-flex items-center text-2xl md:text-3xl cursor-pointer font-bold text-cyber-yellow text-glow-yellow glitch-text">
                        SKYWATCH<span className="text-cyber-cyan ml-2 text-glow-cyan">_UAP</span>
                    </span>
                </Link>

                <button
                    className="lg:hidden ml-auto mr-4 text-cyber-yellow hover:text-cyber-cyan transition-colors"
                    onClick={() => setShowNavbar(!showNavbar)}
                >
                    {showNavbar ? <HiX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
                </button>

                <div className={`${showNavbar ? 'block' : 'hidden'} top-navbar w-full lg:inline-flex font-rajdhani lg:flex-grow lg:w-auto`}>
                    <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full text-lg md:text-base lg:items-center items-start flex flex-col lg:h-auto space-x-0 lg:space-x-1 mr-4">

                        <Link href="/">
                            <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-cyber-yellow hover:bg-cyber-yellow/10 cursor-pointer transition-all duration-200 font-semibold uppercase tracking-widest text-sm">Home</span>
                        </Link>

                        <Link href="/AddSighting">
                            <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-cyber-yellow hover:bg-cyber-yellow/10 cursor-pointer transition-all duration-200 font-semibold uppercase tracking-widest text-sm">Add Sighting</span>
                        </Link>

                        <Link href="/AllSighting">
                            <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-cyber-yellow hover:bg-cyber-yellow/10 cursor-pointer transition-all duration-200 font-semibold uppercase tracking-widest text-sm">All Sighting</span>
                        </Link>

                        <Link href="/AllSightingBeta">
                            <div className="relative lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-cyber-yellow hover:bg-cyber-yellow/10 cursor-pointer transition-all duration-200 font-semibold uppercase tracking-widest text-sm">
                                All Sighting
                                <span className="text-xs text-cyber-cyan font-orbitron absolute -top-1 -right-1 text-glow-cyan">β</span>
                            </div>
                        </Link>

                        <Link href="/AllSightingHATCH">
                            <div className="relative lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-cyber-yellow hover:bg-cyber-yellow/10 cursor-pointer transition-all duration-200 font-semibold uppercase tracking-widest text-sm">
                                All Sighting
                                <span className="text-xs text-cyber-pink font-orbitron absolute -top-1 -right-2 text-glow-pink">HATCH</span>
                            </div>
                        </Link>

                        <Link href="/News">
                            <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-cyber-yellow hover:bg-cyber-yellow/10 cursor-pointer transition-all duration-200 font-semibold uppercase tracking-widest text-sm">News</span>
                        </Link>

                        <Link href="/Map">
                            <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-cyber-yellow hover:bg-cyber-yellow/10 cursor-pointer transition-all duration-200 font-semibold uppercase tracking-widest text-sm">Map</span>
                        </Link>

                        <Link href="/Chat">
                            <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center hover:text-cyber-cyan hover:bg-cyber-cyan/10 cursor-pointer transition-all duration-200 font-semibold uppercase tracking-widest text-sm border border-cyber-cyan/30 hover:border-cyber-cyan">AI Chat</span>
                        </Link>

                    </div>
                </div>
            </nav>
        </div>
    );
}
