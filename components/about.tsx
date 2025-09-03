import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "Ph.D., Computer Science & Engineering",
    org: "Shri Mata Vaishno Devi University, J&K, India",
    yearOfPassing: "2023",
    note: "Thesis: Prediction of anti-cancer drug response using intelligent computational approaches",
  },
  {
    degree: "M.Tech., Computer Science and Engineering",
    org: "University of Jammu, J&K, India",
    yearOfPassing: "2017",
    note: "Passed with 8.31 CGPA ",
  },
  {
    degree: "B.E., Information Technology",
    org: "University of Jammu, J&K, India",
    yearOfPassing: "2014",
    note: "Passed with 70% (Distinction)",
  },
]

export function About() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="rounded-xl p-6 border border-border/60 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm transition-colors">
        <h2 className="text-2xl font-semibold text-foreground">About Me</h2>
        <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
          I am an accomplished researcher and educator in Computer Science and Engineering, with expertise in Artificial Intelligence, Machine Learning, Deep Learning, and Cloud Computing. My work focuses on drug discovery, computational biology, and medical imaging, where I integrate intelligent computational approaches to solve real-world healthcare challenges.

As an enthusiastic, student-centered educator, I bring a proven track record of fostering student success, curriculum innovation, and program growth. I have extensive experience in research mentorship, course coordination, and academic advising, ensuring both high ethical standards and impactful outcomes in teaching and research.
        </p>
      </div>

      <div className="rounded-xl p-6 border border-border/60 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm transition-colors">
        <h3 className="flex items-center gap-2 text-xl font-semibold">
          <GraduationCap className="h-5 w-5 text-primary" />
          Education Timeline
        </h3>
        <ol className="mt-4 relative border-s border-border pl-6">
          {education.map((e, i) => (
            <li key={i} className="mb-6 ms-6">
              <span className="absolute -start-3 mt-1 h-3 w-3 rounded-full bg-primary" />
              <p className="font-medium">{e.degree}</p>
              <p className="text-sm text-muted-foreground">
                {e.org} • {e.yearOfPassing}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{e.note}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
