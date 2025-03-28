"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link href="/" className="absolute left-4 top-4 md:left-8 md:top-8 flex items-center gap-2">
        <Image src="/logo.svg" alt="Wasserwacht Großmehring Logo" width={32} height={32} className="h-8 w-auto" />
        <span className="font-bold">Wasserwacht Großmehring</span>
      </Link>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="mx-auto max-w-[400px]">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Anmelden</CardTitle>
            <CardDescription>Melden Sie sich an, um Inhalte zu verwalten</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail</Label>
                    <Input id="email" type="email" placeholder="name@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Passwort</Label>
                      <Link href="/reset-password" className="text-sm text-primary underline-offset-4 hover:underline">
                        Passwort vergessen?
                      </Link>
                    </div>
                    <Input id="password" type="password" required />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Anmeldung läuft..." : "Anmelden"}
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="register">
                <form className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-name">Name</Label>
                    <Input id="register-name" placeholder="Max Mustermann" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email">E-Mail</Label>
                    <Input id="register-email" type="email" placeholder="name@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password">Passwort</Label>
                    <Input id="register-password" type="password" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-confirm-password">Passwort bestätigen</Label>
                    <Input id="register-confirm-password" type="password" required />
                  </div>
                  <Button type="submit" className="w-full">
                    Registrieren
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>

        </Card>
      </motion.div>
    </div>
  )
}

