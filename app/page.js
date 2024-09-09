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

      <div className="md:grid md:grid-cols-2 pt-12 items-center">
        <div>
        <Image src="/universe.jpg" alt="Disclaimer Image" width="500" height="1200" /> 
        </div>
        <div>
          <h1 className="text-3xl md:text-6xl font-tektur">Disclaimer 📄:</h1>
          <p className="text-xl text-justify py-4 tracking-wider">
            SkyWatch is a fascinating project that compiles and visualizes a vast amount of data on reported UAP sightings. While it provides a valuable tool for
            exploring these intriguing phenomena, it's important to remember that **SkyWatch does not, and cannot, definitively prove or disprove the existence of
            extraterrestrial life.
          </p>
          <p className="text-xl text-justify py-4 tracking-wider">
            The database captures subjective eyewitness accounts, which can be influenced by a variety of factors: misidentification of known objects, atmospheric
            conditions, limitations of human perception, and even hoaxes. Many reported UAPs can likely be attributed to more mundane explanations, such as:
          </p>
          <ul className="text-xl">
            <li className="list-disc">
              **Commercial or military aircraft:** Unfamiliar aircraft or unusual flight paths can easily be misconstrued.
            </li>
            <li className="list-disc">
              **Satellites and space debris:** Reflecting sunlight can create unexpected visual effects, especially at night.
            </li>
            <li className="list-disc">
              **Drones:** The increasing prevalence of drones, both commercial and private, adds to the complexity of airspace.
            </li>
            <li className="list-disc">
              **Weather phenomena:** Unusual cloud formations, atmospheric distortions, or even meteorological balloons can create perplexing sightings.
            </li>
          </ul>

          <p className="text-xl text-justify py-4 tracking-wider">
            SkyWatch's strength lies in its ability to organize and analyze this data, potentially revealing patterns or anomalies that warrant further
            investigation. However, **correlation does not equal causation.** Even if patterns emerge, they might point to human activities, natural phenomena, or
            as-yet-undiscovered aspects of our own world.
          </p>
          <p className="text-xl text-justify py-4 tracking-wider">
            Ultimately, SkyWatch provides a valuable resource for UAP research, but **the question of extraterrestrial life requires rigorous scientific inquiry,
            careful analysis, and extraordinary evidence.** SkyWatch is a step in the right direction, but the journey to understanding UAPs is far from over.
          </p>
        </div>
      </div>
    </div>
  );
}
