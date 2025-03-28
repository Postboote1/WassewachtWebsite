import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram } from "lucide-react"

export function SiteFooter() {
  return (
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
  )
}

