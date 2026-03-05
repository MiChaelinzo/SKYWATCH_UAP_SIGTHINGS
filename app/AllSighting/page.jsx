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
      <div className="py-10 px-4">
        <div className="grid place-items-center">
          <div className="flex items-center gap-2 mb-2">
            <span className="status-online"></span>
            <span className="text-xs font-sharetech text-cyber-cyan uppercase tracking-[0.3em]">Database Connected</span>
          </div>
          <h1 className="text-4xl md:text-5xl text-center text-cyber-yellow font-orbitron font-bold text-glow-yellow">
            ALL SIGHTINGS
          </h1>
          <div className="cyber-divider w-64 my-4"></div>
        </div>
        <p className="text-sm text-center text-gray-500 font-sharetech uppercase tracking-widest mb-6">
          Search &amp; scroll for detailed incident reports
        </p>

        {loading ? (
          <div className="flex flex-col h-full space-y-2 p-8">
            {['h-9 md:w-1/3', 'h-10', 'h-12', 'h-12', 'h-12', 'h-12', 'h-12', 'h-12', 'h-12'].map((classes, index) => (
              <Skeleton key={index} className={`${classes} bg-cyber-gray`} />
            ))}
          </div>
        ) : (
          <div className="p-8">
            <DataTable
              columns={dataTableColumns}
              data={data}
              userSearchColumn='shape'
              inputPlaceHolder='Search by shape' />
          </div>
        )}

      </div>
      <div className="mx-4 md:mx-8 mt-8">
        <div className="cyber-divider mb-4"></div>
        <p className="text-xs text-gray-600 font-sharetech leading-relaxed" id="footnote-1">
          <span className="text-cyber-yellow/50 uppercase tracking-widest">// NOTICE:</span> SkyWatch compiles reported UAP sightings.
          Eyewitness accounts may be influenced by misidentification, atmospheric conditions, or perceptual limitations.
        </p>
      </div>
    </>
  );
}
