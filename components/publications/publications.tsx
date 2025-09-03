"use client"

import useSWR from "swr"
import { useMemo, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { PublicationsFilters, type Filters } from "./filters"
import { ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type Pub = {
  id: string
  title: string
  authors: string
  venue: string
  year: number
  doi?: string
  type: "Journals" | "Conferences"
}

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function Publications() {
  const { data, isLoading } = useSWR<Pub[]>("/api/publications", fetcher)
  const [filters, setFilters] = useState<Filters>({
    query: "",
    year: "",
    venue: "",
    type: "Journals",
  })
  const [limit, setLimit] = useState(5)

  const years = useMemo(
    () =>
      data
        ? Array.from(new Set(data.map((p) => String(p.year))))
            .sort()
            .reverse()
        : [],
    [data],
  )
  const venues = useMemo(
    () =>
      data ? Array.from(new Set(data.map((p) => p.venue))).sort() : [],
    [data],
  )

  const filtered = useMemo(() => {
    if (!data) return []
    const q = filters.query.toLowerCase()
    return data
      .filter((p) => p.type === filters.type)
      .filter((p) => (filters.year ? String(p.year) === filters.year : true))
      .filter((p) => (filters.venue ? p.venue === filters.venue : true))
      .filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.authors.toLowerCase().includes(q) ||
          p.venue.toLowerCase().includes(q),
      )
  }, [data, filters])

  const toShow = filtered.slice(0, limit)

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Publications</h2>

      {/* Tabs with pill-style buttons */}
      <Tabs
        value={filters.type}
        onValueChange={(v: any) => {
          setFilters((f) => ({ ...f, type: v }))
          setLimit(5) // reset limit on tab switch
        }}
      >
        <TabsList className="mb-6 flex w-fit rounded-xl bg-muted/30 p-1 dark:bg-muted/20">
          <TabsTrigger
            value="Journals"
            className="relative rounded-lg px-4 py-2 text-sm font-medium 
                       transition-all data-[state=active]:bg-primary/10 
                       data-[state=active]:text-primary 
                       dark:data-[state=active]:bg-primary/20"
          >
            Journals
          </TabsTrigger>
          <TabsTrigger
            value="Conferences"
            className="relative rounded-lg px-4 py-2 text-sm font-medium 
                       transition-all data-[state=active]:bg-primary/10 
                       data-[state=active]:text-primary 
                       dark:data-[state=active]:bg-primary/20"
          >
            Conferences
          </TabsTrigger>
        </TabsList>

        {/* Filters */}
        <PublicationsFilters
          filters={filters}
          years={years}
          venues={venues}
          onChange={(f) => setFilters((prev) => ({ ...prev, ...f }))}
        />

        {/* Publication list */}
        <div className="mt-6 space-y-4">
          {isLoading ? (
            <p className="text-muted-foreground">Loading publications…</p>
          ) : toShow.length === 0 ? (
            <p className="text-muted-foreground">No results found.</p>
          ) : (
            <AnimatePresence>
              {toShow.map((p) => (
                <motion.article
                  key={p.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl p-4 border border-border bg-card/80 
                             supports-[backdrop-filter]:bg-card/70 backdrop-blur 
                             text-foreground shadow-sm transition-colors"
                >
                  <h3 className="font-medium text-foreground">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.authors}</p>
                  <p className="text-sm text-muted-foreground">
                    {p.venue} • {p.year}
                  </p>
                  {p.doi ? (
                    <a
                      className="mt-2 inline-flex items-center gap-1 text-sm text-primary underline"
                      href={p.doi}
                      target="_blank"
                      rel="noreferrer"
                    >
                      DOI <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : null}
                </motion.article>
              ))}
            </AnimatePresence>
          )}
        </div>

        {/* Load more */}
        {filtered.length > limit && (
          <div className="mt-6 flex justify-center">
            <Button
              variant="ghost"
              className="px-6 py-2 rounded-xl border border-border bg-card/50 
                         hover:bg-card/80 transition-all shadow-sm hover:shadow-md 
                         text-primary font-medium"
              onClick={() => setLimit((n) => n + 5)}
            >
              Load more ↓
            </Button>
          </div>
        )}

        <TabsContent value="Journals" />
        <TabsContent value="Conferences" />
      </Tabs>
    </div>
  )
}
