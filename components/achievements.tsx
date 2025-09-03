import { Award, GraduationCap, PenLine } from "lucide-react"

const items = [
  { title: "Best Paper Awards", icon: Award, detail: "Recognized at multiple international conferences." },
  { title: "UGC CSIR-NET AIR 100", icon: GraduationCap, detail: "Top 100 All India Rank in Computer Science." },
  { title: "Editorial Board Member", icon: PenLine, detail: "Serving as editor in 'Medicon' and 'PriMera Scientific Engineering (PSEN)'." },
]

export function Achievements() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Achievements & Awards</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map(({ title, icon: Icon, detail }) => (
          <div
            key={title}
            className="rounded-xl p-5 bg-card/80 supports-[backdrop-filter]:bg-card/70 backdrop-blur border border-border shadow-sm"
          >
            <div className="flex items-start gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-md bg-primary/10 ring-1 ring-border">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
