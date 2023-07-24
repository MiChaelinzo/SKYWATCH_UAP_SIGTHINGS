import mysql from 'mysql2';

const connection = mysql.createPool({
    config: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: 4000,
    }
});
export default async function executeQuery(query, values = []) {
    try {
        const results = await connection.query(query, values);
        await connection.end();
        return results;
    } catch (error) {
        return { error };
    }
}


// const mysql = require('mysql');
// require('dotenv').config();

// const connection = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: 4000,
//   connectionLimit: 10,
// });

// const executeQuery = async (query) => {
//   try {
//     const [rows] = await connection.query(query);
//     return rows;
//   } catch (error) {
//     console.error('Error executing TiDB query:', error.message);
//     throw error;
//   }
// };

// export default executeQuery;