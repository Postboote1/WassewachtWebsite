import { NextResponse } from "next/server"

// Mock data - in a real application, this would come from a database
const posts = [
  {
    id: 1,
    title: "Erfolgreiche Rettungsübung am Baggersee",
    content: "Unsere Einsatzkräfte haben eine komplexe Rettungsübung am Baggersee durchgeführt.",
    category: "Wasserrettung",
    date: "15.03.2023",
    author: {
      name: "Max Mustermann",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    image: "/placeholder.svg?height=400&width=600",
    status: "Veröffentlicht",
    socialShares: ["Facebook", "Instagram"],
  },
  {
    id: 2,
    title: "Jugendgruppe gewinnt Bezirkswettbewerb",
    content: "Unsere Jugendgruppe hat beim Bezirkswettbewerb den ersten Platz belegt.",
    category: "Jugendarbeit",
    date: "02.04.2023",
    author: {
      name: "Lisa Schmidt",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    image: "/placeholder.svg?height=400&width=600",
    status: "Veröffentlicht",
    socialShares: ["Facebook"],
  },
]

export async function GET() {
  return NextResponse.json({ posts })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // In a real application, you would save to a database
    // This is just a mock implementation
    const newPost = {
      id: posts.length + 1,
      ...body,
      date: new Date().toLocaleDateString("de-DE"),
      status: "Veröffentlicht",
      author: {
        name: "Admin User",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    }

    // Mock social media sharing
    if (body.shareToFacebook || body.shareToInstagram) {
      const socialShares = []
      if (body.shareToFacebook) socialShares.push("Facebook")
      if (body.shareToInstagram) socialShares.push("Instagram")
      newPost.socialShares = socialShares
    } else {
      newPost.socialShares = []
    }

    return NextResponse.json({ success: true, post: newPost })
  } catch (error) {
    return NextResponse.json({ success: false, message: "An error occurred" }, { status: 500 })
  }
}

