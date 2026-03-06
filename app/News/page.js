"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await axios.get('/api/ufoNews');
        if (response.data.status === 'success') {
          setNews(response.data.items || []);
        } else {
          console.error('Error fetching news: Invalid response status');
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  return (
    <div className="py-10 px-4">
      <div className="grid place-items-center">
        <div className="flex items-center gap-2 mb-2">
          <span className="status-online"></span>
          <span className="text-xs font-sharetech text-cyber-cyan uppercase tracking-[0.3em]">Live Feed Active</span>
        </div>
        <h1 className="text-4xl md:text-5xl text-center text-cyber-yellow font-orbitron font-bold text-glow-yellow">
          NEWS FEED
        </h1>
        <p className="text-gray-500 font-sharetech text-sm uppercase tracking-widest mt-2">Latest UAP/UFO Intelligence Reports</p>
        <div className="cyber-divider w-64 my-4"></div>
      </div>

      <div className="py-8 max-w-4xl mx-auto">
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="cyber-card p-6 animate-pulse">
                <div className="h-4 bg-cyber-gray rounded w-3/4 mb-3"></div>
                <div className="h-3 bg-cyber-gray rounded w-full"></div>
              </div>
            ))}
          </div>
        ) : (
          <ul className="space-y-4">
            {news.map((article, index) => (
              <li key={index} className="cyber-card p-6 hover:border-cyber-cyan/50 transition-all duration-300 group">
                <div className="flex items-start gap-3">
                  <span className="text-cyber-yellow font-orbitron text-xs mt-1 opacity-50">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <a
                      href={article.newsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-rajdhani font-semibold text-gray-200 group-hover:text-cyber-cyan transition-colors duration-200"
                    >
                      {article.title}
                    </a>
                    <p className="text-gray-500 text-sm mt-1 font-rajdhani">{article.snippet}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
