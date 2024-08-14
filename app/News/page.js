"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await axios.get('/api/ufoNews');
        // console.log('response:', response);
        if (response.data.status === 'success') {
          setNews(response.data.items || []);
        } else {
          console.error('Error fetching news: Invalid response status');
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    }

    fetchNews();
  }, []);

  return (
    <div className="py-10">
      <div className="grid place-items-center">
        <h1 className="text-5xl text-center text-white font-tektur">Latest UAP/UFO News</h1>
        <div className="bg-secondary w-64 h-1 my-2 rounded-md"></div>
      </div>

      <div className='py-8'>
        <ul className="max-w-4xl mx-auto text-white">
          {news.map((article, index) => (
            <li key={index} className="mb-4">
              <a
                href={article.newsUrl} // Updated property to match the new response structure
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary font-medium"
              >
                {article.title}
              </a>
              <p>{article.snippet}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewsPage;
