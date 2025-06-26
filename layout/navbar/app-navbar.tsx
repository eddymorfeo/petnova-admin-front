"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Bell, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ModeToggle } from "../theme/mode-toggle"
import { BreadcrumbWithCustomSeparator } from "../Breadcrumb/breadcrumb"

export function AppNavbar() {
  return (
    <header className="flex h-16 w-full items-center justify-between border-b bg-background px-4 shadow-sm">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        {/* <h1 className="text-lg font-semibold">Panel de Administración</h1> */}
        <BreadcrumbWithCustomSeparator/>
      </div>

      <div className="flex items-center gap-4">        
      <ModeToggle />
        {/* <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">Admin</span>
        </div> */}
      </div>
    </header>
  )
}
