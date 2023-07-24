"use client"

// import { useState, useEffect } from 'react';

// const IndexPage = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Fetch data from the API route
//     fetch('/api')
//       .then((response) => response.json())
//       .then((data) => setData(data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div>
//       <h1>TiDB Cloud App</h1>
//       <ul>
//         {data.map((row) => (
//           <li key={row.id}>{row.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default IndexPage;
// import { useEffect, useState } from 'react';
// import executeQuery from '../lib/tidb';

// export default function Home({ rows }) {
//   return (
//     <div>
//       <h1>UAP Sightings</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Event Date Time</th>
//             <th>City</th>
//             <th>State/Provinces</th>
//             <th>Shape</th>
//             <th>Duration</th>
//             <th>Summary</th>
//             <th>Posted</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows.map((row, index) => (
//             <tr key={index}>
//               <td>{row.event_date_time}</td>
//               <td>{row.city}</td>
//               <td>{row.state_provinces}</td>
//               <td>{row.shape}</td>
//               <td>{row.duration}</td>
//               <td>{row.summary}</td>
//               <td>{row.posted}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export async function getStaticProps() {
//   try {
//     const results = await executeQuery(`
//       SELECT * FROM UAP_Sightings.UAP_Sightings
//       LIMIT 10;
//     `);

//     const rows = results.map((row) => ({
//       event_date_time: row.event_date_time,
//       city: row.city,
//       state_provinces: row.state_provinces,
//       shape: row.shape,
//       duration: row.duration,
//       summary: row.summary,
//       posted: row.posted,
//     }));

//     return {
//       props: {
//         rows,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching data:', error.message);
//     return {
//       props: {
//         rows: [],
//       },
//     };
//   }
// }

// import executeQuery from '../lib/tidb';
// import React from 'react';

// export async function getStaticProps() {
//   const results = await executeQuery(`
//     SELECT city from UAP_Sightings limit 10;
//   `);

//   const cities = results.map((row) => row.city);
//   console.log("Hello")

//   return {
//     props: {
//       cities4,
//     },
//   };
// }

// export default function Page({ cities = [] }) {
//   return (
//     <div>
//       <h1>City List</h1>
//       <ul>
//         {cities.map((city, index) => (
//           <li key={index}>{city}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }



import TopStarRepos from './top-star-repos'
import executeQuery from '../../lib/tidb'

export default function Home({ rows }) {
  return (
    <div className='bg-white'>

      <TopStarRepos rows={rows} />

    </div>
  )
}

export async function getStaticProps() {
  const results = await executeQuery(`
  SELECT city from UAP_Sightings;
  `);

  let rows = [];
  for (const row of results) {
    rows.push({
      city: row.city,
    });
  }

  return {
    props: {
      rows,
    }
  }
}