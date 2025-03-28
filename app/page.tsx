"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Facebook, Instagram, Menu, ChevronDown } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { FeaturedPosts } from "@/components/featured-posts"
import { useState } from "react"
import { MainSections } from "@/components/main-sections"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MobileNav } from "@/components/mobile-nav"

export default function Home() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
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
      <main className="flex-1">
        <HeroSection />
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Wasserwacht Großmehring</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Wir sind ehrenamtlich im Wasserrettungsdienst tätig und sorgen für Sicherheit an Gewässern in unserer
              Region.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/ueber-uns">
                <Button>
                  Mehr über uns
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/aktuelles">
                <Button variant="outline">Aktuelle Meldungen</Button>
              </Link>
            </div>
          </div>
        </section>
        <MainSections />
        <FeaturedPosts />
      </main>
      <footer className="border-t bg-muted/40">
        <div className="container flex flex-col gap-8 py-8 md:py-12 lg:py-16">
          <div className="flex flex-col gap-4 md:flex-row md:justify-between md:gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo.svg"
                  alt="Wasserwacht Großmehring Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <span className="font-bold">Wasserwacht Großmehring</span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs">
                Ehrenamtlich im Wasserrettungsdienst tätig für die Sicherheit an Gewässern in unserer Region.
              </p>
              <div className="flex gap-4">
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary" />
                </Link>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Bereiche</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/wasserrettung" className="text-muted-foreground hover:text-foreground">
                      Wasserrettung
                    </Link>
                  </li>
                  <li>
                    <Link href="/jugendarbeit" className="text-muted-foreground hover:text-foreground">
                      Jugendarbeit
                    </Link>
                  </li>
                  <li>
                    <Link href="/helfer-vor-ort" className="text-muted-foreground hover:text-foreground">
                      Helfer vor Ort
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Dienste</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/sanitaetsdienste" className="text-muted-foreground hover:text-foreground">
                      Sanitätsdienste
                    </Link>
                  </li>
                  <li>
                    <Link href="/wachstation" className="text-muted-foreground hover:text-foreground">
                      Wachstation
                    </Link>
                  </li>
                  <li>
                    <Link href="/aktuelles" className="text-muted-foreground hover:text-foreground">
                      Aktuelles
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Kontakt</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/ueber-uns" className="text-muted-foreground hover:text-foreground">
                      Über uns
                    </Link>
                  </li>
                  <li>
                    <Link href="/kontakt" className="text-muted-foreground hover:text-foreground">
                      Kontakt
                    </Link>
                  </li>
                  <li>
                    <Link href="/impressum" className="text-muted-foreground hover:text-foreground">
                      Impressum
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Wasserwacht Großmehring. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  )
}

