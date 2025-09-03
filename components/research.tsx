import { Brain, Microscope, Dna, Activity, ImageIcon, Pill } from "lucide-react"

const items = [
  { title: "Artificial Intelligence", icon: Brain },
  { title: "Deep Learning", icon: Activity },
  { title: "Medical Imaging", icon: ImageIcon },
  { title: "Drug Response Prediction", icon: Pill },
  { title: "Computational Biology", icon: Dna },
  { title: "Anti-Cancer Studies", icon: Microscope },
]

export function Research() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Research Interests</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {items.map(({ title, icon: Icon }) => (
          <div
            key={title}
            className="rounded-xl p-5 transition hover:-translate-y-1 border backdrop-blur-sm shadow-sm
                       bg-card/80 hover:bg-card/90 border-border/60
                       dark:bg-white/10 dark:hover:bg-white/15 dark:border-white/15"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/20">
                <Icon className="h-4 w-4" />
              </span>
              <p className="font-medium text-foreground">{title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
