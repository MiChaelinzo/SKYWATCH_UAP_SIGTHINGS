import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function page() {
  return (
    <div className="md:mx-28 mx-4 text-white pt-10 pb-12">
      <div className="md:grid md:grid-cols-2 items-center pt-10">
        <div>
          <h1 className="text-3xl md:text-6xl font-tektur">Who we are</h1>
          <p className="text-xl text-justify py-4 tracking-wider">
            SkyWatch is the world's most comprehensive platform for exploring and reporting Unidentified Aerial Phenomena (UAP) sightings. 
            Combining a massive database of over 500,000 reports with cutting-edge AI image generation and powerful semantic search capabilities, 
            SkyWatch lets users dive deep into the mystery of UAPs, uncover hidden patterns, and contribute their own data to the ongoing search for answers.
          </p>

          <Link href="/AllSighting">
            <button className="bg-secondary py-2 px-8 rounded-md text-xl md:text-2xl">All Sighting</button>
          </Link>
        </div>
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <Image src="/hero.jpg" alt="img" width="500" height="300" />
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 pt-12 items-center">
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <Image src="/feat.jpg" alt="img" width="500" height="300" />
        </div>
        <div>
          <h1 className="text-3xl md:text-5xl font-tektur">What else do we have</h1>
          <p className="text-xl md:text-2xl py-4 tracking-wider">
            SkyWatch UAP Sightings is a web-application where you can:
          </p>
          <ul className="text-xl">
            <li className="list-disc">
              Effortless Cloud Database:{' '}
              <a href="https://tidbcloud.com/" target="_blank" rel="noopener noreferrer">"TIDB Cloud Serverless"</a>{' '}
              takes care of everything, so you can focus on exploring UAP data, not managing servers. It's like having a team of database experts on call 24/7!
            </li>
            <li className="list-disc">
              AI-Powered Visuals, Unlimited: Imagine any UAP, generate its image with cutting-edge Stable Diffusion XL technology... and download as many as you like, all powered by{' '}
              <a href="https://tidbcloud.com/" target="_blank" rel="noopener noreferrer">"TIDB Cloud Serverless"</a>{' '}
              speed.
            </li>
            <li className="list-disc">
              Easy Switch from MySQL: Already using MySQL? Migrating to{' '}
              <a href="https://tidbcloud.com/" target="_blank" rel="noopener noreferrer">"TIDB Cloud Serverless"</a>{' '}
              is a breeze, letting you unlock powerful new features without rewriting your whole application.
            </li>
            <li className="list-disc">
              Find Answers Fast:{' '}
              <a href="https://tidbcloud.com/" target="_blank" rel="noopener noreferrer">"TIDB Cloud Serverless"</a>{' '}
              lightning-fast queries make exploring our massive UAP database incredibly responsive. No more waiting around for results – dig into the data and uncover the truth!
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-sm text-gray-500">
        <hr className="my-4" />
        <p id="footnote-1">
          <sup>1</sup> SkyWatch is a tool for exploring reported UAP sightings but does not prove or disprove the existence of extraterrestrial life. Many sightings can be attributed to known objects or phenomena. 
        </p> 
      </div>
    </div>
  );
}
