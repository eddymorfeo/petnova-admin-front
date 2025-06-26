"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const breadcrumbsMap: Record<string, string> = {
  home: "Inicio",
  pets: "Mascotas",
  appointments: "Citas",
  role: "Roles",
  user: "Usuarios",
  module: "Modulos",
  setting: "Settings",
  dashboard: "Dashboard",
}

export function BreadcrumbWithCustomSeparator() {
  const pathname = usePathname()
  const segments = pathname?.split("/").filter(Boolean) ?? []

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/")
          const name = breadcrumbsMap[segment] ?? segment
          const isLast = index === segments.length - 1

          return (
            <span key={href} className="flex items-center">
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{name}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={href}>{name}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </span>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
