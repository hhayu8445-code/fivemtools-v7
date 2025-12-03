"use client"

import { mockAssets } from "@/lib/data"
import { AssetCard } from "./asset-card"
import { TrendingUp, ChevronRight } from "lucide-react"
import Link from "next/link"

export function TrendingSection() {
  const trendingAssets = mockAssets.slice(0, 4)

  return (
    <section className="mt-10">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-chart-5/20 flex items-center justify-center">
            <TrendingUp className="h-5 w-5 text-chart-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Trending this Week</h2>
            <p className="text-sm text-muted-foreground">Most downloaded resources</p>
          </div>
        </div>
        <Link
          href="/scripts"
          className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
        >
          View all
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {trendingAssets.map((asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </div>
    </section>
  )
}
