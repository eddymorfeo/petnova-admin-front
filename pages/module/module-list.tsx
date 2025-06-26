"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Edit, Eye, Plus } from "lucide-react"
import Link from "next/link"
import { SearchInput } from "./components/search-input"
import { StatusSelect } from "./components/status-select"

export default function ModuleList() {
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("all")

  const modules = [
  {
    id: 1,
    code: "HOME",
    name: "Home",
    route: "/Home",
    icon: "layout-home",
    status: "active",
    createdBy: "16548279-4",
    createdAt: "2025-05-07 23:46:43.832843",
    updatedBy: "16548279-4",
    updatedAt: "2025-05-07 23:46:43.832843",
  },
  {
    id: 2,
    code: "PETS",
    name: "Mascotas",
    route: "/pets",
    icon: "paw",
    status: "active",
    createdBy: "16548279-4",
    createdAt: "2025-05-07 23:46:43.832843",
    updatedBy: "16548279-4",
    updatedAt: "2025-05-07 23:46:43.832843",
  },
  {
    id: 3,
    code: "APPOINTMENTS",
    name: "Citas",
    route: "/appointments",
    icon: "calendar",
    status: "active",
    createdBy: "16548279-4",
    createdAt: "2025-05-07 23:46:43.832843",
    updatedBy: "16548279-4",
    updatedAt: "2025-05-07 23:46:43.832843",
  },
  {
    id: 4,
    code: "ROLE",
    name: "Roles",
    route: "/role",
    icon: "role",
    status: "active",
    createdBy: "16548279-4",
    createdAt: "2025-05-07 23:46:43.832843",
    updatedBy: "16548279-4",
    updatedAt: "2025-05-07 23:46:43.832843",
  },
  {
    id: 5,
    code: "USERS",
    name: "Usuarios",
    route: "/users",
    icon: "user",
    status: "active",
    createdBy: "16548279-4",
    createdAt: "2025-05-07 23:46:43.832843",
    updatedBy: "16548279-4",
    updatedAt: "2025-05-07 23:46:43.832843",
  },
  {
    id: 6,
    code: "DASHBOARD",
    name: "Dashboard",
    route: "/Dashboard",
    icon: "layout-dashboard",
    status: "active",
    createdBy: "16548279-4",
    createdAt: "2025-06-12 22:14:33.155036",
    updatedBy: "16548279-4",
    updatedAt: "2025-06-12 22:14:33.155036",
  },
  {
    id: 7,
    code: "MODULE",
    name: "Module",
    route: "/Module",
    icon: "layout-Module",
    status: "active",
    createdBy: "16548279-4",
    createdAt: "2025-06-12 22:15:08.675271",
    updatedBy: "16548279-4",
    updatedAt: "2025-06-12 22:15:08.675271",
  },
]


  const filtered = modules
    .filter((mod) =>
      mod.name.toLowerCase().includes(search.toLowerCase()) ||
      mod.code.toLowerCase().includes(search.toLowerCase())
    )
    .filter((mod) => status === "all" || mod.status === status)

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Link href="/module/add-module">
            <Button>
            <Plus className="" />
            Nuevo Role
            </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SearchInput
          value={search}
          onChange={setSearch}
        />
        <StatusSelect value={status} onChange={setStatus} />
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Código</TableHead>
              <TableHead>Ruta</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Creado</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((mod) => (
              <TableRow key={mod.id}>
                <TableCell>{mod.name}</TableCell>
                <TableCell>{mod.code}</TableCell>
                <TableCell>{mod.route}</TableCell>
                <TableCell>
                  <span
                    className={`text-sm px-2 py-1 rounded-full ${
                      mod.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {mod.status === "active" ? "Activo" : "Inactivo"}
                  </span>
                </TableCell>
                <TableCell>{mod.createdAt}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    <Link href={`/module/${mod.id}`}>
                      <Button variant="ghost" size="icon">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Link href={`/module/${mod.id}/edit`}>
                      <Button variant="ghost" size="icon">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
