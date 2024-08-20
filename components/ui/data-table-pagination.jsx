import { ChevronLeft, ChevronRight, ChevronsRight, ChevronsLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function DataTablePagination({
    table,
    pageSizeOptions = [10, 20, 30, 40, 50]
}) {
    const { pageIndex, pageSize } = table.getState().pagination;
    const rowCount = table.getRowCount();
    const startIndex = pageIndex * pageSize + 1;
    const endIndex = Math.min((pageIndex + 1) * pageSize, rowCount);

    return (
        <div className='flex flex-col md:flex-row items-center justify-between px-2 w-full'>
            <div className='flex-1 text-sm text-white'>
                Showing <strong>{startIndex}- {endIndex}</strong> of <strong>{rowCount}</strong>
            </div>
            <div className='flex flex-col-reverse items-center gap-4 sm:flex-row sm:gap-6 lg:gap-8'>
                <div className='flex items-center space-x-2'>
                    <p className='whitespace-nowrap text-sm font-medium text-white'>Rows per page</p>
                    <Select
                        value={`${table.getState().pagination.pageSize}`}
                        onValueChange={(value) => {
                            table.setPageSize(Number(value));
                        }}
                    >
                        <SelectTrigger className='h-8 w-[4.5rem]'>
                            <SelectValue placeholder={table.getState().pagination.pageSize} />
                        </SelectTrigger>
                        <SelectContent side='top'>
                            {pageSizeOptions.map((pageSize) => (
                                <SelectItem key={pageSize} value={`${pageSize}`}>
                                    {pageSize}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className='flex items-center justify-center text-sm font-medium text-white'>
                    Page {table.getState().pagination.pageIndex + 1} of{' '}
                    {table.getPageCount()}
                </div>
                <div className='flex items-center space-x-2'>
                    <Button
                        aria-label='Go to first page'
                        variant='outline'
                        className='size-8 p-0 lg:flex'
                        onClick={() => table.setPageIndex(0)}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <ChevronsLeft className='size-4' aria-hidden='true' />
                    </Button>
                    <Button
                        aria-label='Go to previous page'
                        variant='outline'
                        size='icon'
                        className='size-8'
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <ChevronLeft className='size-4' aria-hidden='true' />
                    </Button>
                    <Button
                        aria-label='Go to next page'
                        variant='outline'
                        size='icon'
                        className='size-8'
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        <ChevronRight className='size-4' aria-hidden='true' />
                    </Button>
                    <Button
                        aria-label='Go to last page'
                        variant='outline'
                        size='icon'
                        className='size-8 lg:flex'
                        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                        disabled={!table.getCanNextPage()}
                    >
                        <ChevronsRight className='size-4' aria-hidden='true' />
                    </Button>
                </div>
            </div>
        </div>
    );
}
