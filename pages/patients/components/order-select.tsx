"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface OrderSelectProps {
  value: string
  onChange: (value: string) => void
}

export function OrderSelect({ value, onChange }: OrderSelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Ordenar por" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="asc">Nombre (A-Z)</SelectItem>
        <SelectItem value="desc">Nombre (Z-A)</SelectItem>
      </SelectContent>
    </Select>
  )
}