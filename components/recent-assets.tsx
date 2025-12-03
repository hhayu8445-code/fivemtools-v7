"use client"

import { mockAssets } from "@/lib/data"
import { AssetCard } from "./asset-card"
import { Clock, ChevronRight } from "lucide-react"
import Link from "next/link"

export function RecentAssets() {
  const recentAssets = [...mockAssets]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 4)

  return (
    <section>
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-info/20 flex items-center justify-center">
            <Clock className="h-5 w-5 text-info" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Recently Added</h2>
            <p className="text-sm text-muted-foreground">Latest uploads to the platform</p>
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

      <div className="grid gap-5 sm:grid-cols-2">
        {recentAssets.map((asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </div>
    </section>
  )
}
