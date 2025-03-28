"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Facebook, Instagram, Upload } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function UploadForm() {
  const [isUploading, setIsUploading] = useState(false)
  const [shareToFacebook, setShareToFacebook] = useState(false)
  const [shareToInstagram, setShareToInstagram] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsUploading(true)

    // Simulate upload
    setTimeout(() => {
      setIsUploading(false)
      alert("Beitrag erfolgreich hochgeladen!")
    }, 2000)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Tabs defaultValue="post">
        <TabsList className="w-full grid grid-cols-2 mb-4">
          <TabsTrigger value="post">Beitrag</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
        </TabsList>
        <TabsContent value="post" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Titel</Label>
            <Input id="title" placeholder="Titel des Beitrags" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Kategorie</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Kategorie auswählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="wasserrettung">Wasserrettung</SelectItem>
                <SelectItem value="jugendarbeit">Jugendarbeit</SelectItem>
                <SelectItem value="helfer-vor-ort">Helfer vor Ort</SelectItem>
                <SelectItem value="sanitaetsdienste">Sanitätsdienste</SelectItem>
                <SelectItem value="wachstation">Wachstation</SelectItem>
                <SelectItem value="neuigkeiten">Neuigkeiten</SelectItem>
                <SelectItem value="ausruestung">Ausrüstung</SelectItem>
                <SelectItem value="aufgabenbereiche">Aufgabenbereiche</SelectItem>
                <SelectItem value="einsaetze">Einsätze</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Inhalt</Label>
            <Textarea id="content" placeholder="Inhalt des Beitrags" className="min-h-[200px]" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="images">Bilder</Label>
            <div className="grid gap-2">
              <Input
                id="images"
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => setSelectedFiles(e.target.files)}
              />
              {selectedFiles && selectedFiles.length > 0 && (
                <p className="text-sm text-muted-foreground">{selectedFiles.length} Dateien ausgewählt</p>
              )}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="social" className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Facebook className="h-5 w-5 text-blue-600" />
                  <Label htmlFor="facebook">Auf Facebook teilen</Label>
                </div>
                <Switch id="facebook" checked={shareToFacebook} onCheckedChange={setShareToFacebook} />
              </div>
              {shareToFacebook && (
                <div className="mt-4 space-y-2">
                  <Textarea placeholder="Facebook-Beschreibung (optional)" className="min-h-[100px]" />
                </div>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Instagram className="h-5 w-5 text-pink-600" />
                  <Label htmlFor="instagram">Auf Instagram teilen</Label>
                </div>
                <Switch id="instagram" checked={shareToInstagram} onCheckedChange={setShareToInstagram} />
              </div>
              {shareToInstagram && (
                <div className="mt-4 space-y-2">
                  <Textarea placeholder="Instagram-Beschreibung (optional)" className="min-h-[100px]" />
                  <div className="space-y-2">
                    <Label htmlFor="hashtags">Hashtags</Label>
                    <Input id="hashtags" placeholder="#wasserwacht #großmehring" />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <div className="mt-6">
        <Button type="submit" className="w-full" disabled={isUploading}>
          {isUploading ? (
            <>
              <Upload className="mr-2 h-4 w-4 animate-spin" />
              Wird hochgeladen...
            </>
          ) : (
            <>
              <Upload className="mr-2 h-4 w-4" />
              Beitrag veröffentlichen
            </>
          )}
        </Button>
      </div>
    </form>
  )
}

