"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Download, Search, Trash2, Upload } from "lucide-react"

const mediaItems = [
  {
    id: 1,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Rettungsübung",
    type: "image",
    date: "15.03.2023",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Jugendgruppe",
    type: "image",
    date: "02.04.2023",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Wachstation",
    type: "image",
    date: "18.05.2023",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Sanitätsdienst",
    type: "image",
    date: "10.06.2023",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Helfer vor Ort",
    type: "image",
    date: "22.12.2023",
  },
]

export function MediaGallery() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null)
  const [isUploading, setIsUploading] = useState(false)

  const filteredMedia = mediaItems.filter((item) => item.alt.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault()
    setIsUploading(true)

    // Simulate upload
    setTimeout(() => {
      setIsUploading(false)
      alert("Medien erfolgreich hochgeladen!")
    }, 2000)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Medien durchsuchen..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Upload className="mr-2 h-4 w-4" />
              Hochladen
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Medien hochladen</DialogTitle>
              <DialogDescription>
                Laden Sie Bilder oder Videos hoch, die Sie in Beiträgen oder auf Social Media verwenden möchten.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleUpload}>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="media-files">Dateien auswählen</Label>
                  <Input id="media-files" type="file" multiple accept="image/*,video/*" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="media-alt">Alternativtext</Label>
                  <Input id="media-alt" placeholder="Beschreibung der Medien" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" disabled={isUploading}>
                  {isUploading ? (
                    <>
                      <Upload className="mr-2 h-4 w-4 animate-spin" />
                      Wird hochgeladen...
                    </>
                  ) : (
                    <>
                      <Upload className="mr-2 h-4 w-4" />
                      Hochladen
                    </>
                  )}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="grid">
        <TabsList className="w-full grid grid-cols-2 mb-4">
          <TabsTrigger value="grid">Rasteransicht</TabsTrigger>
          <TabsTrigger value="list">Listenansicht</TabsTrigger>
        </TabsList>
        <TabsContent value="grid">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredMedia.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden cursor-pointer transition-all hover:shadow-md"
                onClick={() => setSelectedMedia(item.id)}
              >
                <div className="relative aspect-square">
                  <Image src={item.src || "/placeholder.svg"} alt={item.alt} fill className="object-cover" />
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="list">
          <div className="space-y-2">
            {filteredMedia.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-2 border rounded-md cursor-pointer hover:bg-muted/50"
                onClick={() => setSelectedMedia(item.id)}
              >
                <div className="relative h-16 w-16">
                  <Image src={item.src || "/placeholder.svg"} alt={item.alt} fill className="object-cover rounded-md" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{item.alt}</p>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {selectedMedia && (
        <Dialog open={selectedMedia !== null} onOpenChange={() => setSelectedMedia(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{mediaItems.find((item) => item.id === selectedMedia)?.alt}</DialogTitle>
            </DialogHeader>
            <div className="relative aspect-video w-full">
              <Image
                src={mediaItems.find((item) => item.id === selectedMedia)?.src || ""}
                alt={mediaItems.find((item) => item.id === selectedMedia)?.alt || ""}
                fill
                className="object-contain"
              />
            </div>
            <DialogFooter>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Herunterladen
              </Button>
              <Button variant="destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Löschen
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

