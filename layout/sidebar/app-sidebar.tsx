"use client"

import * as React from "react"
import {
  Home,
  LayoutDashboard,
  Activity,
  PawPrint,
  Users,
  UserPlus,
  BookPlus,
  Dog,
  Squirrel,
  Calendar,
  Clock,
  Stethoscope,
  BriefcaseMedical,
  Syringe,
  Receipt,
  CreditCard,
  ShieldCheck,
  KeyRound,
  Puzzle,
  ListChecks,
  Settings,
  DatabaseBackup,
  Building2,
  Mail,
  FileKey,
} from "lucide-react"

import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import { NavUser } from "./nav-user"
import { TeamSwitcher } from "./team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"


// This is sample data.
export const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: Building2,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: Building2,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Building2,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "/home",
      icon: Home,
      isActive: true,
      items: [
        { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
        { title: "Recent Activity", url: "/dashboard/activity", icon: Activity },
      ],
    },
    {
      title: "Patients",
      url: "/patients",
      icon: PawPrint,
      items: [
        { title: "List", url: "/patients", icon: Dog },
        { title: "Medical Records", url: "/patients/[id]", icon: BookPlus },
        { title: "Owners", url: "/patients/clients", icon: Users },
        { title: "Species", url: "/patients/species", icon: Squirrel },
        { title: "Breeds", url: "/patients/breeds", icon: Squirrel },
      ],
    },
    {
      title: "Appointments",
      url: "/appointments",
      icon: Calendar,
      items: [
        { title: "Schedule", url: "/appointments", icon: Calendar },
        { title: "Time Slots", url: "/appointments/slots", icon: Clock },
        { title: "Work Schedules", url: "/appointments/working-schedules", icon: Clock },
        { title: "Veterinarians", url: "/appointments/veterinarians", icon: Stethoscope },
        { title: "Holidays", url: "/appointments/holidays", icon: Calendar },
      ],
    },
    {
      title: "Procedures",
      url: "/procedures",
      icon: BriefcaseMedical,
      items: [
        { title: "Services", url: "/procedures", icon: Syringe },
        { title: "Performed", url: "/procedures/medical", icon: Syringe },
        { title: "Invoices", url: "/procedures/invoices", icon: Receipt },
        { title: "Payments", url: "/procedures/payments", icon: CreditCard },
      ],
    },
    {
      title: "Users",
      url: "/user",
      icon: Users,
      items: [
        { title: "User List", url: "/user", icon: Users },
        { title: "Add User", url: "/user/add-user", icon: UserPlus },
      ],
    },
    {
      title: "Roles",
      url: "/role",
      icon: ShieldCheck,
      items: [
        { title: "Roles", url: "/role", icon: ShieldCheck },
        { title: "Permissions", url: "/role/permissions", icon: KeyRound },
        { title: "Assignments", url: "/role/assign", icon: ListChecks },
      ],
    },
    {
      title: "Modules",
      url: "/module",
      icon: Puzzle,
      items: [
        { title: "Modules", url: "/module", icon: Puzzle },
      ],
    },
    {
      title: "Settings",
      url: "/setting",
      icon: Settings,
      items: [
        { title: "Branches", url: "/admin/branches", icon: Building2 },
        { title: "Audit Logs", url: "/admin/audit-logs", icon: FileKey },
        { title: "Email Notifications", url: "/admin/email-notifications", icon: Mail },
        { title: "Access Rules", url: "/setting/access", icon: ListChecks },
        { title: "Import / Export", url: "/setting/import-export", icon: DatabaseBackup },
      ],
    },
  ],
  projects: [], // Puedes omitir esto si no lo usas
}
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
