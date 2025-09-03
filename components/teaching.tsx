export function Teaching() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-xl p-6 bg-card/80 supports-[backdrop-filter]:bg-card/60 backdrop-blur-sm border border-border shadow-sm">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Passionate about student-centered learning with emphasis on practical applications of AI and software
          engineering. Experience includes course coordination, curriculum development, and supervision of undergraduate
          and postgraduate research projects.
        </p>
      </div>
      <div className="rounded-xl p-6 bg-card/80 supports-[backdrop-filter]:bg-card/60 backdrop-blur-sm border border-border shadow-sm">
        <h3 className="text-xl font-semibold mb-2">Highlights</h3>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          <li>Course coordination for Machine Learning and Data Structures</li>
          <li>Advised student teams on medical imaging capstone projects</li>
          <li>Supervised theses on deep learning for drug response prediction</li>
        </ul>
      </div>
    </div>
  )
}
