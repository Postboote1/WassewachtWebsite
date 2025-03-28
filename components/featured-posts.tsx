"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Calendar, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const posts = [
  {
    title: "Erfolgreiche Rettungsübung am Baggersee",
    description: "Unsere Einsatzkräfte haben eine komplexe Rettungsübung am Baggersee durchgeführt.",
    date: "15.03.2023",
    author: {
      name: "Max Mustermann",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    image: "/placeholder.svg?height=400&width=600",
    category: "Wasserrettung",
  },
  {
    title: "Jugendgruppe gewinnt Bezirkswettbewerb",
    description: "Unsere Jugendgruppe hat beim Bezirkswettbewerb den ersten Platz belegt.",
    date: "02.04.2023",
    author: {
      name: "Lisa Schmidt",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    image: "/placeholder.svg?height=400&width=600",
    category: "Jugendarbeit",
  },
  {
    title: "Neue Ausrüstung für die Wachstation",
    description: "Dank Spenden konnten wir neue Ausrüstung für unsere Wachstation anschaffen.",
    date: "18.05.2023",
    author: {
      name: "Thomas Müller",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    image: "/placeholder.svg?height=400&width=600",
    category: "Wachstation",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function FeaturedPosts() {
  return (
    <section className="container py-12 md:py-24">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-4xl">Aktuelles</h2>
          <p className="mt-2 text-muted-foreground sm:text-lg">Neuigkeiten und Berichte aus unserem Vereinsleben</p>
        </div>
        <Link href="/aktuelles">
          <Button variant="outline">
            Alle Beiträge
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {posts.map((post, index) => (
          <motion.div key={index} variants={item}>
            <Card className="h-full overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-48 w-full">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 text-xs font-medium rounded">
                  {post.category}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3">{post.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{post.author.name}</span>
                </div>
                <Link href={`/aktuelles/${post.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <Button variant="ghost" size="sm">
                    Weiterlesen
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

