"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const images = [
  {
    src: "/placeholder.svg?height=800&width=1600",
    alt: "Wasserwacht Einsatz",
    title: "Wasserrettung",
    description: "Schnelle Hilfe bei Notfällen am und im Wasser",
  },
  {
    src: "/placeholder.svg?height=800&width=1600",
    alt: "Jugendarbeit",
    title: "Jugendarbeit",
    description: "Ausbildung und Förderung unserer Nachwuchskräfte",
  },
  {
    src: "/placeholder.svg?height=800&width=1600",
    alt: "Sanitätsdienst",
    title: "Sanitätsdienste",
    description: "Professionelle medizinische Betreuung bei Veranstaltungen",
  },
]

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[70vh] overflow-hidden">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={cn("absolute inset-0 h-full w-full", index === currentIndex ? "z-10" : "z-0")}
          initial={{ opacity: 0 }}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
            transition: { duration: 1 },
          }}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="container text-center text-white"
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: index === currentIndex ? 0 : 20,
                opacity: index === currentIndex ? 1 : 0,
                transition: { delay: 0.5, duration: 0.8 },
              }}
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">{image.title}</h1>
              <p className="mx-auto mt-4 max-w-[700px] text-lg sm:text-xl md:text-2xl">{image.description}</p>
            </motion.div>
          </div>
        </motion.div>
      ))}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              index === currentIndex ? "bg-white w-6" : "bg-white/50",
            )}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  )
}

