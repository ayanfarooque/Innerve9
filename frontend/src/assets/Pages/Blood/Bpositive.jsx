import React from 'react'
import Header from '@/assets/Comp/Header/Header'
import Footer from '@/assets/Comp/Footer/Footer'
import SideBar2 from '@/assets/Comp/SideBar/SideBar2'
import { ArrowUpDown} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import data from './blood.json'


import {
    flexRender,
    getCoreRowModel,
    useReactTable,
    getSortedRowModel,
    getFilteredRowModel, 
  } from "@tanstack/react-table"
  
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

const Bpositive = () => {
    
    const columns = [
        {
            accessorKey: "id",
            header: "ID",
            cell: ({ row }) => (row.getValue('id')),
        },
        {
                  accessorKey: "name",
                  header: ({ column }) => {
                    return (
                      <div className='flex flex-cols '>
                        <Button
                          variant="ghost"
                          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        >
                          Name
                          <ArrowUpDown className="ml-2 h-4 w-4" />
                        </Button>
                        <Input
                          placeholder="Search name..."
                          value={(column.getFilterValue() ?? "")}
                          onChange={(event) => column.setFilterValue(event.target.value)}
                          className="max-w-sm text-black"
                        />
                      </div>
                    )
                  },
        },
        {
                  accessorKey: "location",
                  header: ({ column }) => {
                    return (
                      <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                      >
                        Location
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    )
                  },
        },
        {
            accessorKey: "B+",
            header: ({ column }) => {
              return (
                <Button
                  variant="ghost"
                  onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                  Quantity
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              )
            },
        },
    ]
    const [sorting, setSorting] = React.useState([])
              const [columnFilters, setColumnFilters] = React.useState([])
            
    const table = useReactTable({
        data,
        columns,
                getCoreRowModel: getCoreRowModel(),
                onSortingChange: setSorting,
                getSortedRowModel: getSortedRowModel(),
                getFilteredRowModel: getFilteredRowModel(),
                onColumnFiltersChange: setColumnFilters,
                state: {
                  sorting,
                  columnFilters,
                },
    })

  return (
    <div>
    <Header/>
    <div className='flex flex-cols min-w-screen'>
            <SideBar2/>
          <div className="rounded-md border text-center ">
            <Table className='border border-black min-w-[1150px]'>
              <TableHeader className="bg-gradient-to-r from-purple-600 to-purple-800">
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id} className="text-white text-center">
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      )
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="h-24 text-center">
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>   
    </div>
    <Footer/>
    </div>
  )
}

export default Bpositive
