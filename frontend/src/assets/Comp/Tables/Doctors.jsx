import React, { useEffect, useState } from 'react'
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import axios from 'axios';
import Header from '../Header/Header'
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
import SideBar from '../SideBar/SideBar'
import Footer from '../Footer/Footer'

const Doctors = () => {
  const [data, setData] = useState([]); // State to hold fetched data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Set loading state to true before fetching
        const response = await axios.get('http://localhost:3000/api/search/doctor'); // Replace with your API endpoint
        console.log(response.data.data)

        if (!response) {
          throw new Error('Failed to fetch data');
        }
        setData(response.data.data); // Update the data state
      } catch (error) {
        setError(error.message); // Set the error message if an error occurs
      } finally {
        setLoading(false); // Set loading state to false after fetching
      }
    };

    fetchData(); // Call the fetch function
  }, []); // Empty dependency array ensures this runs once when the component mounts

  // Table column definitions
  const columns = [
    {
      accessorKey: "hospital._id", // Hospital ID
      header: "ID",
      cell: ({ row }) => row.getValue('hospital._id'),
    },
    {
      accessorKey: "hospital.name", // Hospital Name
      header: ({ column }) => (
        <div className='flex flex-cols'>
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
      ),
    },
    {
      accessorKey: "hospital.location", // Location
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Location
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
    },
    {
      accessorKey: "hospital.powerBackup", // Power Backup
      header: "Power Backup",
      cell: ({ row }) => (row.getValue("hospital.powerBackup") ? "Yes" : "No"),
    },
    {
      accessorKey: "hospital.beds", // Number of beds
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Beds
          {column.getIsSorted() === "asc" ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : column.getIsSorted() === "desc" ? (
            <ArrowDown className="ml-2 h-4 w-4" />
          ) : (
            <ArrowUpDown className="ml-2 h-4 w-4" />
          )}
        </Button>
      ),
    },
    {
      accessorKey: "doctorsString", // Doctors list
      header: "Doctors",
      cell: ({ row }) => row.getValue("doctorsString"),
    },
  ];

  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  
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
  });

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message if something goes wrong
  }

  return (
    <div className="bg-[#f3efff]">
      <Header />
      <h1 className="flex justify-center text-center text-3xl font-semibold text-[#4A148C] py-5">Search</h1>
      <div className='flex flex-cols min-w-screen'>
        <SideBar />
        <div className="rounded-md border text-center">
          <Table className='border border-black min-w-[1150px]'>
            <TableHeader className="bg-gradient-to-r from-purple-600 to-purple-800">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id} className="text-white text-center">
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
                  <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
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
      <Footer />
    </div>
  );
};

export default Doctors;
