import { ArrowDown, ArrowUp, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export function DataTableColumnHeader({ column, title, info, className }) {
    if (!column.getCanSort()) {
        return <div className={cn(className)}>{title}</div>;
    }

    return (
        <div className={cn('flex items-center space-x-2', className)}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant='ghost'
                        size='sm'
                        className='-ml-3 h-8 data-[state=open]:bg-accent text-white hover:text-gray-700'
                    >
                        <span>{title}</span>
                        {info && (
                            <TooltipProvider>
                                <Tooltip delayDuration={300}>
                                    <TooltipTrigger asChild>
                                        <span><Info className='h-3 w-3 ml-1' /></span>
                                    </TooltipTrigger>
                                    <TooltipContent className='max-w-[18rem] md:max-w-[26rem] text-center'>
                                        {info}
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        )}
                        {column.getIsSorted() === 'desc' ? (
                            <ArrowDown className='ml-2 h-4 w-4' />
                        ) : column.getIsSorted() === 'asc' ? (
                            <ArrowUp className='ml-2 h-4 w-4' />
                        ) : (
                            <ChevronsUpDown className='ml-2 h-4 w-4' />
                        )}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='start'>
                    {(column.getIsSorted() === 'desc' || column.getIsSorted() === 'asc') && (
                        <DropdownMenuItem onClick={() => column.clearSorting()}>
                            <ChevronsUpDown className='mr-2 h-3.5 w-3.5 text-muted-foreground/70' />
                            Default
                        </DropdownMenuItem>
                    )}
                    <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
                        <ArrowUp className='mr-2 h-3.5 w-3.5 text-muted-foreground/70' />
                        Asc
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
                        <ArrowDown className='mr-2 h-3.5 w-3.5 text-muted-foreground/70' />
                        Desc
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
