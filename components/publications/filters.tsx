"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export type Filters = {
  query: string
  year: string
  venue: string
  type: "Journals" | "Conferences" | "Reviews" | "Books"
}

export function PublicationsFilters({
  filters,
  years,
  venues,
  onChange,
}: {
  filters: Filters
  years: string[]
  venues: string[]
  onChange: (f: Partial<Filters>) => void
}) {
  return (
    <div className="grid gap-3 md:grid-cols-4">
      <div className="md:col-span-2">
        <Label htmlFor="query">Search</Label>
        <Input
          id="query"
          placeholder="Search title, authors, keywords..."
          value={filters.query}
          onChange={(e) => onChange({ query: e.target.value })}
        />
      </div>
      <div>
        <Label>Year</Label>
        <Select value={filters.year || "all"} onValueChange={(v) => onChange({ year: v === "all" ? "" : v })}>
          <SelectTrigger>
            <SelectValue placeholder="All years" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {years.map((y) => (
              <SelectItem key={y} value={y}>
                {y}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {/* <div>
        <Label>Journal/Conference</Label>
        <Select value={filters.venue || "all"} onValueChange={(v) => onChange({ venue: v === "all" ? "" : v })}>
          <SelectTrigger>
            <SelectValue placeholder="All venues" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {venues.map((v) => (
              <SelectItem key={v} value={v}>
                {v}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div> */}
    </div>
  )
}
