"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut, Menu, User, X } from "lucide-react"
import { DashboardNav } from "@/components/dashboard-nav"
import { DashboardHeader } from "@/components/dashboard-header"
import { UploadForm } from "@/components/upload-form"
import { PostsList } from "@/components/posts-list"
import { MediaGallery } from "@/components/media-gallery"

export default function DashboardPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const router = useRouter()

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileNavOpen(true)}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.svg" alt="Wasserwacht Großmehring Logo" width={32} height={32} className="h-8 w-auto" />
              <span className="font-bold hidden md:inline-block">Wasserwacht Großmehring</span>
            </Link>
          </div>
          <div className="flex-1" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Mein Konto</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profil</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/")}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Abmelden</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      {mobileNavOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="container flex h-14 items-center justify-between">
            <div className="flex-1" />
            <Button variant="ghost" size="icon" onClick={() => setMobileNavOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <div className="container grid gap-6 py-6">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-lg font-medium"
              onClick={() => setMobileNavOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/posts"
              className="flex items-center gap-2 text-lg font-medium"
              onClick={() => setMobileNavOpen(false)}
            >
              Beiträge
            </Link>
            <Link
              href="/dashboard/media"
              className="flex items-center gap-2 text-lg font-medium"
              onClick={() => setMobileNavOpen(false)}
            >
              Medien
            </Link>
            <Link
              href="/dashboard/social"
              className="flex items-center gap-2 text-lg font-medium"
              onClick={() => setMobileNavOpen(false)}
            >
              Social Media
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-2 text-lg font-medium"
              onClick={() => setMobileNavOpen(false)}
            >
              Einstellungen
            </Link>
            <Button variant="default" className="w-full mt-4" onClick={() => router.push("/")}>
              <LogOut className="mr-2 h-4 w-4" />
              Abmelden
            </Button>
          </div>
        </div>
      )}
      <div className="flex-1 container grid md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr] gap-6 pt-6">
        <aside className="hidden md:block">
          <DashboardNav />
        </aside>
        <main className="flex flex-col gap-6">
          <DashboardHeader />
          <Tabs defaultValue="upload">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="upload">Neuer Beitrag</TabsTrigger>
              <TabsTrigger value="posts">Beiträge</TabsTrigger>
              <TabsTrigger value="media">Medien</TabsTrigger>
            </TabsList>
            <TabsContent value="upload" className="space-y-4 py-4">
              <UploadForm />
            </TabsContent>
            <TabsContent value="posts" className="py-4">
              <PostsList />
            </TabsContent>
            <TabsContent value="media" className="py-4">
              <MediaGallery />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

