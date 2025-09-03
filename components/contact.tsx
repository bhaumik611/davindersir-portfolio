"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Linkedin, BookOpen, LinkIcon } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  async function onSubmit(formData: FormData) {
    setStatus("sending")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
        headers: { "Content-Type": "application/json" },
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="rounded-xl p-6 bg-card/80 backdrop-blur border border-border shadow-sm">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <ul className="mt-4 space-y-3 text-muted-foreground">
          <li className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary" />
            <a
              href="mailto:devsingh0071@gmail.com"
              className="underline underline-offset-2 text-primary hover:text-primary/90"
            >
              devsingh0071@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-primary" />
            <a href="tel:+91 7006291893" className="underline underline-offset-2 text-primary hover:text-primary/90">
               +91 7006291893 
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Linkedin className="h-5 w-5 text-primary" />
            <a
              href="https://www.linkedin.com/in/dr-davinder-paul-singh-9839b28a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 text-primary hover:text-primary/90"
            >
              LinkedIn
            </a>
          </li>
          <li className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <a
              href="https://scholar.google.com/citations?user=O31TcngAAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 text-primary hover:text-primary/90"
            >
              Google Scholar
            </a>
          </li>
          {/* <li className="flex items-center gap-2">
            <LinkIcon className="h-5 w-5 text-primary" />
            <a
              href="https://orcid.org/YOUR_ORCID"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 text-primary hover:text-primary/90"
            >
              ORCID
            </a>
          </li> */}
          {/* <li className="flex items-center gap-2">
            <LinkIcon className="h-5 w-5 text-primary" />
            <a
              href="https://www.researchgate.net/profile/YOUR_PROFILE"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 text-primary hover:text-primary/90"
            >
              ResearchGate
            </a>
          </li> */}
        </ul>
      </div>

      <form
        className="rounded-xl p-6 space-y-4 bg-card/80 backdrop-blur border border-border shadow-sm"
        action={async (fd) => onSubmit(fd)}
      >
        <h3 className="text-xl font-semibold">Send a message</h3>
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" name="email" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" rows={5} required />
        </div>
        <div className="flex items-center gap-3">
          <Button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send"}
          </Button>
          {status === "sent" ? (
            <p className="text-sm text-green-600">Message sent!</p>
          ) : status === "error" ? (
            <p className="text-sm text-red-600">Something went wrong.</p>
          ) : null}
        </div>
      </form>
    </div>
  )
}
