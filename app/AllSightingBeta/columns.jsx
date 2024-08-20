"use client";

import { DataTableColumnHeader } from '@/components/ui/data-table-column-header';

export const dataTableColumns = [
    {
        accessorKey: 'city',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='City' />
        ),
    },
    {
        accessorKey: 'country',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Country' />
        ),
    },
    {
        accessorKey: 'date',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Event Date' />
        ),
    },
    {
        accessorKey: 'date_detail',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Event Date Details' />
        ),
    },
    {
        accessorKey: 'description',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Decription' />
        ),
    },
    {
        accessorKey: 'district',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='District' />
        ),
    },
    {
        accessorKey: 'geoname_id',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Geoname ID' />
        ),
    },
    {
        accessorKey: 'id',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='ID' />
        ),
    },
    {
        accessorKey: 'latitude',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Latitude' />
        ),
    },
    {
        accessorKey: 'location',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Location' />
        ),
    },
    {
        accessorKey: 'longitude',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Longitude' />
        ),
    },
    {
        accessorKey: 'other',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Other' />
        ),
    },
    {
        accessorKey: 'source',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Source' />
        ),
    },
    {
        accessorKey: 'source_id',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Source ID' />
        ),
    },
    {
        accessorKey: 'ts',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='TS' />
        ),
    },
    {
        accessorKey: 'water',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Water' />
        ),
    },
    {
        accessorKey: 'word_count',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Word Count' />
        ),
    },
];
