"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { ChartAreaInteractive } from "@/pages/home/charts/chart-area-interactive"
import { ChartPieLabel } from "@/pages/home/charts/chart-pie-label"
import { Component } from "@/pages/home/charts/example-chart"
import Link from "next/link"

export default function Page() {

  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/pets/add-pets") // redirige al home
  }

  return (
    <>
    <h1 className="text-2xl font-bold">Bienvenido a Dashboard</h1>
    {/* <Button type="submit" onClick={handleSubmit} className="w-full">Agregar Mascota</Button> */}
    {/* Chart Interactive */}
      <div className="mt-4 w-full">
        <ChartAreaInteractive />
      </div>

      

      {/* Chart */}
      <Card className="mt-4 max-w-2xl ">
        <CardContent className="flex space-y-4 space-x-4">
          <Component />
        </CardContent>
      </Card>

      {/* Chart Pie Label*/}
      <div className="flex mt-4 max-w-2xl">
          <ChartPieLabel />
      </div>
    </>
  )
}
