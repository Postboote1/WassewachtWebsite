"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Heart, Users, Home, AmbulanceIcon as FirstAid, Shield, ChevronRight } from "lucide-react"
import { SectionNews } from "@/components/section-news"

const sections = [
  {
    id: "wasserrettung",
    title: "Wasserrettung",
    description: "Schnelle Hilfe bei Notfällen am und im Wasser",
    icon: <Heart className="h-10 w-10 text-primary" />,
    image: "/placeholder.svg?height=400&width=600",
    content:
      "Die Wasserrettung ist eine unserer Kernaufgaben. Wir sorgen für Sicherheit an Gewässern und führen Rettungseinsätze durch. Unsere ausgebildeten Rettungsschwimmer sind in der Lage, Menschen aus Notsituationen im Wasser zu retten und Erste Hilfe zu leisten.",
  },
  {
    id: "jugendarbeit",
    title: "Jugendarbeit",
    description: "Ausbildung und Förderung unserer Nachwuchskräfte",
    icon: <Users className="h-10 w-10 text-primary" />,
    image: "/placeholder.svg?height=400&width=600",
    content:
      "Die Jugendarbeit ist ein wichtiger Bestandteil unserer Ortsgruppe. Wir bilden Kinder und Jugendliche zu Rettungsschwimmern aus und vermitteln ihnen wichtige Werte wie Teamgeist, Verantwortungsbewusstsein und Hilfsbereitschaft.",
  },
  {
    id: "helfer-vor-ort",
    title: "Helfer vor Ort",
    description: "Schnelle Erstversorgung in der Gemeinde",
    icon: <Home className="h-10 w-10 text-primary" />,
    image: "/placeholder.svg?height=400&width=600",
    content:
      "Als Helfer vor Ort überbrücken wir die Zeit bis zum Eintreffen des Rettungsdienstes. Wir leisten qualifizierte Erste Hilfe und können so in vielen Fällen Leben retten oder schwerwiegende Folgen von Erkrankungen und Verletzungen verhindern.",
  },
  {
    id: "sanitaetsdienste",
    title: "Sanitätsdienste",
    description: "Medizinische Betreuung bei Veranstaltungen",
    icon: <FirstAid className="h-10 w-10 text-primary" />,
    image: "/placeholder.svg?height=400&width=600",
    content:
      "Bei Veranstaltungen aller Art stellen wir den Sanitätsdienst. Unsere ausgebildeten Sanitäter sind in der Lage, bei medizinischen Notfällen schnell und kompetent zu helfen und die Erstversorgung sicherzustellen.",
  },
  {
    id: "wachstation",
    title: "Wachstation",
    description: "Unsere Basis für Einsätze und Ausbildung",
    icon: <Shield className="h-10 w-10 text-primary" />,
    image: "/placeholder.svg?height=400&width=600",
    content:
      "Unsere Wachstation ist das Herzstück unserer Ortsgruppe. Von hier aus koordinieren wir unsere Einsätze, führen Ausbildungen durch und lagern unsere Ausrüstung. Die Wachstation ist auch ein Ort der Begegnung und des Austauschs für unsere Mitglieder.",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function MainSections() {
  const [activeTab, setActiveTab] = useState("wasserrettung")

  return (
    <section className="container py-12 md:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-4xl">Unsere Bereiche</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Entdecken Sie die vielfältigen Tätigkeitsfelder der Wasserwacht Großmehring
        </p>
      </div>

      <Tabs defaultValue="wasserrettung" className="mt-12" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex flex-wrap justify-center h-auto p-0 bg-transparent gap-2">
          {sections.map((section) => (
            <TabsTrigger
              key={section.id}
              value={section.id}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-md"
            >
              <div className="flex items-center gap-2">
                {React.cloneElement(section.icon, { className: "h-5 w-5" })}
                <span>{section.title}</span>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>

        {sections.map((section) => (
          <TabsContent key={section.id} value={section.id} className="mt-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                <p className="text-muted-foreground mb-6">{section.content}</p>
                <div className="flex flex-wrap gap-4">
                  <Link href={`/${section.id}`}>
                    <Button>
                      Mehr erfahren
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href={`/${section.id}/aktuelles`}>
                    <Button variant="outline">Aktuelle Beiträge</Button>
                  </Link>
                </div>
              </div>
              <div className="relative aspect-video md:aspect-square overflow-hidden rounded-lg order-1 md:order-2">
                <Image src={section.image || "/placeholder.svg"} alt={section.title} fill className="object-cover" />
              </div>
            </div>

            <div className="mt-12">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Aktuelle Beiträge zu {section.title}</h3>
                <Link href={`/${section.id}/aktuelles`}>
                  <Button variant="ghost" size="sm">
                    Alle anzeigen
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <SectionNews category={section.id} limit={3} />
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}

