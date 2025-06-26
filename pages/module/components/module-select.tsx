"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ModuleSelectProps {
  value: string
  onChange: (value: string) => void
}

export function ModuleSelect({ value, onChange }: ModuleSelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder="Todos los modulos" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">Todos los modulos</SelectItem>
        <SelectItem value="Veterinario">Home</SelectItem>
        <SelectItem value="Recepcionista">Pacientes</SelectItem>
        <SelectItem value="Administrador">Citas</SelectItem>
        <SelectItem value="Asistente">Roles</SelectItem>
        <SelectItem value="Asistente">Usuarios</SelectItem>
        <SelectItem value="Asistente">Dashboard</SelectItem>
        <SelectItem value="Asistente">Modulos</SelectItem>
      </SelectContent>
    </Select>
  )
}
