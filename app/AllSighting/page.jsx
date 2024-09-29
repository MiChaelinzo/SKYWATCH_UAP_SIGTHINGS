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
    <>
      <div className="py-10">
        <div className="grid place-items-center">
          <h1 className="text-5xl text-center text-white font-tektur">All Sightings</h1>
          <div className="bg-secondary w-64 h-1 my-2 rounded-md"></div>
        </div>
        <h2 className='text-base text-center text-white font-tektur relative'> Add Sightings are added here. Search & scroll for more details.</h2>

        {loading ? (
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
              inputPlaceHolder='Search by shape' />
          </div>
        )}

      </div><div className="mt-8 text-sm text-gray-500">
        <hr className="my-4" />
        <p id="footnote-1">
          <sup>1</sup> SkyWatch is a fascinating project that compiles and visualizes a vast amount of data on reported UAP sightings. While it provides a valuable tool for exploring these intriguing phenomena, it's important to remember that SkyWatch does not, and cannot, definitively prove or disprove the existence of extraterrestrial life.
          <br /><br />
          The database captures subjective eyewitness accounts, which can be influenced by a variety of factors: misidentification of known objects, atmospheric conditions, limitations of human perception, and even hoaxes. Many reported UAPs can likely be attributed to more mundane explanations, such as:
          <br />
          <ul>
            <li>Commercial or military aircraft: Unfamiliar aircraft or unusual flight paths can easily be misconstrued.</li>
            <li>Satellites and space debris: Reflecting sunlight can create unexpected visual effects, especially at night.</li>
            <li>Drones: The increasing prevalence of drones, both commercial and private, adds to the complexity of airspace.</li>
            <li>Weather phenomena: Unusual cloud formations, atmospheric distortions, or even meteorological balloons can create perplexing sightings.</li>
          </ul>
        </p>
      </div>
    </>
  );
}
