"use client"

import { Input } from "@/components/ui/input"

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <Input
      type="text"
      placeholder="Nombre del modulo"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full"
    />
  )
}