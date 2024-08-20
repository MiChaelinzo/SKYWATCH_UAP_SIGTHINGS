"use client";

import { DataTableColumnHeader } from '@/components/ui/data-table-column-header';

export const dataTableColumns = [
    {
        accessorKey: 'attributes',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Attributes' />
        ),
    },
    {
        accessorKey: 'date',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Date' />
        ),
    },
    {
        accessorKey: 'desc',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Description' />
        ),
    },
    {
        accessorKey: 'key_vals',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Key Values' />
        ),
    },
    {
        accessorKey: 'location',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Location' />
        ),
    },
    {
        accessorKey: 'ref',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Refrence' />
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
        accessorKey: 'time',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Time' />
        ),
    },
    {
        accessorKey: 'type',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Type' />
        ),
    },
];
