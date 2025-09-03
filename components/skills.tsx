"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { Brain, Code2, Database, Globe } from "lucide-react"

// Data model: add as many items as you like; iconUrl supports small 16px logos.
// If you don't have a logo, leave iconUrl undefined (or set a Lucide icon via `icon`).
type SkillItem = {
  name: string
  icon?: React.ComponentType<{ className?: string }>
  iconUrl?: string // e.g. "/icons/tensorflow.svg"
}

type SkillCategory = {
  title: string
  items: SkillItem[]
}

// You can freely append more items; the layout will wrap gracefully.
const categories: SkillCategory[] = [
  {
    title: "AI / ML",
    items: [
      { name: "Detection" },
      { name: "Classification" },
      { name: "Segmentation" },
      { name: "Tracking" },
      { name: "Edge Device Deployment" },
      { name: "TensorFlow" },
      { name: "OpenCV" },
      { name: "YOLO" },
      { name: "InsightFace" },
      { name: "CNN" },
      { name: "LSTM" },
      { name: "TensorRT" },
      { name: "ResNet-50" },
      { name: "RetinaFace" },
      { name: "Regression" },
      { name: "Classification" },
      { name: "Time Series Prediction" },
      { name: "scikit-learn" },
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Matplotlib" },
      { name: "PSO (Particle Swarm Optimization)" },
      { name: "Ensemble Learning" },
      { name: "PCA" },
      { name: "SARIMAX" },
    ],
  },
  // {
  //   title: "Data Science",
  //   items: [
  //     { name: "Regression" },
  //     { name: "Classification" },
  //     { name: "Time Series Prediction" },
  //     { name: "scikit-learn" },
  //     { name: "Pandas" },
  //     { name: "NumPy" },
  //     { name: "Matplotlib" },
  //     { name: "PSO (Particle Swarm Optimization)" },
  //     { name: "Ensemble Learning" },
  //     { name: "PCA" },
  //     { name: "SARIMAX" },
  //   ],
  // },
  // {
  //   title: "Web",
  //   items: [
  //     { name: "MongoDB", },
  //     { name: "Express" },
  //     { name: "React", },
  //     { name: "Node.js" },
  //     { name: "JavaScript",},
  //     { name: "Redux" },
  //     { name: "PHP" },
  //     { name: "Laravel" },
  //     { name: "MySQL" },
  //     { name: "Python" },
  //     { name: "Flask" },
  //     { name: "Django" },
  //     { name: "HTML" },
  //     { name: "CSS" },
  //     { name: "Bootstrap" },
  //   ],
  // },
  {
    title: "Others",
    items: [
      { name: "Docker" },
      { name: "Hugging Face" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Jupyter" },
      { name: "Google Colab" },
      { name: "Firebase" },
      { name: "IntelliJ IDEA" },
      { name: "XML" },
      { name: "Android Studio" },
      { name: "Chaquopy" },
      { name: "gTTS" },
      { name: "XAMPP" },
    ],
  },
]

// Small 16px icon renderer. If iconUrl or icon is missing, we render nothing
// so the pill remains minimal and compact.
function TinyIcon({
  icon: Icon,
  iconUrl,
  className,
}: {
  icon?: React.ComponentType<{ className?: string }>
  iconUrl?: string
  className?: string
}) {
  if (iconUrl) {
    return (
      <img
        src={iconUrl || "/placeholder.svg"}
        alt=""
        aria-hidden="true"
        className={cn("h-4 w-4 rounded-sm object-contain", className)}
      />
    )
  }
  if (Icon) {
    return <Icon className={cn("h-4 w-4 opacity-80", className)} />
  }
  return null
}

function SkillPill({ item }: { item: SkillItem }) {
  return (
    <span
      className={cn(
        // Rounded outline pill with subtle background; small text for density
        "inline-flex items-center gap-1.5 rounded-full border bg-card/40 dark:bg-white/5",
        "px-2.5 py-1 text-xs text-foreground/90 transition-colors",
        "hover:bg-muted focus-ring",
      )}
    >
      <TinyIcon icon={item.icon} iconUrl={item.iconUrl} />
      <span className="whitespace-nowrap">{item.name}</span>
    </span>
  )
}

function CategoryCard({ category }: { category: SkillCategory }) {
  return (
    <div className="rounded-2xl border bg-card/60 p-4 md:p-5">
      <h3 className="mb-3 text-sm font-semibold text-foreground/90">{category.title}</h3>
      <div className="flex flex-wrap gap-2">
        {category.items.map((it) => (
          <SkillPill key={it.name} item={it} />
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section aria-labelledby="skills-heading">
      <div className="mb-3 flex items-baseline justify-between">
        <h2 id="skills-heading" className="text-xl font-semibold">
          Core Skills
        </h2>
        
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {categories.map((cat) => (
          <CategoryCard key={cat.title} category={cat} />
        ))}
      </div>
    </section>
  )
}
