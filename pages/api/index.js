// pages/api/tidb.js

import { createClient } from 'tidb';

export default async function handler(req, res) {
  const config = {
    host: 'gateway01.eu-central-1.prod.aws.tidbcloud.com',
    port: 4000,
    user: '4RsHdTyqwtRrmGP.root',
    password: 'QyFth1WGm9BA2Yva',
    database: 'test',
    ssl: {
      minVersion: 'TLSv1.2',
      rejectUnauthorized: true
    }
  };

  // Create a new TiDB client
  const client = createClient(config);

  try {
    // Run a query
    const result = await new Promise((resolve, reject) => {
      client.query('SELECT * from UAP_Sightings.UAP_Sightings limit 10;', (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result.rows);
        }
      });
    });

    res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'An error occurred while fetching data from TiDB.', details: error.message });
  } finally {
    client.close();
  }
}
