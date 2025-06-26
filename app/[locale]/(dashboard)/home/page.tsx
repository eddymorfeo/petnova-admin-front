"use client"

import { Card, CardContent } from "@/components/ui/card"
import { DashboardCards } from "@/pages/home/charts/dashboard-cards"
import AppointmentsList from "@/pages/home/data-table/appointments-list"

export default function Page() {
  return (
    <>
    <h1 className="text-2xl font-bold">Panel de Inicio</h1>

      {/* Dashboard Cards */}
      <div className="mt-4">
        <DashboardCards />
      </div>

      {/* AppointmentsList */}
      <div className="mt-4 w-full">
        <AppointmentsList />
      </div>

      
    </>
  )
}
