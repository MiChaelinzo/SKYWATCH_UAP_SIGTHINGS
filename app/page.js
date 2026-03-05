// app/page.js
"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TOTAL_REPORTS_COUNT = 500000;

export default function Page() {
  const [threatLevel, setThreatLevel] = useState('MODERATE');
  const [sightingCount, setSightingCount] = useState(0);

  useEffect(() => {
    // Animate sighting counter
    const target = TOTAL_REPORTS_COUNT;
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setSightingCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: 'TOTAL REPORTS', value: sightingCount.toLocaleString() + '+', color: 'text-cyber-yellow' },
    { label: 'ACTIVE ZONES', value: '2,847', color: 'text-cyber-cyan' },
    { label: 'AI MODELS', value: '8', color: 'text-cyber-pink' },
    { label: 'THREAT LEVEL', value: threatLevel, color: 'threat-moderate' },
  ];

  return (
    <div className="md:mx-28 mx-4 text-gray-200 pt-10 pb-12">
      {/* Hero Section */}
      <div className="md:grid md:grid-cols-2 items-center pt-10 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="status-online"></span>
            <span className="text-sm font-sharetech text-cyber-cyan uppercase tracking-widest">System Online</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-cyber-yellow text-glow-yellow leading-tight">
            SKYWATCH
          </h1>
          <h2 className="text-xl md:text-2xl font-rajdhani text-cyber-cyan text-glow-cyan mt-1 uppercase tracking-wider">
            UAP Surveillance Network
          </h2>
          <p className="text-lg text-gray-400 text-justify py-4 tracking-wider font-rajdhani leading-relaxed">
            SkyWatch is the world&apos;s most comprehensive platform for exploring and reporting Unidentified Aerial Phenomena (UAP) sightings.
            Combining a massive database of over 500,000 reports with cutting-edge AI image generation and powerful semantic search capabilities,
            SkyWatch lets users dive deep into the mystery of UAPs, uncover hidden patterns, and contribute their own data to the ongoing search for answers.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link href="/AllSighting">
              <button className="cyber-btn text-lg">
                Access Database
              </button>
            </Link>
            <Link href="/Chat">
              <button className="relative px-6 py-2 font-rajdhani font-bold uppercase tracking-wider text-cyber-cyan border border-cyber-cyan hover:bg-cyber-cyan/10 transition-all duration-200 text-lg">
                AI Sentinel
              </button>
            </Link>
          </div>
        </div>
        <div className="grid place-items-center py-4 relative">
          <div className="border-glow-cyan p-1">
            <Image src="/hero1.jpg" alt="UAP Sighting" width="500" height="300" className="opacity-90" />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-cyber-darker/80 border border-cyber-cyan/30 px-4 py-1">
            <span className="font-sharetech text-cyber-cyan text-xs uppercase tracking-widest">Classified Visual Data</span>
          </div>
        </div>
      </div>

      {/* Stats Dashboard */}
      <div className="my-16">
        <div className="cyber-divider mb-8"></div>
        <div className="flex items-center gap-2 mb-6">
          <span className="w-3 h-3 bg-cyber-yellow animate-neon-pulse"></span>
          <h3 className="text-sm font-sharetech text-cyber-yellow uppercase tracking-[0.3em]">Live Intelligence Dashboard</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="cyber-card p-6 text-center">
              <div className={`text-2xl md:text-3xl font-orbitron font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-xs font-sharetech text-gray-500 mt-2 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="md:grid md:grid-cols-2 pt-12 items-center gap-8">
        <div className="grid place-items-center py-4 relative">
          <div className="border-glow-pink p-1">
            <Image src="/hero2.jpg" alt="UAP Analysis" width="500" height="300" className="opacity-90" />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-cyber-darker/80 border border-cyber-pink/30 px-4 py-1">
            <span className="font-sharetech text-cyber-pink text-xs uppercase tracking-widest">Analysis Module</span>
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-cyber-cyan text-glow-cyan">
            CAPABILITIES
          </h2>
          <p className="text-xl md:text-2xl py-4 tracking-wider text-gray-400 font-rajdhani">
            SkyWatch UAP Sightings platform features:
          </p>
          <ul className="text-lg space-y-4 font-rajdhani">
            <li className="flex items-start gap-3">
              <span className="text-cyber-yellow mt-1">▸</span>
              <span>
                <strong className="text-cyber-yellow">Cloud Database:</strong>{' '}
                <a href="https://tidbcloud.com/" target="_blank" rel="noopener noreferrer" className="text-cyber-cyan hover:text-glow-cyan transition-all">&quot;TIDB Cloud Serverless&quot;</a>{' '}
                handles infrastructure so you can focus on exploring UAP data.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyber-pink mt-1">▸</span>
              <span>
                <strong className="text-cyber-pink">NVIDIA AI Sentinel:</strong>{' '}
                Leveraging NVIDIA&apos;s advanced language models for real-time analysis based on historical data and machine learning algorithms.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyber-cyan mt-1">▸</span>
              <span>
                <strong className="text-cyber-cyan">Easy MySQL Migration:</strong>{' '}
                Seamlessly migrate to{' '}
                <a href="https://tidbcloud.com/" target="_blank" rel="noopener noreferrer" className="text-cyber-yellow hover:text-glow-yellow transition-all">&quot;TIDB Cloud Serverless&quot;</a>{' '}
                to unlock powerful new features without rewriting your application.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyber-yellow mt-1">▸</span>
              <span>
                <strong className="text-cyber-yellow">Lightning Queries:</strong>{' '}
                Incredibly responsive search across our massive UAP database. No more waiting for results.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footnote Section */}
      <div className="mt-16">
        <div className="cyber-divider mb-6"></div>
        <div className="text-sm text-gray-600 font-sharetech" id="footnote-1">
          <span className="text-cyber-yellow/50 text-xs uppercase tracking-widest">// DISCLAIMER</span>
          <p className="mt-2 leading-relaxed">
            SkyWatch compiles and visualizes data on reported UAP sightings. It does not definitively prove or disprove the existence of extraterrestrial life.
            The database captures subjective eyewitness accounts, which can be influenced by misidentification of known objects, atmospheric conditions,
            limitations of human perception, and other factors. Many reported UAPs can likely be attributed to commercial/military aircraft, satellites, drones, or weather phenomena.
          </p>
        </div>
      </div>
    </div>
  );
}
