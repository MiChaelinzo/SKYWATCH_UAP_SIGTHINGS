import React from 'react'

export default function page() {
    return (
        <div>
            <div className="grid place-items-center">
                <h1 className="text-5xl text-center text-white">Add Sighting</h1>
                <div className="bg-secondary w-64 h-1 my-2 rounded-md"></div>
            </div>

            <div className='grid place-items-center py-16'>
            <div className="relative z-10 w-full max-w-2xl mt-20 lg:mt-0 lg:w-5/12">
                <div className="relative z-10 flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-xl">
                    <h4 className="w-full text-4xl font-medium leading-snug">Add Sighting</h4>
                    <div className="relative w-full mt-6 space-y-8">
                        <div className="relative">
                            <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Date of Sighting</label>
                            <input
                                type="date"
                                className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                            />
                        </div>

                        <div className="relative">
                            <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Time of Sighting</label>
                            <input
                                type="time"
                                className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                            />
                        </div>

                        <div className="relative">
                            <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">City of Sighting</label>
                            <input
                                type="text"
                                className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                                placeholder='City of Sighting'
                            />
                        </div>

                        <div className="relative">
                            <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">State of Sighting</label>
                            <input
                                type="text"
                                className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                                placeholder='State of Sighting'
                            />
                        </div>

                        <div className="relative">
                            <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Shape of Sighting</label>
                            <input
                                type="text"
                                className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                                placeholder='Shape of Sighting'
                            />
                        </div>

                        <div className="relative">
                            <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Duration of Sighting(in min.)</label>
                            <input
                                type="number"
                                className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                                placeholder='Duration of Sighting'
                            />
                        </div>

                        <div className="relative">
                            <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Summary of Sighting</label>
                            <input
                                type="text"
                                className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                                placeholder='Summary of Sighting'
                            />
                        </div>
       
                        <div className="relative">
                            <button
                                className={`inline-block w-full px-5 py-4 text-xl font-medium text-center rounded-lg bg-blue-600 text-white hover:bg-blue-500`}
                            >
                                Add Data
                            </button>
                        </div>
                    </div>
                </div>
                <svg className="absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-gray-200 fill-current" viewBox="0 0 91 91" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="none" strokeWidth="1" fillRule="evenodd">
                        <g fillRule="nonzero">
                            <g>
                                <g>
                                    <circle cx="3.261" cy="3.445" r="2.72"></circle>
                                    <circle cx="15.296" cy="3.445" r="2.719"></circle>
                                    <circle cx="27.333" cy="3.445" r="2.72"></circle>
                                    <circle cx="39.369" cy="3.445" r="2.72"></circle>
                                    <circle cx="51.405" cy="3.445" r="2.72"></circle>
                                    <circle cx="63.441" cy="3.445" r="2.72"></circle>
                                    <circle cx="75.479" cy="3.445" r="2.72"></circle>
                                    <circle cx="87.514" cy="3.445" r="2.719"></circle>
                                </g>
                                <g transform="translate(0 12)">
                                    <circle cx="3.261" cy="3.525" r="2.72"></circle>
                                    <circle cx="15.296" cy="3.525" r="2.719"></circle>
                                    <circle cx="27.333" cy="3.525" r="2.72"></circle>
                                    <circle cx="39.369" cy="3.525" r="2.72"></circle>
                                    <circle cx="51.405" cy="3.525" r="2.72"></circle>
                                    <circle cx="63.441" cy="3.525" r="2.72"></circle>
                                    <circle cx="75.479" cy="3.525" r="2.72"></circle>
                                    <circle cx="87.514" cy="3.525" r="2.719"></circle>
                                </g>
                                <g transform="translate(0 24)">
                                    <circle cx="3.261" cy="3.605" r="2.72"></circle>
                                    <circle cx="15.296" cy="3.605" r="2.719"></circle>
                                    <circle cx="27.333" cy="3.605" r="2.72"></circle>
                                    <circle cx="39.369" cy="3.605" r="2.72"></circle>
                                    <circle cx="51.405" cy="3.605" r="2.72"></circle>
                                    <circle cx="63.441" cy="3.605" r="2.72"></circle>
                                    <circle cx="75.479" cy="3.605" r="2.72"></circle>
                                    <circle cx="87.514" cy="3.605" r="2.719"></circle>
                                </g>
                                <g transform="translate(0 36)">
                                    <circle cx="3.261" cy="3.686" r="2.72"></circle>
                                    <circle cx="15.296" cy="3.686" r="2.719"></circle>
                                    <circle cx="27.333" cy="3.686" r="2.72"></circle>
                                    <circle cx="39.369" cy="3.686" r="2.72"></circle>
                                    <circle cx="51.405" cy="3.686" r="2.72"></circle>
                                    <circle cx="63.441" cy="3.686" r="2.72"></circle>
                                    <circle cx="75.479" cy="3.686" r="2.72"></circle>
                                    <circle cx="87.514" cy="3.686" r="2.719"></circle>
                                </g>
                                <g transform="translate(0 49)">
                                    <circle cx="3.261" cy="2.767" r="2.72"></circle>
                                    <circle cx="15.296" cy="2.767" r="2.719"></circle>
                                    <circle cx="27.333" cy="2.767" r="2.72"></circle>
                                    <circle cx="39.369" cy="2.767" r="2.72"></circle>
                                    <circle cx="51.405" cy="2.767" r="2.72"></circle>
                                    <circle cx="63.441" cy="2.767" r="2.72"></circle>
                                    <circle cx="75.479" cy="2.767" r="2.72"></circle>
                                    <circle cx="87.514" cy="2.767" r="2.719"></circle>
                                </g>
                                <g transform="translate(0 61)">
                                    <circle cx="3.261" cy="2.846" r="2.72"></circle>
                                    <circle cx="15.296" cy="2.846" r="2.719"></circle>
                                    <circle cx="27.333" cy="2.846" r="2.72"></circle>
                                    <circle cx="39.369" cy="2.846" r="2.72"></circle>
                                    <circle cx="51.405" cy="2.846" r="2.72"></circle>
                                    <circle cx="63.441" cy="2.846" r="2.72"></circle>
                                    <circle cx="75.479" cy="2.846" r="2.72"></circle>
                                    <circle cx="87.514" cy="2.846" r="2.719"></circle>
                                </g>
                                <g transform="translate(0 73)">
                                    <circle cx="3.261" cy="2.926" r="2.72"></circle>
                                    <circle cx="15.296" cy="2.926" r="2.719"></circle>
                                    <circle cx="27.333" cy="2.926" r="2.72"></circle>
                                    <circle cx="39.369" cy="2.926" r="2.72"></circle>
                                    <circle cx="51.405" cy="2.926" r="2.72"></circle>
                                    <circle cx="63.441" cy="2.926" r="2.72"></circle>
                                    <circle cx="75.479" cy="2.926" r="2.72"></circle>
                                    <circle cx="87.514" cy="2.926" r="2.719"></circle>
                                </g>
                                <g transform="translate(0 85)">
                                    <circle cx="3.261" cy="3.006" r="2.72"></circle>
                                    <circle cx="15.296" cy="3.006" r="2.719"></circle>
                                    <circle cx="27.333" cy="3.006" r="2.72"></circle>
                                    <circle cx="39.369" cy="3.006" r="2.72"></circle>
                                    <circle cx="51.405" cy="3.006" r="2.72"></circle>
                                    <circle cx="63.441" cy="3.006" r="2.72"></circle>
                                    <circle cx="75.479" cy="3.006" r="2.72"></circle>
                                    <circle cx="87.514" cy="3.006" r="2.719"></circle>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                <svg className="absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-blue-600 fill-current" viewBox="0 0 91 91" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="none" strokeWidth="1" fillRule="evenodd">
                        <g fillRule="nonzero">
                            <g>
                                <g>
                                    <circle cx="3.261" cy="3.445" r="2.72"></circle>
                                    <circle cx="15.296" cy="3.445" r="2.719"></circle>
                                    <circle cx="27.333" cy="3.445" r="2.72"></circle>
                                    <circle cx="39.369" cy="3.445" r="2.72"></circle>
                                    <circle cx="51.405" cy="3.445" r="2.72"></circle>
                                    <circle cx="63.441" cy="3.445" r="2.72"></circle>
                                    <circle cx="75.479" cy="3.445" r="2.72"></circle>
                                    <circle cx="87.514" cy="3.445" r="2.719"></circle>
                                </g>
                                <g transform="translate(0 12)">
                                    <circle cx="3.261" cy="3.525" r="2.72"></circle>
                                    <circle cx="15.296" cy="3.525" r="2.719"></circle>
                                    <circle cx="27.333" cy="3.525" r="2.72"></circle>
                                    <circle cx="39.369" cy="3.525" r="2.72"></circle>
                                    <circle cx="51.405" cy="3.525" r="2.72"></circle>
                                    <circle cx="63.441" cy="3.525" r="2.72"></circle>
                                    <circle cx="75.479" cy="3.525" r="2.72"></circle>
                                    <circle cx="87.514" cy="3.525" r="2.719"></circle>
                                </g>
                                <g transform="translate(0 24)">
                                    <circle cx="3.261" cy="3.605" r="2.72"></circle>
                                    <circle cx="15.296" cy="3.605" r="2.719"></circle>
                                    <circle cx="27.333" cy="3.605" r="2.72"></circle>
                                    <circle cx="39.369" cy="3.605" r="2.72"></circle>
                                    <circle cx="51.405" cy="3.605" r="2.72"></circle>
                                    <circle cx="63.441" cy="3.605" r="2.72"></circle>
                                    <circle cx="75.479" cy="3.605" r="2.72"></circle>
                                    <circle cx="87.514" cy="3.605" r="2.719"></circle>
                                </g>
                                <g transform="translate(0 36)">
                                    <circle cx="3.261" cy="3.686" r="2.72"></circle>
                                    <circle cx="15.296" cy="3.686" r="2.719"></circle>
                                    <circle cx="27.333" cy="3.686" r="2.72"></circle>
                                    <circle cx="39.369" cy="3.686" r="2.72"></circle>
                                    <circle cx="51.405" cy="3.686" r="2.72"></circle>
                                    <circle cx="63.441" cy="3.686" r="2.72"></circle>
                                    <circle cx="75.479" cy="3.686" r="2.72"></circle>
                                    <circle cx="87.514" cy="3.686" r="2.719"></circle>
                                </g>
                                <g transform="translate(0 49)">
                                    <circle cx="3.261" cy="2.767" r="2.72"></circle>
                                    <circle cx="15.296" cy="2.767" r="2.719"></circle>
                                    <circle cx="27.333" cy="2.767" r="2.72"></circle>
                                    <circle cx="39.369" cy="2.767" r="2.72"></circle>
                                    <circle cx="51.405" cy="2.767" r="2.72"></circle>
                                    <circle cx="63.441" cy="2.767" r="2.72"></circle>
                                    <circle cx="75.479" cy="2.767" r="2.72"></circle>
                                    <circle cx="87.514" cy="2.767" r="2.719"></circle>
                                </g>
                                <g transform="translate(0 61)">
                                    <circle cx="3.261" cy="2.846" r="2.72"></circle>
                                    <circle cx="15.296" cy="2.846" r="2.719"></circle>
                                    <circle cx="27.333" cy="2.846" r="2.72"></circle>
                                    <circle cx="39.369" cy="2.846" r="2.72"></circle>
                                    <circle cx="51.405" cy="2.846" r="2.72"></circle>
                                    <circle cx="63.441" cy="2.846" r="2.72"></circle>
                                    <circle cx="75.479" cy="2.846" r="2.72"></circle>
                                    <circle cx="87.514" cy="2.846" r="2.719"></circle>
                                </g>
                                <g transform="translate(0 73)">
                                    <circle cx="3.261" cy="2.926" r="2.72"></circle>
                                    <circle cx="15.296" cy="2.926" r="2.719"></circle>
                                    <circle cx="27.333" cy="2.926" r="2.72"></circle>
                                    <circle cx="39.369" cy="2.926" r="2.72"></circle>
                                    <circle cx="51.405" cy="2.926" r="2.72"></circle>
                                    <circle cx="63.441" cy="2.926" r="2.72"></circle>
                                    <circle cx="75.479" cy="2.926" r="2.72"></circle>
                                    <circle cx="87.514" cy="2.926" r="2.719"></circle>
                                </g>
                                <g transform="translate(0 85)">
                                    <circle cx="3.261" cy="3.006" r="2.72"></circle>
                                    <circle cx="15.296" cy="3.006" r="2.719"></circle>
                                    <circle cx="27.333" cy="3.006" r="2.72"></circle>
                                    <circle cx="39.369" cy="3.006" r="2.72"></circle>
                                    <circle cx="51.405" cy="3.006" r="2.72"></circle>
                                    <circle cx="63.441" cy="3.006" r="2.72"></circle>
                                    <circle cx="75.479" cy="3.006" r="2.72"></circle>
                                    <circle cx="87.514" cy="3.006" r="2.719"></circle>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>

        </div>
        </div>
    )
}
