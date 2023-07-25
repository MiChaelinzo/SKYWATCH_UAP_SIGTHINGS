"use client"

import React, { useState } from 'react'
import Link from 'next/link';
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {

    const [showNavbar, setShowNavbar] = React.useState(false);

    return (
        <div >
            <nav className="flex items-center py-2 flex-wrap px-4 text-fontColor tracking-wider text-white">
                <Link href="/"><span className="p-2 font-handjet mr-4 inline-flex items-center text-8xl cursor-pointer font-base">UAP Sightings
                </span></Link>

                <div className="top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" >
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

                    </div>
                </div>
            </nav>
        </div>
    );
}