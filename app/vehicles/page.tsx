import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { AssetCard } from "@/components/asset-card"
import { mockAssets } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Filter, SlidersHorizontal, Grid, List, Search, Car, Zap } from "lucide-react"

export default function VehiclesPage() {
  const vehicles = mockAssets.filter((asset) => asset.category === "vehicles")

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-72">
        <Header />
        <div className="p-6">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-3">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-info to-primary flex items-center justify-center glow-sm">
                <Car className="h-7 w-7 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-bold text-foreground">Vehicles</h1>
                  <span className="rounded-full bg-info/20 px-3 py-1 text-sm font-medium text-info">
                    {vehicles.length} resources
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Premium vehicle packs with custom handling and high-quality models
                </p>
              </div>
            </div>
          </div>

          {/* Search & Filters */}
          <div className="glass rounded-2xl p-4 mb-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search vehicles..."
                  className="pl-11 h-11 bg-secondary/50 border-border/50 rounded-xl"
                />
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="outline" size="sm" className="gap-2 rounded-xl bg-transparent h-11">
                  <Filter className="h-4 w-4" />
                  Brand
                </Button>
                <Button variant="outline" size="sm" className="gap-2 rounded-xl bg-transparent h-11">
                  <SlidersHorizontal className="h-4 w-4" />
                  Price
                </Button>
                <div className="flex gap-1 bg-secondary/50 rounded-xl p-1">
                  <Button variant="secondary" size="sm" className="bg-card rounded-lg">
                    All
                  </Button>
                  <Button variant="ghost" size="sm" className="rounded-lg">
                    Cars
                  </Button>
                  <Button variant="ghost" size="sm" className="rounded-lg">
                    Bikes
                  </Button>
                  <Button variant="ghost" size="sm" className="rounded-lg">
                    Planes
                  </Button>
                  <Button variant="ghost" size="sm" className="rounded-lg">
                    Boats
                  </Button>
                </div>
                <div className="flex gap-1 bg-secondary/50 rounded-xl p-1">
                  <Button variant="secondary" size="sm" className="bg-card rounded-lg">
                    All
                  </Button>
                  <Button variant="ghost" size="sm" className="rounded-lg text-success">
                    Free
                  </Button>
                  <Button variant="ghost" size="sm" className="rounded-lg text-primary">
                    Premium
                  </Button>
                </div>
                <div className="flex gap-1 border border-border/50 rounded-xl p-1 ml-auto">
                  <Button variant="secondary" size="icon" className="h-9 w-9 bg-card rounded-lg">
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg">
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Vehicles Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {vehicles.map((asset) => (
              <AssetCard key={asset.id} asset={asset} />
            ))}
          </div>

          {/* Empty State */}
          {vehicles.length === 0 && (
            <div className="glass rounded-2xl flex flex-col items-center justify-center py-20">
              <div className="h-20 w-20 rounded-2xl bg-secondary flex items-center justify-center mb-4">
                <Zap className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">No vehicles found</h3>
              <p className="text-muted-foreground">Try adjusting your filters</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
