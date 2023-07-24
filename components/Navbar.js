"use client"

import React, { useState } from 'react'
import Link from 'next/link';
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {

    const [showNavbar, setShowNavbar] = React.useState(false);

    return (
        <div >
            <nav className="flex items-center py-2 flex-wrap px-4 text-fontColor tracking-wider text-white">
                <Link href="/"><span className="p-2 mr-4 inline-flex items-center text-4xl cursor-pointer font-base">APP NAME
                </span></Link>
                <button className="lg:hidden right-0 absolute md:px-8 px-6 mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowNavbar(true)} aria-hidden="false" aria-label="button">
                    <HiOutlineMenuAlt3 className="h-7 w-7" aria-hidden="false" />
                </button>
                {showNavbar ? (
                    <div>
                        <div className=" flex overflow-x-hidden mx-4 md:mx-8 h-screen overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none md:hidden"
                        >
                            <div className="relative my-6 mx-auto w-screen">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-secondary outline-none focus:outline-none">
                                    <div className="flex items-start justify-between p-5 border-solid rounded-t">
                                        <Link href='/'>
                                            <div className="text-2xl font-base tracking-wide cursor-pointer">
                                                APP NAME
                                            </div>
                                        </Link>

                                        <button className="absolute right-6" onClick={() => setShowNavbar(false)} aria-hidden="false" aria-label="button">
                                            <HiX className="h-7 w-7" aria-hidden="false" />
                                        </button>

                                    </div>

                                    <div className="grid justify-center">
                                        <div className="inline-flex w-64 h-1 bg-indigo-500 rounded-full"></div>
                                    </div>

                                    <div className="grid place-items-center text-xl py-2 gap-2 w-full mb-4"
                                    >

                                        <Link href="/">
                                            <span className="lg:inline-flex px-3 mx-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer text-white">Home</span>
                                        </Link>

                                        <Link href="/AddSighting">
                                            <span className="lg:inline-flex px-3 mx-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer text-white">Add Sighting</span>
                                        </Link>

                                        <Link href="/Auction">
                                            <span className="lg:inline-flex px-3 mx-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer text-white">Auction</span>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="opacity-25 fixed inset-0 z-40 h-screen bg-black md:hidden"></div>
                    </div>
                ) : null}

                <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" >
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