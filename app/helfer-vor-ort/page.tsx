import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function HelferVorOrtPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Helfer vor Ort</h1>
        <p className="text-muted-foreground max-w-3xl">
          Diese Seite ist noch nicht fertig. Bitte schauen Sie später wieder vorbei.
        </p>
        <Link href="/">
          <Button variant="outline" className="mt-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zur Startseite
          </Button>
        </Link>
      </div>
    </div>
  )
}

