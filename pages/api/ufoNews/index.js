import axios from 'axios';

export default async function handler(req, res) {
  const count = 100; // Number of news articles to retrieve

  const options = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news/search',
    params: {
      q: 'UFO', // Search query for UFO news
      freshness: 'Day', // Show news from the past day
      safeSearch: 'Off',
      textFormat: 'Raw',
      count // Limit the number of results
    },
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching news' });
  }
}
