"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Link from "next/link"
import PatientsList from "@/pages/patients/data-table/patients-list"

export default function Page() {

  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/pets/add-pets") // redirige al home
  }

  return (
    <>
    <h1 className="text-2xl font-bold">Bienvenido a Pacientes</h1>
    <PatientsList />
    </>
  )
}
