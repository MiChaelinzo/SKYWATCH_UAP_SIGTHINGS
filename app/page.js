import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
  return (
    <div className='md:mx-28 mx-4 text-white pt-10 pb-12'>

      <div className='md:grid md:grid-cols-2 items-center pt-10'>
        <div className=''>
          <h1 className='text-3xl md:text-6xl font-tektur'>Who we are</h1>
          <p className='text-xl text-justify py-4 tracking-wider'>A website and database that currently stores over 2 million events & information about UFO/UAP sightings going back to year 0100, 1st century with the legitimate sources from (NUFORC) National UFO Reporting Center, (MUFON)
Mutual UFO Network, (NICAP) National Investigations Committee on Aerial Phenomena, nationalarchives.gov, US National Intelligence office, etc. The database is built using TiDB, which is an advanced, open-source, distributed SQL database with MySQL compatibility.</p>

          <Link href="/AllSighting">
            <button className='bg-secondary py-2 px-8 rounded-md text-xl md:text-2xl'>All Sighting</button>
          </Link>

        </div>
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <Image src='/hero.jpg' alt="img" width="500" height="300" />
        </div>
      </div>

      <div className='md:grid md:grid-cols-2 pt-12 items-center'>
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <Image src='/feat.jpg' alt="img" width="500" height="300" />
        </div>
        <div className=''>
          <h1 className='text-3xl md:text-5xl font-tektur'>What else do we have</h1>
          <p className='text-xl md:text-2xl py-4 tracking-wider'> UAP Sightings is a web app where you can:
          </p>
          <ul className="text-xl">
            <li className="list-disc">TiDB's distributed architecture enables seamless scalability and high availability, accommodating the website's growing data needs.</li>
            <li className="list-disc">Image generation and downloads that utilizes latest SDXL 0.9, short for Stable Diffusion XL.</li>
            <li className="list-disc">With full MySQL compatibility, TiDB simplifies development and allows easy migration from traditional MySQL databases, ensuring a smooth integration process.</li>
            <li className="list-disc">TiDB's powerful query capabilities facilitate efficient data retrieval and analysis, enhancing user experience and supporting further investigations into sightings.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
