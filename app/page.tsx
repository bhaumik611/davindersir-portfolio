import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { About } from "@/components/about"
import { Research } from "@/components/research"
import { Publications } from "@/components/publications/publications"
import { Patents } from "@/components/patents"
import { Achievements } from "@/components/achievements"
import { Teaching } from "@/components/teaching"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <main>
      <SiteHeader />

      <section id="home" className="container mx-auto px-4 py-10 md:py-16 scroll-mt-24 md:scroll-mt-28">
        <Hero />
        <div className="mt-10">
          <Skills />
        </div>
      </section>

      <section id="about" className="container mx-auto px-4 py-16 scroll-mt-24 md:scroll-mt-28">
        <About />
      </section>

      <section id="research" className="container mx-auto px-4 py-16 scroll-mt-24 md:scroll-mt-28">
        <Research />
      </section>

      <section id="publications" className="container mx-auto px-4 py-16 scroll-mt-24 md:scroll-mt-28">
        <Publications />
      </section>

      <section id="patents" className="container mx-auto px-4 py-16 scroll-mt-24 md:scroll-mt-28">
        <Patents />
      </section>

      <section id="achievements" className="container mx-auto px-4 py-16 scroll-mt-24 md:scroll-mt-28">
        <Achievements />
      </section>

      <section id="teaching" className="container mx-auto px-4 py-16 scroll-mt-24 md:scroll-mt-28">
        <Teaching />
      </section>

      <section id="contact" className="container mx-auto px-4 py-16 scroll-mt-24 md:scroll-mt-28">
        <Contact />
      </section>
    </main>
  )
}
