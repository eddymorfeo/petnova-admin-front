"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SpeciesSelectProps {
  value: string
  onChange: (value: string) => void
}

export function SpeciesSelect({ value, onChange }: SpeciesSelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Todas las especies" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">Todas las especies</SelectItem>
        <SelectItem value="Perro">Perro</SelectItem>
        <SelectItem value="Gato">Gato</SelectItem>
        <SelectItem value="Ave">Ave</SelectItem>
      </SelectContent>
    </Select>
  )
}