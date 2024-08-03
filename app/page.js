import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
  return (
    <div className='md:mx-28 mx-4 text-white pt-10 pb-12'>

      <div className='md:grid md:grid-cols-2 items-center pt-10'>
        <div className=''>
          <h1 className='text-3xl md:text-6xl font-tektur'>Who we are</h1>
          <p className='text-xl text-justify py-4 tracking-wider'>SkyWatch is the world's most comprehensive platform for exploring and reporting Unidentified Aerial Phenomena (UAP) sightings. Combining a massive database of over 500,000 reports with cutting-edge AI image generation and powerful semantic search capabilities, SkyWatch lets users dive deep into the mystery of UAPs, uncover hidden patterns, and contribute their own data to the ongoing search for answers.
</p>

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
          <p className='text-xl md:text-2xl py-4 tracking-wider'> UAP Sightings is a web-application where you can:
          </p>
          <ul className="text-xl">
            <li className="list-disc">TiDB Cloud is a fully-managed Database-as-a-Service (DBaaS) that brings TiDB, an open-source Hybrid Transactional and Analytical Processing (HTAP) database, to your cloud.</li>
            <li className="list-disc">Unlimited image generation and downloads that utilizes the latest SDXL 0.9, short for Stable Diffusion XL.</li>
            <li className="list-disc">With full MySQL compatibility, TiDB simplifies development and allows easy migration from traditional MySQL databases, ensuring a smooth integration process.</li>
            <li className="list-disc">TiDB's powerful query capabilities facilitate efficient data retrieval and analysis, enhancing user experience and supporting further investigations into sightings.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
