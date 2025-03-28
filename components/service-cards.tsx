"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Home, AmbulanceIcon as FirstAid, Shield, Bell, Info } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Wasserrettung",
    description: "Schnelle Hilfe bei Notfällen am und im Wasser",
    icon: <Heart className="h-10 w-10 text-primary" />,
    href: "/wasserrettung",
  },
  {
    title: "Jugendarbeit",
    description: "Ausbildung und Förderung unserer Nachwuchskräfte",
    icon: <Users className="h-10 w-10 text-primary" />,
    href: "/jugendarbeit",
  },
  {
    title: "Helfer vor Ort",
    description: "Schnelle Erstversorgung in der Gemeinde",
    icon: <Home className="h-10 w-10 text-primary" />,
    href: "/helfer-vor-ort",
  },
  {
    title: "Sanitätsdienste",
    description: "Medizinische Betreuung bei Veranstaltungen",
    icon: <FirstAid className="h-10 w-10 text-primary" />,
    href: "/sanitaetsdienste",
  },
  {
    title: "Wachstation",
    description: "Unsere Basis für Einsätze und Ausbildung",
    icon: <Shield className="h-10 w-10 text-primary" />,
    href: "/wachstation",
  },
  {
    title: "Aktuelles",
    description: "Neuigkeiten und Berichte aus unserem Vereinsleben",
    icon: <Bell className="h-10 w-10 text-primary" />,
    href: "/aktuelles",
  },
  {
    title: "Über uns",
    description: "Geschichte und Organisation unserer Ortsgruppe",
    icon: <Info className="h-10 w-10 text-primary" />,
    href: "/ueber-uns",
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

export function ServiceCards() {
  return (
    <section className="container py-12 md:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-4xl">Unsere Bereiche</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Entdecken Sie die vielfältigen Tätigkeitsfelder der Wasserwacht Großmehring
        </p>
      </div>
      <motion.div
        className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={item}>
            <Link href={service.href} className="block h-full">
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="flex items-center justify-center pt-6">{service.icon}</CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-2 text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

