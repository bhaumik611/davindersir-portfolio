import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { name, email, message } = await req.json()
  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 })
  }
  // Integrate with your email service / DB as needed
  console.log("[v0] Contact message received:", { name, email, message })
  return NextResponse.json({ ok: true })
}
