"use client";

import { Calendar, ChevronDown, ChevronRight, Home, Key, Search, Settings, User, School } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Registrations",
    icon: Key,
    children: [
      {
        title: "User Registration",
        url: "/signup",
        icon: User,
      },
      {
        title: "School Registration",
        url: "/school",
        icon: School,
      },
    ],
  },
  {
    title: "Calendar",
    url: "/dashboard/calendar",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "/dashboard/search",
    icon: Search,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <Sidebar variant="floating" collapsible="icon" className="overflow-y-auto scrollbar-hide">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.children ? (
                    <>
                      <SidebarMenuButton
                        onClick={() => toggleMenu(item.title)}
                        className="w-full flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <item.icon />
                          <span>{item.title}</span>
                        </div>
                        {openMenus[item.title] ? <ChevronDown /> : <ChevronRight />}
                      </SidebarMenuButton>

                      {openMenus[item.title] && (
                        <SidebarMenu className="ml-2 mt-1">
                          {item.children.map((child) => (
                            <SidebarMenuItem key={child.title}>
                              <SidebarMenuButton
                                className={`w-full flex items-center gap-2 ${pathname === child.url ? "bg-gray-100" : ""
                                  }`}
                                asChild
                              >
                                <Link href={child.url} className="w-full">
                                  <child.icon />
                                  <span>{child.title}</span>
                                </Link>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          ))}
                        </SidebarMenu>
                      )}
                    </>
                  ) : (
                    <SidebarMenuButton
                      className={`w-full ${pathname === item.url ? "bg-gray-100" : ""}`}
                      asChild
                    >
                      <Link href={item.url} className="w-full flex items-center gap-2">
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard/account" className="w-full">
                Account
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard/billing" className="w-full">
                Billing
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/" className="w-full">
                Sign out
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
