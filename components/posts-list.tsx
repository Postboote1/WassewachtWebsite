"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Edit, MoreHorizontal, Trash2 } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

const posts = [
  {
    id: 1,
    title: "Erfolgreiche Rettungsübung am Baggersee",
    category: "Wasserrettung",
    date: "15.03.2023",
    status: "Veröffentlicht",
    socialShares: ["Facebook", "Instagram"],
  },
  {
    id: 2,
    title: "Jugendgruppe gewinnt Bezirkswettbewerb",
    category: "Jugendarbeit",
    date: "02.04.2023",
    status: "Veröffentlicht",
    socialShares: ["Facebook"],
  },
  {
    id: 3,
    title: "Neue Ausrüstung für die Wachstation",
    category: "Wachstation",
    date: "18.05.2023",
    status: "Veröffentlicht",
    socialShares: ["Instagram"],
  },
  {
    id: 4,
    title: "Sanitätsdienst beim Stadtfest",
    category: "Sanitätsdienste",
    date: "10.06.2023",
    status: "Entwurf",
    socialShares: [],
  },
  {
    id: 5,
    title: "Helfer vor Ort - Jahresrückblick",
    category: "Helfer vor Ort",
    date: "22.12.2023",
    status: "Geplant",
    socialShares: [],
  },
]

export function PostsList() {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [postToDelete, setPostToDelete] = useState<number | null>(null)

  const handleDelete = (id: number) => {
    setPostToDelete(id)
    setDeleteDialogOpen(true)
  }

  const confirmDelete = () => {
    // Delete logic would go here
    setDeleteDialogOpen(false)
    setPostToDelete(null)
  }

  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Titel</TableHead>
              <TableHead>Kategorie</TableHead>
              <TableHead>Datum</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Social Media</TableHead>
              <TableHead className="w-[80px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell className="font-medium">{post.title}</TableCell>
                <TableCell>{post.category}</TableCell>
                <TableCell>{post.date}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      post.status === "Veröffentlicht" ? "default" : post.status === "Entwurf" ? "outline" : "secondary"
                    }
                  >
                    {post.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    {post.socialShares.includes("Facebook") && (
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        Facebook
                      </Badge>
                    )}
                    {post.socialShares.includes("Instagram") && (
                      <Badge variant="secondary" className="bg-pink-100 text-pink-800">
                        Instagram
                      </Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Menü öffnen</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Aktionen</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Bearbeiten
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleDelete(post.id)}>
                        <Trash2 className="mr-2 h-4 w-4" />
                        Löschen
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Beitrag löschen?</AlertDialogTitle>
            <AlertDialogDescription>
              Diese Aktion kann nicht rückgängig gemacht werden. Der Beitrag wird dauerhaft gelöscht.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Abbrechen</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-destructive text-destructive-foreground">
              Löschen
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

