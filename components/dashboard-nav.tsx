import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, FileText, ImageIcon, Share2, Settings } from "lucide-react"

export function DashboardNav() {
  return (
    <div className="flex flex-col gap-2">
      <Link href="/dashboard">
        <Button variant="ghost" className="w-full justify-start">
          <LayoutDashboard className="mr-2 h-4 w-4" />
          Dashboard
        </Button>
      </Link>
      <Link href="/dashboard/posts">
        <Button variant="ghost" className="w-full justify-start">
          <FileText className="mr-2 h-4 w-4" />
          Beiträge
        </Button>
      </Link>
      <Link href="/dashboard/media">
        <Button variant="ghost" className="w-full justify-start">
          <ImageIcon className="mr-2 h-4 w-4" />
          Medien
        </Button>
      </Link>
      <Link href="/dashboard/social">
        <Button variant="ghost" className="w-full justify-start">
          <Share2 className="mr-2 h-4 w-4" />
          Social Media
        </Button>
      </Link>
      <Link href="/dashboard/settings">
        <Button variant="ghost" className="w-full justify-start">
          <Settings className="mr-2 h-4 w-4" />
          Einstellungen
        </Button>
      </Link>
    </div>
  )
}

