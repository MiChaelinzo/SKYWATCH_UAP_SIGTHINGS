import React from 'react';

const columns = [
    'event_date_time',
    'city',
    'state_provinces',
    'shape',
    'duration',
    'summary',
    'posted',
];

export default function Table() {
    return (
        <div className="my-4">
            <div className="grid place-items-center">
                <h1 className="text-5xl text-center text-white">All Sighting</h1>
                <div className="bg-secondary w-96 h-1 my-2 rounded-md"></div>
                {/* </div> */}

                <div className="overflow-x-auto">
                    <table className="table-auto border-collapse w-full">
                        <thead>
                            <tr>
                                {columns.map((column) => (
                                    <th
                                        key={column}
                                        className="px-4 py-2 bg-gray-200 border border-gray-300"
                                    >
                                        {column}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
