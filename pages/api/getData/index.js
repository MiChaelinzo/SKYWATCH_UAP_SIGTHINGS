// // pages/api/tidb.js

// import { createClient } from 'tidb';

// export default async function handler(req, res) {
//   const config = {
//     host: 'gateway01.eu-central-1.prod.aws.tidbcloud.com',
//     port: 4000,
//     user: '4RsHdTyqwtRrmGP.root',
//     password: 'QyFth1WGm9BA2Yva',
//     database: 'test',
//     ssl: {
//       minVersion: 'TLSv1.2',
//       rejectUnauthorized: true
//     }
//   };

//   // Create a new TiDB client
//   const client = createClient(config);

//   try {
//     // Run a query
//     const result = await new Promise((resolve, reject) => {
//       client.query('SELECT * from UAP_Sightings.UAP_Sightings limit 10;', (err, result) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(result.rows);
//         }
//       });
//     });

//     res.status(200).json(result);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({ error: 'An error occurred while fetching data from TiDB.', details: error.message });
//   } finally {
//     client.close();
//   }
// }
// pages/api/sightings.js
import mysql from 'mysql2';

export default function handler(req, res) {
  const connection = mysql.createConnection({
    host: "gateway01.eu-central-1.prod.aws.tidbcloud.com",
    port: 4000,
    user: "4RsHdTyqwtRrmGP.root",
    password: "QyFth1WGm9BA2Yva",
    database: 'UAP_Sightings',
    ssl: {
      minVersion: 'TLSv1.2',
      rejectUnauthorized: true
    },
    connectAttributes: {
      program_name: 'pingcap/serverless-test'
    }
  });

  connection.connect(function(err) {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to connect to the database.' });
      return;
    }

    connection.query('SELECT * FROM UAP_Sightings.UAP_Sightings LIMIT 50;', function(err, rows) {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch data from the database.' });
        return;
      }

      connection.end();
      res.status(200).json(rows);
    });
  });
}
