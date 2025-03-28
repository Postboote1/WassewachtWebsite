import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"

const vorstandschaft = [
  {
    name: "Max Mustermann",
    position: "1. Vorsitzender",
    description: "Leitet die Ortsgruppe seit 2018 und koordiniert alle Aktivitäten.",
    image: "/placeholder.svg?height=400&width=400",
    contact: {
      email: "vorsitzender@wasserwacht-grossmehring.de",
      phone: "+49 123 456789",
    },
  },
  {
    name: "Anna Schmidt",
    position: "2. Vorsitzende",
    description: "Unterstützt den 1. Vorsitzenden und leitet die Öffentlichkeitsarbeit.",
    image: "/placeholder.svg?height=400&width=400",
    contact: {
      email: "stellvertreter@wasserwacht-grossmehring.de",
      phone: "+49 123 456789",
    },
  },
  {
    name: "Thomas Müller",
    position: "Technischer Leiter",
    description: "Verantwortlich für die technische Ausrüstung und Fahrzeuge.",
    image: "/placeholder.svg?height=400&width=400",
    contact: {
      email: "technik@wasserwacht-grossmehring.de",
      phone: "+49 123 456789",
    },
  },
  {
    name: "Lisa Weber",
    position: "Jugendleiterin",
    description: "Organisiert die Jugendarbeit und leitet die Jugendgruppen.",
    image: "/placeholder.svg?height=400&width=400",
    contact: {
      email: "jugend@wasserwacht-grossmehring.de",
      phone: "+49 123 456789",
    },
  },
  {
    name: "Michael Bauer",
    position: "Ausbildungsleiter",
    description: "Koordiniert die Aus- und Fortbildung der Mitglieder.",
    image: "/placeholder.svg?height=400&width=400",
    contact: {
      email: "ausbildung@wasserwacht-grossmehring.de",
      phone: "+49 123 456789",
    },
  },
  {
    name: "Sarah Huber",
    position: "Schatzmeisterin",
    description: "Verwaltet die Finanzen der Ortsgruppe.",
    image: "/placeholder.svg?height=400&width=400",
    contact: {
      email: "finanzen@wasserwacht-grossmehring.de",
      phone: "+49 123 456789",
    },
  },
]

export default function VorstandschaftPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Vorstandschaft</h1>
        <p className="text-muted-foreground max-w-3xl">
          Unsere Vorstandschaft leitet die Ortsgruppe und koordiniert alle Aktivitäten. Hier stellen wir Ihnen die
          Mitglieder unserer Vorstandschaft vor.
        </p>
      </div>

      <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {vorstandschaft.map((person) => (
          <Card key={person.name} className="overflow-hidden">
            <div className="relative aspect-square w-full">
              <Image src={person.image || "/placeholder.svg"} alt={person.name} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{person.name}</CardTitle>
              <CardDescription>{person.position}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{person.description}</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>{person.contact.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>{person.contact.phone}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

