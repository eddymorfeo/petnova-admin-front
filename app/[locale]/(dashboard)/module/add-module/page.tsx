"use client"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Page() {

  const router = useRouter()
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      router.push("/module")
    }

  return (
    <>
    <h1 className="text-2xl font-bold">Bienvenido a Agregar Modulos</h1>
    <Button type="submit" onClick={handleSubmit} className="w-full">Volver a Pacientes</Button>
    </>
  )
}