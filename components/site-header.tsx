"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Facebook, Instagram, Menu } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="Wasserwacht Großmehring Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="hidden font-bold sm:inline-block">Wasserwacht Großmehring</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/neuigkeiten" className="text-sm font-medium hover:text-primary">
              Neuigkeiten
            </Link>
            <Link href="/ausruestung" className="text-sm font-medium hover:text-primary">
              Ausrüstung
            </Link>
            <Link href="/aufgabenbereiche" className="text-sm font-medium hover:text-primary">
              Aufgabenbereiche
            </Link>
            <Link href="/einsaetze" className="text-sm font-medium hover:text-primary">
              Einsätze
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary">
                Über uns <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/ueber-uns/vorstandschaft" className="w-full">
                    Vorstandschaft
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/ueber-uns/gruendung" className="w-full">
                    Gründung
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/ueber-uns/mitglied-werden" className="w-full">
                    Mitglied werden
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/ueber-uns/impressum" className="w-full">
                    Impressum
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Link>
              <ThemeToggle />
              <Link href="/login">
                <Button variant="outline" size="sm">
                  Login
                </Button>
              </Link>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileNavOpen(true)}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>
      {mobileNavOpen && <MobileNav onClose={() => setMobileNavOpen(false)} />}
    </>
  )
}

