import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"
import Link from "next/link"

// This would come from your API in a real application
const einsaetze = [
  {
    id: 1,
    title: "Rettungseinsatz am Baggersee",
    description: "Eine Person geriet in Not und wurde von unseren Rettungsschwimmern gerettet.",
    date: "15.07.2023",
    location: "Baggersee Großmehring",
    type: "Wasserrettung",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Sanitätsdienst beim Stadtfest",
    description: "Unsere Sanitäter versorgten mehrere Personen mit kleineren Verletzungen.",
    date: "22.08.2023",
    location: "Stadtplatz Großmehring",
    type: "Sanitätsdienst",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Hochwassereinsatz",
    description: "Bei Hochwasser unterstützten wir bei der Evakuierung von Anwohnern und der Sicherung von Deichen.",
    date: "05.06.2023",
    location: "Donauufer",
    type: "Katastrophenschutz",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Vermisstensuche",
    description: "Ein vermisstes Kind wurde gefunden und wohlbehalten den Eltern übergeben.",
    date: "12.09.2023",
    location: "Waldgebiet bei Großmehring",
    type: "Sucheinsatz",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "Erste Hilfe bei Verkehrsunfall",
    description:
      "Unsere Helfer vor Ort leisteten Erste Hilfe bei einem Verkehrsunfall bis zum Eintreffen des Rettungsdienstes.",
    date: "30.10.2023",
    location: "Hauptstraße Großmehring",
    type: "Helfer vor Ort",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "Absicherung Schwimmwettkampf",
    description: "Wir sicherten einen Schwimmwettkampf im Freibad ab.",
    date: "18.07.2023",
    location: "Freibad Großmehring",
    type: "Wasserrettung",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function EinsaetzePage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Einsätze</h1>
        <p className="text-muted-foreground max-w-3xl">
          Hier finden Sie Berichte über unsere Einsätze. Die Wasserwacht Großmehring ist bei verschiedenen Notfällen und
          Veranstaltungen im Einsatz.
        </p>
      </div>

      <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {einsaetze.map((einsatz) => (
          <Card key={einsatz.id} className="overflow-hidden">
            <div className="relative aspect-video w-full">
              <Image src={einsatz.image || "/placeholder.svg"} alt={einsatz.title} fill className="object-cover" />
              <div className="absolute top-2 right-2">
                <Badge
                  className={
                    einsatz.type === "Wasserrettung"
                      ? "bg-blue-500"
                      : einsatz.type === "Sanitätsdienst"
                        ? "bg-red-500"
                        : einsatz.type === "Katastrophenschutz"
                          ? "bg-orange-500"
                          : einsatz.type === "Sucheinsatz"
                            ? "bg-green-500"
                            : "bg-purple-500"
                  }
                >
                  {einsatz.type}
                </Badge>
              </div>
            </div>
            <CardHeader>
              <CardTitle>{einsatz.title}</CardTitle>
              <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{einsatz.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{einsatz.location}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="line-clamp-3">{einsatz.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Link href={`/einsaetze/${einsatz.id}`} className="w-full">
                <Button variant="outline" className="w-full">
                  Mehr erfahren
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

