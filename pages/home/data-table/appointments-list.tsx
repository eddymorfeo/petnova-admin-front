import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, Eye } from "lucide-react"
import Link from "next/link"

interface AppointmentsListProps {
  limit?: number
}

export default function AppointmentsList({ limit }: AppointmentsListProps) {
  // En una implementación real, estos datos vendrían de una API
  const appointments = [
    {
      id: "1",
      date: "2023-06-10T10:00:00",
      patientName: "Max",
      ownerName: "Juan Pérez",
      veterinarian: "Dra. Ana García",
      status: "scheduled",
      type: "Consulta general",
    },
    {
      id: "2",
      date: "2023-06-10T11:30:00",
      patientName: "Luna",
      ownerName: "María Rodríguez",
      veterinarian: "Dr. Carlos López",
      status: "completed",
      type: "Vacunación",
    },
    {
      id: "3",
      date: "2023-06-10T14:00:00",
      patientName: "Rocky",
      ownerName: "Pedro Martínez",
      veterinarian: "Dra. Ana García",
      status: "cancelled",
      type: "Control",
    },
    {
      id: "4",
      date: "2023-06-10T15:30:00",
      patientName: "Coco",
      ownerName: "Laura Sánchez",
      veterinarian: "Dr. Carlos López",
      status: "scheduled",
      type: "Emergencia",
    },
    {
      id: "5",
      date: "2023-06-10T17:00:00",
      patientName: "Simba",
      ownerName: "Roberto Fernández",
      veterinarian: "Dra. Ana García",
      status: "scheduled",
      type: "Consulta general",
    },
  ]

  const displayAppointments = limit ? appointments.slice(0, limit) : appointments

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "scheduled":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            Programada
          </Badge>
        )
      case "completed":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Completada
          </Badge>
        )
      case "cancelled":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            Cancelada
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Fecha y Hora</TableHead>
            <TableHead>Paciente</TableHead>
            <TableHead>Propietario</TableHead>
            <TableHead>Veterinario</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayAppointments.map((appointment) => (
            <TableRow key={appointment.id}>
              <TableCell>{formatDate(appointment.date)}</TableCell>
              <TableCell>{appointment.patientName}</TableCell>
              <TableCell>{appointment.ownerName}</TableCell>
              <TableCell>{appointment.veterinarian}</TableCell>
              <TableCell>{appointment.type}</TableCell>
              <TableCell>{getStatusBadge(appointment.status)}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end space-x-2">
                  <Link href={`/appointments/${appointment.id}`}>
                    <Button variant="ghost" size="icon">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href={`/appointments/${appointment.id}/edit`}>
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
  )
}
