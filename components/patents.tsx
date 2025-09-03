const patents = [
  {
    title: "Machine Learning based Single-Cell RNA Sequencing for Targeted Anticancer Drug Discovery ",
    description:
      "Application No.202421052344 A) ",
  },
  {
    title: "Hierarchical Reinforcement Learning System with Transferable Knowledge Modules for Autonomous Decision-Making in Robotics",
    description:
      "Application No.202421052346 A",
  },
  {
    title: "Neuro-Adaptive Generative AI based Real-time Rendering of Hyper-Realistic Interactive Environments in Virtual Reality ",
    description:
      "Application No.202421051519 A",
  },
]

export function Patents() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Patents</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {patents.map((p, i) => (
          <div
            key={i}
            className="rounded-xl p-5 border border-border bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/70 shadow-sm"
          >
            <div>
              <h3 className="font-medium text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
