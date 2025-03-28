import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = body

    // In a real application, you would validate credentials against a database
    // This is just a mock implementation
    if (email === "admin@example.com" && password === "password") {
      return NextResponse.json({
        success: true,
        user: {
          id: 1,
          name: "Admin User",
          email: "admin@example.com",
          role: "admin",
        },
      })
    }

    return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 })
  } catch (error) {
    return NextResponse.json({ success: false, message: "An error occurred" }, { status: 500 })
  }
}

