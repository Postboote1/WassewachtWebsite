"use client"

import { X, Facebook, Instagram } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface MobileNavProps {
  onClose: () => void
}

export function MobileNav({ onClose }: MobileNavProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-background"
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.3 }}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex-1" />
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
          <span className="sr-only">Close menu</span>
        </Button>
      </div>
      <nav className="container grid gap-6 py-8">
        <Link href="/neuigkeiten" className="text-lg font-medium border-b pb-2" onClick={onClose}>
          Neuigkeiten
        </Link>
        <Link href="/ausruestung" className="text-lg font-medium border-b pb-2" onClick={onClose}>
          Ausrüstung
        </Link>
        <Link href="/aufgabenbereiche" className="text-lg font-medium border-b pb-2" onClick={onClose}>
          Aufgabenbereiche
        </Link>
        <Link href="/einsaetze" className="text-lg font-medium border-b pb-2" onClick={onClose}>
          Einsätze
        </Link>
        <div className="space-y-3">
          <h3 className="text-lg font-medium">Über uns</h3>
          <div className="grid gap-2 pl-4">
            <Link href="/ueber-uns/vorstandschaft" className="text-base border-b pb-1" onClick={onClose}>
              Vorstandschaft
            </Link>
            <Link href="/ueber-uns/gruendung" className="text-base border-b pb-1" onClick={onClose}>
              Gründung
            </Link>
            <Link href="/ueber-uns/mitglied-werden" className="text-base border-b pb-1" onClick={onClose}>
              Mitglied werden
            </Link>
            <Link href="/ueber-uns/impressum" className="text-base border-b pb-1" onClick={onClose}>
              Impressum
            </Link>
          </div>
        </div>
      </nav>
      <div className="container flex items-center gap-4 pt-4">
        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook className="h-5 w-5 text-muted-foreground" />
        </Link>
        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram className="h-5 w-5 text-muted-foreground" />
        </Link>
        <Link href="/login" className="ml-auto" onClick={onClose}>
          <Button>Login</Button>
        </Link>
      </div>
    </motion.div>
  )
}

