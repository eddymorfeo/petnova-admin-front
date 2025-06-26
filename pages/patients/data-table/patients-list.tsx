"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Edit, Eye, Icon, Plus } from "lucide-react"
import Link from "next/link"
import { SearchInput } from "../components/search-input"
import { SpeciesSelect } from "../components/species-select"
import { OrderSelect } from "../components/order-select"

export default function PatientsList() {
  const [search, setSearch] = useState("")
  const [species, setSpecies] = useState("all")
  const [order, setOrder] = useState("asc")

  const pets = [
    { id: "1", name: "Max", species: "Perro", breed: "Labrador", age: "5 años", owner: "Juan Pérez", lastVisit: "14/05/2023" },
    { id: "2", name: "Luna", species: "Gato", breed: "Siamés", age: "3 años", owner: "María Rodríguez", lastVisit: "31/05/2023" },
    { id: "3", name: "Rocky", species: "Perro", breed: "Pastor Alemán", age: "7 años", owner: "Pedro Martínez", lastVisit: "19/05/2023" },
    { id: "4", name: "Coco", species: "Ave", breed: "Loro", age: "2 años", owner: "Laura Sánchez", lastVisit: "04/06/2023" },
    { id: "5", name: "Simba", species: "Gato", breed: "Persa", age: "4 años", owner: "Roberto Fernández", lastVisit: "09/05/2023" },
  ]

  const filtered = pets
  .filter((pet) =>
    pet.name.toLowerCase().includes(search.toLowerCase()) ||
    pet.owner.toLowerCase().includes(search.toLowerCase())
  )
  .filter((pet) => species === "all" || pet.species === species)
  .sort((a, b) => {
    if (order === "asc") return a.name.localeCompare(b.name)
    return b.name.localeCompare(a.name)
  })

  return (
    <div className="space-y-4">
       <div className="flex justify-end">
        <Link href="/patients/add-patients">
          <Button>
            <Plus/>
            Nuevo Paciente
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <SearchInput value={search} onChange={setSearch} />
        <SpeciesSelect value={species} onChange={setSpecies} />
        <OrderSelect value={order} onChange={setOrder} />
      </div>     
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Paciente</TableHead>
              <TableHead>Especie</TableHead>
              <TableHead>Raza</TableHead>
              <TableHead>Edad</TableHead>
              <TableHead>Propietario</TableHead>
              <TableHead>Última visita</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((pet) => (
              <TableRow key={pet.id}>
                <TableCell>{pet.name}</TableCell>
                <TableCell>{pet.species}</TableCell>
                <TableCell>{pet.breed}</TableCell>
                <TableCell>{pet.age}</TableCell>
                <TableCell>{pet.owner}</TableCell>
                <TableCell>{pet.lastVisit}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    <Link href={`/pets/${pet.id}`}>
                      <Button variant="ghost" size="icon">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Link href={`/pets/${pet.id}/edit`}>
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
