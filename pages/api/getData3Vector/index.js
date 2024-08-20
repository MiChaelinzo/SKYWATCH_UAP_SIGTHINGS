import mysql from 'mysql2';

export default function handler(req, res) {
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 4000,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
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
      res.status(500).json({ error: 'Failed to connect to the database.' });
      return;
    }

    connection.query(`SELECT * FROM UAPSIGHTINGS_hatch_udb.UAPSIGHTINGS_hatch_udb_table LIMIT 1000;`, function (err, rows) {
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
