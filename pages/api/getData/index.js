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
