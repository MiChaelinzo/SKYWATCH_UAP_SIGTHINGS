"use client"

import React, { useState } from 'react'
import Link from 'next/link';
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {

    const [showNavbar, setShowNavbar] = React.useState(false);

    return (
        <div >
            <nav className="flex items-center py-2 flex-wrap pl-4 text-fontColor tracking-wider text-white">
                <Link href="/"><span className="p-2 font-handjet mr-4 inline-flex items-center text-5xl cursor-pointer font-base">SkyWatch UAP Sightings
                </span></Link>

                <div className="top-navbar w-full lg:inline-flex font-orbitron lg:flex-grow lg:w-auto" >
                    <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full text-xl lg:items-center items-start flex flex-col lg:h-auto space-x-2 mr-12" >

                        <Link href="/">
                            <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer hover:text-white">Home</span>
                        </Link>

                        <Link href="/AddSighting">
                            <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer hover:text-white">Add Sighting</span>
                        </Link>

                        <Link href="/AllSighting">
                            <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer hover:text-white">All Sighting</span>
                        </Link>

                        <Link href="/AllSightingBeta">
                            <div className="relative lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer hover:text-white">All Sighting
                                <h1 className="text-[1rem] text-center hover:text-white text-tertiary font-tektur absolute -top-2 -right-0">Beta</h1>
                            </div>
                        </Link>

                        <Link href="/AllSightingHATCH">
                            <div className="relative lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer hover:text-white">All Sighting
                                <h1 className="text-[1rem] text-center hover:text-white text-tertiary font-tektur absolute -top-2 -right-0">HATCH</h1>
                            </div>
                        </Link>

                        <Link href="/News">
                            <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer hover:text-white">News</span>
                        </Link>

                        <Link href="/Map">
                            <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer hover:text-white">Map</span>
                        </Link>

                        <Link href="/AIBackground">
                            <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer hover:text-white">AI Background</span>
                        </Link>

                    </div>
                </div>
            </nav>
        </div>
    );
}
