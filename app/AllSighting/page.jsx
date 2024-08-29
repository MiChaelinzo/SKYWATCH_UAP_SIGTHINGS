"use client"

import React, { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { dataTableColumns } from './columns';
import { DataTable } from '@/components/ui/data-table';

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [loadedRows, setLoadedRows] = useState(50);

  useEffect(() => {
    setLoading(true);

    fetch(`/api/getDataVector?limit=${loadedRows}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [loadedRows]);

  const handleLoadMore = () => {
    setLoadedRows((prevLoadedRows) => prevLoadedRows + 50);
  };

  return (
    <div className="py-10">
      <div className="grid place-items-center">
        <h1 className="text-5xl text-center text-white font-tektur">All Sightings</h1>
        <div className="bg-secondary w-64 h-1 my-2 rounded-md"></div>
      </div>
       <h2 className='text-base text-center text-white font-tektur relative'> Search by shape and use your mouse or keyboard to scroll to the right for more information!</h2>

      {
        loading ? (
          <div className='flex flex-col h-full space-y-2 p-8'>
            {['h-9 md:w-1/3', 'h-10', 'h-12', 'h-12', 'h-12', 'h-12', 'h-12', 'h-12', 'h-12'].map((classes, index) => (
              <Skeleton key={index} className={classes} />
            ))}
          </div>
        ) : (
          <div className='p-8'>
            <DataTable
              columns={dataTableColumns}
              data={data}
              userSearchColumn='shape'
              inputPlaceHolder='Search by shape'
            />
          </div>
        )
      }

      {/* <div className="overflow-x-auto mx-4">
        <table className="w-full bg-white shadow-md rounded-lg mt-4">
          <thead>
            <tr className="bg-gray-100 border-b-2 border-gray-800">

              <th className="py-2 px-4 font-semibold text-sm">Month and Year</th>
              <th className="py-2 px-4 font-semibold text-sm">Event Date and Time</th>
              <th className="py-2 px-4 font-semibold text-sm">City</th>
              <th className="py-2 px-4 font-semibold text-sm">State Provinces</th>
              <th className="py-2 px-4 font-semibold text-sm">Shape</th>
              <th className="py-2 px-4 font-semibold text-sm">Duration</th>
              <th className="py-2 px-4 font-semibold text-sm">Summary</th>
              <th className="py-2 px-4 font-semibold text-sm">Posted At</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={`border-b-2 border-gray-800 ${index % 2 === 0 ? 'bg-gray-500' : ''}`}>
                <td className="py-2 px-4 text-sm">{row.month_year_of_event}</td>
                <td className="py-2 px-4 text-sm">{row.event_date_time}</td>
                <td className="py-2 px-4 text-sm">{row.city}</td>
                <td className="py-2 px-4 text-sm">{row.state_provinces}</td>
                <td className="py-2 px-4 text-sm">{row.shape}</td>
                <td className="py-2 px-4 text-sm">{row.duration}</td>
                <td className="py-2 px-4 text-sm">{row.summary}</td>
                <td className="py-2 px-4 text-sm">{row.posted}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      {/* <div className="flex justify-center mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      </div> */}
    </div>
  );
}
