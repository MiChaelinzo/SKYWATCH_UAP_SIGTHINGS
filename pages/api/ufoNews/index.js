import axios from 'axios';

export default async function handler(req, res) {
  const count = 100; // Number of news articles to retrieve

  const options = {
    method: 'GET',
    url: 'https://google-news13.p.rapidapi.com/search',
    params: {
      keyword: 'UFO',
      lr: 'en-US',
      count
    },
    // headers: {
    //   'X-BingApis-SDK': 'true',
    //   'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
    //   'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    // }
    headers: {
      'x-rapidapi-key': process.env.RAPIDAPI_KEY,
      'x-rapidapi-host': 'google-news13.p.rapidapi.com'
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
