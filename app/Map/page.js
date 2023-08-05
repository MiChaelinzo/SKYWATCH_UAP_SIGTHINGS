import React from 'react'

export default function page() {
    return (
        <div className="py-10">
            <div className="grid place-items-center pb-4">
                <h1 className="text-5xl text-center text-white font-tektur">UFO Sighting on Map</h1>
                <div className="bg-secondary w-64 h-1 my-2 rounded-md"></div>
            </div>

            <div className="rounded-xl grid place-items-center">
                <iframe
                    src="/map/map.html"
                    className="rounded-xl "
                    height="600"
                    width="800"
                    title="map"
                />
            </div>
        </div>
    )
}
