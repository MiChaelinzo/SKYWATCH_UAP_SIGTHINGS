import mysql from 'mysql2';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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

  connection.connect(function (err) {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to connect to the database.' });
    }

    const { event_date_time, city, state_provinces, shape, duration, summary, posted } = req.body;

    connection.query(
      'INSERT INTO UAP_Sightings (event_date_time, city, state_provinces, shape, duration, summary, posted) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [event_date_time, city, state_provinces, shape, duration, summary, posted],
      function (err, result) {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Failed to add data to the database.' });
        }

        connection.end();
        return res.status(200).json({ success: true });
      }
    );
  });
}
