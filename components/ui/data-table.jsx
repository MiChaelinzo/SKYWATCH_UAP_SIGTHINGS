"use client";

import * as React from 'react';
import { ColumnFiltersState, SortingState, VisibilityState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { DataTableViewOptions } from '@/components/ui/data-table-view-options';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { DataTablePagination } from '@/components/ui/data-table-pagination';
import { Search, X, CircleCheck, Timer, CircleX } from 'lucide-react';

export function DataTable({ columns, data, userSearchColumn, inputPlaceHolder }) {
    const [sorting, setSorting] = React.useState([]);
    const [columnFilters, setColumnFilters] = React.useState([]);
    const [columnVisibility, setColumnVisibility] = React.useState({});
    const [rowSelection, setRowSelection] = React.useState({});

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    const clearSearch = () => {
        setColumnFilters([]);
        table.getColumn(userSearchColumn)?.setFilterValue('');
    };

    const renderCellContent = (cell, row) => {
        return flexRender(cell.column.columnDef.cell, cell.getContext());
    };

    return (
        <div className='flex flex-col space-y-2'>
            <div className='flex items-center'>
                <div className='flex w-full items-center'>
                    <div className='w-10 z-20 pl-1 text-center pointer-events-none flex items-center justify-center'>
                        <Search height={20} width={20} />
                    </div>
                    <Input
                        className='w-full md:max-w-md -mx-10 pl-10 pr-8 py-2 z-10 dark:border-white'
                        placeholder={inputPlaceHolder}
                        value={(table.getColumn(userSearchColumn)?.getFilterValue() ?? '')}
                        onChange={(event) =>
                            table.getColumn(userSearchColumn)?.setFilterValue(event.target.value)
                        }
                    />
                    <div onClick={clearSearch} className='ml-2 z-20 cursor-pointer'>
                        <X />
                    </div>
                </div>
                <DataTableViewOptions table={table} />
            </div>
            <div className='rounded-md border dark:border-white text-white'>
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() ? 'selected' : undefined}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {renderCellContent(cell, row)}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className='h-24 text-center'>
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div>
                <DataTablePagination table={table} />
            </div>
        </div>
    );
}
