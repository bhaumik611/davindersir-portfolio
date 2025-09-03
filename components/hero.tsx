import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="grid gap-6 md:grid-cols-2 md:gap-10 items-center">
      <div className="order-2 md:order-1">
        <h1 className="text-pretty text-3xl md:text-5xl font-bold">Dr. Davinder Paul Singh</h1>
        <p className="mt-3 text-blue-700 dark:text-blue-300 font-medium">
          Assistant Professor — Computer Science & Engineering
        </p>
        <p className="mt-4 text-balance text-muted-foreground">
          AI Researcher | Educator | Mentor
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button asChild className="focus-ring">
            <a href="/resume.docx" download>
              Download Resume
            </a>
          </Button>
          <Button asChild variant="outline" className="focus-ring bg-transparent">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>

        <div className="mt-8 h-1 w-40 rounded accent-gradient" />
      </div>

      <div className="order-1 md:order-2 flex justify-center">
        <div className="relative glass rounded-xl p-2">
          <Image
            src="/professional-portrait-headshot.png"
            alt="Professional portrait"
            width={360}
            height={360}
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </div>
    </div>
  )
}
