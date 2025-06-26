"use client"

import { useState } from "react"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, Edit, Plus } from "lucide-react"
import { SearchInput } from "./components/search-input"
import { RoleSelect } from "./components/role-select"
import { StatusSelect } from "./components/status-select"

export default function UsersList() {
  const [search, setSearch] = useState("")
  const [role, setRole] = useState("all")
  const [status, setStatus] = useState("all")

  const users = [
    {
      id: "1",
      name: "Ana García",
      email: "ana.garcia@vetclinic.com",
      role: "Veterinario",
      status: "Activo",
      lastLogin: "09/06/2023, 10:30",
    },
    {
      id: "2",
      name: "Carlos López",
      email: "carlos.lopez@vetclinic.com",
      role: "Veterinario",
      status: "Activo",
      lastLogin: "09/06/2023, 09:15",
    },
    {
      id: "3",
      name: "Laura Martínez",
      email: "laura.martinez@vetclinic.com",
      role: "Recepcionista",
      status: "Activo",
      lastLogin: "09/06/2023, 08:45",
    },
    {
      id: "4",
      name: "Roberto Fernández",
      email: "roberto.fernandez@vetclinic.com",
      role: "Administrador",
      status: "Activo",
      lastLogin: "08/06/2023, 17:20",
    },
    {
      id: "5",
      name: "María Rodríguez",
      email: "maria.rodriguez@vetclinic.com",
      role: "Asistente",
      status: "Inactivo",
      lastLogin: "15/05/2023, 14:10",
    },
  ]

  const filtered = users
    .filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
    )
    .filter((user) => role === "all" || user.role === role)
    .filter((user) => status === "all" || user.status === status)

  const roleColor: Record<string, string> = {
    Veterinario: "bg-blue-100 text-blue-800",
    Recepcionista: "bg-green-100 text-green-800",
    Administrador: "bg-purple-100 text-purple-800",
    Asistente: "bg-yellow-100 text-yellow-800",
  }

  const statusColor: Record<string, string> = {
    Activo: "bg-green-50 text-green-700 border-green-200",
    Inactivo: "bg-gray-50 text-gray-600 border-gray-200",
  }

  return (
    <div className="space-y-4">
      {/* Filtros */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <SearchInput value={search} onChange={setSearch} />
        <RoleSelect value={role} onChange={setRole} />
        <StatusSelect value={status} onChange={setStatus} />
      </div>

      {/* Botón + Nuevo Usuario */}
      <div className="flex justify-end">
        <Link href="/user/add-user">
          <Button>
            <Plus className="" />
            Nuevo Usuario
          </Button>
        </Link>
      </div>

      {/* Tabla */}
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Usuario</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Rol</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Último acceso</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Badge className={roleColor[user.role]} variant="outline">
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge className={statusColor[user.status]} variant="outline">
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell>{user.lastLogin}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    <Link href={`/users/${user.id}`}>
                      <Button variant="ghost" size="icon">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Link href={`/users/${user.id}/edit`}>
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
