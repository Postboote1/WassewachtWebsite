"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// This would come from your API in a real application
const allPosts = [
  {
    id: 1,
    title: "Erfolgreiche Rettungsübung am Baggersee",
    description: "Unsere Einsatzkräfte haben eine komplexe Rettungsübung am Baggersee durchgeführt.",
    date: "15.03.2023",
    author: {
      name: "Max Mustermann",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    image: "/placeholder.svg?height=400&width=600",
    category: "wasserrettung",
  },
  {
    id: 2,
    title: "Jugendgruppe gewinnt Bezirkswettbewerb",
    description: "Unsere Jugendgruppe hat beim Bezirkswettbewerb den ersten Platz belegt.",
    date: "02.04.2023",
    author: {
      name: "Lisa Schmidt",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    image: "/placeholder.svg?height=400&width=600",
    category: "jugendarbeit",
  },
  {
    id: 3,
    title: "Neue Ausrüstung für die Wachstation",
    description: "Dank Spenden konnten wir neue Ausrüstung für unsere Wachstation anschaffen.",
    date: "18.05.2023",
    author: {
      name: "Thomas Müller",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    image: "/placeholder.svg?height=400&width=600",
    category: "wachstation",
  },
  {
    id: 4,
    title: "Erste-Hilfe-Kurs für Vereinsmitglieder",
    description: "Wir haben einen Erste-Hilfe-Kurs für unsere Vereinsmitglieder durchgeführt.",
    date: "05.06.2023",
    author: {
      name: "Anna Weber",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    image: "/placeholder.svg?height=400&width=600",
    category: "sanitaetsdienste",
  },
  {
    id: 5,
    title: "Helfer vor Ort im Einsatz",
    description: "Unsere Helfer vor Ort waren bei einem medizinischen Notfall schnell zur Stelle.",
    date: "12.07.2023",
    author: {
      name: "Michael Bauer",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    image: "/placeholder.svg?height=400&width=600",
    category: "helfer-vor-ort",
  },
  {
    id: 6,
    title: "Wasserrettungsübung mit der Feuerwehr",
    description: "Gemeinsam mit der Feuerwehr haben wir eine Wasserrettungsübung durchgeführt.",
    date: "20.08.2023",
    author: {
      name: "Max Mustermann",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    image: "/placeholder.svg?height=400&width=600",
    category: "wasserrettung",
  },
  {
    id: 7,
    title: "Jugendausflug zum Schwimmbad",
    description: "Unsere Jugendgruppe hat einen Ausflug ins Schwimmbad unternommen.",
    date: "15.09.2023",
    author: {
      name: "Lisa Schmidt",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    image: "/placeholder.svg?height=400&width=600",
    category: "jugendarbeit",
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

interface SectionNewsProps {
  category?: string
  limit?: number
}

export function SectionNews({ category, limit = 3 }: SectionNewsProps) {
  // Filter posts by category if provided
  const filteredPosts = category ? allPosts.filter((post) => post.category === category) : allPosts

  // Limit the number of posts
  const posts = filteredPosts.slice(0, limit)

  return (
    <motion.div
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      {posts.map((post, index) => (
        <motion.div key={post.id} variants={item}>
          <Card className="h-full overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="relative h-48 w-full">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 text-xs font-medium rounded">
                {post.category === "wasserrettung" && "Wasserrettung"}
                {post.category === "jugendarbeit" && "Jugendarbeit"}
                {post.category === "helfer-vor-ort" && "Helfer vor Ort"}
                {post.category === "sanitaetsdienste" && "Sanitätsdienste"}
                {post.category === "wachstation" && "Wachstation"}
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
              <Link href={`/neuigkeiten/${post.id}`}>
                <Button variant="ghost" size="sm">
                  Weiterlesen
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}

