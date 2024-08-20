"use client";

import { DataTableColumnHeader } from '@/components/ui/data-table-column-header';

export const dataTableColumns = [
    {
        accessorKey: 'month_year_of_event',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Month and Year' />
        ),
    },
    {
        accessorKey: 'event_date_time',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Event Date and Time' />
        ),
    },
    {
        accessorKey: 'city',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='City' />
        ),
    },
    {
        accessorKey: 'state_provinces',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='State Provinces' />
        ),
    },
    {
        accessorKey: 'shape',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Shape' />
        ),
    },
    {
        accessorKey: 'duration',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Duration' />
        ),
    },
    {
        accessorKey: 'summary',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Summary' />
        ),
    },
    {
        accessorKey: 'posted',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Posted at' />
        ),
    },
];
