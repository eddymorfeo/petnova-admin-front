"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, Eye, Plus } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RolesList() {
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("all")

  const roles = [
    {
      id: "1",
      name: "Veterinario",
      description: "Acceso completo a fichas clínicas y agenda",
      status: "Activo",
      users: 2,
    },
    {
      id: "2",
      name: "Recepcionista",
      description: "Acceso a agenda y pacientes",
      status: "Activo",
      users: 1,
    },
    {
      id: "3",
      name: "Administrador",
      description: "Acceso total al sistema",
      status: "Activo",
      users: 1,
    },
    {
      id: "4",
      name: "Asistente",
      description: "Acceso parcial a fichas clínicas",
      status: "Inactivo",
      users: 1,
    },
  ]

  const filtered = roles
    .filter((r) =>
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.description.toLowerCase().includes(search.toLowerCase())
    )
    .filter((r) => status === "all" || r.status === status)

  return (
    <div className="space-y-4">
        <div className="flex justify-between items-center">
            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input
                    placeholder="Buscar rol o descripción"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
                    <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger>
                        <SelectValue placeholder="Estado" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Todos los estados</SelectItem>
                        <SelectItem value="Activo">Activo</SelectItem>
                        <SelectItem value="Inactivo">Inactivo</SelectItem>
                    </SelectContent>
                    </Select>
                    
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <Link href="/role/add-role">
                  <Button>
                    <Plus className="" />
                    Nuevo Role
                  </Button>
                </Link>
            </div>
        </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Descripción</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Usuarios</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((role) => (
              <TableRow key={role.id}>
                <TableCell>{role.name}</TableCell>
                <TableCell>{role.description}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      role.status === "Activo"
                        ? "bg-green-50 text-green-700 border-green-200"
                        : "bg-gray-50 text-gray-600 border-gray-200"
                    }
                  >
                    {role.status}
                  </Badge>
                </TableCell>
                <TableCell>{role.users}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    <Link href={`/role/${role.id}`}>
                      <Button variant="ghost" size="icon">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Link href={`/role/${role.id}/edit`}>
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
