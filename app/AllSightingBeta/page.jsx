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

    fetch(`/api/getData2Vector?limit=${loadedRows}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
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
        <div className="text-5xl text-center text-white font-tektur relative">All Sightings
          <h1 className="text-xl text-center text-secondary font-tektur absolute -top-2 -right-12">Beta</h1>


        </div>
        <div className="bg-secondary w-64 h-1 my-2 rounded-md"></div>
      </div>

       <h2 className='text-base text-center text-white font-tektur relative'>Search by description and use your mouse or keyboard to scroll to the right for more information!</h2>

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
              userSearchColumn='description'
              inputPlaceHolder='Search by description'
            />
          </div>
        )
      }

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
