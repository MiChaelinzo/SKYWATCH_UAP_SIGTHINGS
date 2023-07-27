"use client"

import React, { useEffect, useState } from 'react';

export default function Page() {
  const [data, setData] = useState([]);
  const [loadedRows, setLoadedRows] = useState(50);

  useEffect(() => {
    fetch(`/api/getData2?limit=${loadedRows}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [loadedRows]);

  const handleLoadMore = () => {
    setLoadedRows((prevLoadedRows) => prevLoadedRows + 50);
  };

  return (
    <div className="py-10">
      <div className="grid place-items-center">
        <div className="text-5xl text-center text-white font-tektur relative">All Sightings
        <h1 className="text-xl text-center text-secondary font-tektur absolute -top-2 -right-12">Beta</h1>
        </div>
        <div className="bg-secondary w-64 h-1 my-2 rounded-md"></div>
      </div>

      <div className="overflow-x-auto mx-4">
        <table className="w-full bg-white shadow-md rounded-lg mt-4">
          <thead>
            <tr className="bg-gray-100 border-b-2 border-gray-800">
              <th className="py-2 px-4 font-semibold text-sm">City</th>
              <th className="py-2 px-4 font-semibold text-sm">Country</th>
              <th className="py-2 px-4 font-semibold text-sm">Event Date</th>
              <th className="py-2 px-4 font-semibold text-sm">Event Date Details</th>
              <th className="py-2 px-4 font-semibold text-sm">Decription</th>
              <th className="py-2 px-4 font-semibold text-sm">District</th>
              <th className="py-2 px-4 font-semibold text-sm">Geoname ID</th>
              <th className="py-2 px-4 font-semibold text-sm">ID</th>
              <th className="py-2 px-4 font-semibold text-sm">Latitude</th>
              <th className="py-2 px-4 font-semibold text-sm">Location</th>
              <th className="py-2 px-4 font-semibold text-sm">Longitude</th>
              <th className="py-2 px-4 font-semibold text-sm">Other</th>
              <th className="py-2 px-4 font-semibold text-sm">Source</th>
              <th className="py-2 px-4 font-semibold text-sm">Source ID</th>
              <th className="py-2 px-4 font-semibold text-sm">TS</th>
              <th className="py-2 px-4 font-semibold text-sm">Water</th>
              <th className="py-2 px-4 font-semibold text-sm">Word Count</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={`border-b-2 border-gray-800 ${index % 2 === 0 ? 'bg-gray-500' : ''}`}>
                <td className="py-2 px-4 text-sm">{row.city}</td>
                <td className="py-2 px-4 text-sm">{row.country}</td>
                <td className="py-2 px-4 text-sm">{row.date}</td>
                <td className="py-2 px-4 text-sm">{row.date_detail}</td>
                <td className="py-2 px-4 text-sm">{row.description}</td>
                <td className="py-2 px-4 text-sm">{row.district}</td>
                <td className="py-2 px-4 text-sm">{row.geoname_id}</td>
                <td className="py-2 px-4 text-sm">{row.id}</td>
                <td className="py-2 px-4 text-sm">{row.latitude}</td>
                <td className="py-2 px-4 text-sm">{row.location}</td>
                <td className="py-2 px-4 text-sm">{row.longitude}</td>
                <td className="py-2 px-4 text-sm">{row.other}</td>
                <td className="py-2 px-4 text-sm">{row.source}</td>
                <td className="py-2 px-4 text-sm">{row.source_id}</td>
                <td className="py-2 px-4 text-sm">{row.ts}</td>
                <td className="py-2 px-4 text-sm">{row.water}</td>
                <td className="py-2 px-4 text-sm">{row.word_count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      </div>
    </div>
  );
}
