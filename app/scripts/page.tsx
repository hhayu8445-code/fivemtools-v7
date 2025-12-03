"use client"

import { useSearchParams } from "next/navigation"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { AssetCard } from "@/components/asset-card"
import { useAssets } from "@/lib/hooks/use-assets"
import { Skeleton } from "@/components/ui/skeleton"

export default function ScriptsPage() {
  const searchParams = useSearchParams()
  const search = searchParams.get("search") || ""
  const { assets, isLoading } = useAssets("scripts", search)

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-72">
        <Header />
        <div className="p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-foreground">Scripts</h1>
            <p className="text-muted-foreground">Browse premium FiveM scripts</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? (
              Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-80 rounded-xl" />
              ))
            ) : assets?.length > 0 ? (
              assets.map((asset: any) => (
                <AssetCard key={asset.id} asset={asset} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">No scripts found</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
