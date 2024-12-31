import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Define the type for our data
// The type annotation is removed in JSX
export const columns = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <div>
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
            className="max-w-sm mt-2"
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
    accessorKey: "beds",
    header: ({ column }) => {
      return (
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
      )
    },
  },
  {
    accessorKey: "oxygencyl",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Oxygen Cylinders
          {column.getIsSorted() === "asc" ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : column.getIsSorted() === "desc" ? (
            <ArrowDown className="ml-2 h-4 w-4" />
          ) : (
            <ArrowUpDown className="ml-2 h-4 w-4" />
          )}
        </Button>
      )
    },
  },
  {
    accessorKey: "powerBackup",
    header: "Power Backup",
    cell: ({ row }) => (row.getValue("powerBackup") ? "Yes" : "No"),
  },
  {
    accessorKey: "resources",
    header: ({ column }) => {
      return (
        <div>
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Resources
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
          <Input
            placeholder="Search resources..."
            value={(column.getFilterValue() ?? "")}
            onChange={(event) => column.setFilterValue(event.target.value)}
            className="max-w-sm mt-2"
          />
        </div>
      )
    },
    cell: ({ row }) => (row.getValue("resources") ?? []).join(", "),
    filterFn: (row, id, value) => {
      return (row.getValue(id) ?? []).some(resource => 
        resource.toLowerCase().includes((value ?? "").toLowerCase())
      )
    },
  },
  {
    accessorKey: "doctors",
    header: ({ column }) => {
      return (
        <div>
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Doctors
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
          <Input
            placeholder="Search doctors..."
            value={(column.getFilterValue() ?? "")}
            onChange={(event) => column.setFilterValue(event.target.value)}
            className="max-w-sm mt-2"
          />
        </div>
      )
    },
    cell: ({ row }) => (row.getValue("doctors") ?? []).map(doctor => doctor.name).join(", "),
    filterFn: (row, id, value) => {
      return (row.getValue(id) ?? []).some(doctor => 
        doctor.name.toLowerCase().includes((value ?? "").toLowerCase()) ||
        doctor.specialty.toLowerCase().includes((value ?? "").toLowerCase())
      )
    },
  },
]
