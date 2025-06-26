"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface RoleSelectProps {
  value: string
  onChange: (value: string) => void
}

export function RoleSelect({ value, onChange }: RoleSelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder="Todos los roles" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">Todos los roles</SelectItem>
        <SelectItem value="Veterinario">Veterinario</SelectItem>
        <SelectItem value="Recepcionista">Recepcionista</SelectItem>
        <SelectItem value="Administrador">Administrador</SelectItem>
        <SelectItem value="Asistente">Asistente</SelectItem>
      </SelectContent>
    </Select>
  )
}
