"use client"

import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const nav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#publications", label: "Publications" },
  { href: "#patents", label: "Patents" },
  { href: "#achievements", label: "Achievements" },
  // { href: "#teaching", label: "Teaching" },
  { href: "#contact", label: "Contact" },
]


export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"}`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="#home" className="font-semibold text-foreground hover:text-primary transition-colors">
          Dr. D. P. Singh
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-primary transition-colors focus-ring"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" className="focus-ring">
            <a href="/resume.docx" download>
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
