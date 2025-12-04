"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { FrameworkBadge } from "@/components/framework-selector"
import type { Asset } from "@/lib/types"
import { Download, Star, ArrowUpRight, CheckCircle } from "lucide-react"

interface AssetCardProps {
  asset: Asset
  variant?: "default" | "compact"
}

export function AssetCard({ asset, variant = "default" }: AssetCardProps) {
  if (variant === "compact") {
    return (
      <Link href={`/asset/${asset.id}`}>
        <div className="group flex items-center gap-4 glass rounded-xl p-3 glass-hover">
          <div className="relative h-16 w-16 overflow-hidden rounded-lg shrink-0">
            <Image
              src={asset.image || "/placeholder.svg?height=64&width=64&query=gaming asset"}
              alt={asset.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
              {asset.title}
            </h3>
            <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Download className="h-3 w-3" />
                {asset.downloads.toLocaleString()}
              </span>
              <span className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-warning text-warning" />
                {asset.rating}
              </span>
            </div>
          </div>
          <Badge
            variant="secondary"
            className={
              asset.price === "free"
                ? "bg-success/20 text-success border-success/30"
                : "bg-primary/20 text-primary border-primary/30"
            }
          >
            {asset.price === "free" ? "FREE" : "VIP"}
          </Badge>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/asset/${asset.id}`}>
      <div className="group relative overflow-hidden rounded-2xl glass glass-hover">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={asset.image || "/placeholder.svg?height=200&width=320&query=gaming asset thumbnail"}
            alt={asset.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />

          {/* Badges */}
          <div className="absolute left-3 top-3 flex items-center gap-2">
            <FrameworkBadge framework={asset.framework} />
            {asset.isVerified && (
              <Badge variant="secondary" className="bg-success/20 text-success border-0 gap-1">
                <CheckCircle className="h-3 w-3" />
                Verified
              </Badge>
            )}
          </div>

          <div className="absolute right-3 top-3">
            <Badge
              className={
                asset.price === "free"
                  ? "bg-success text-success-foreground border-0"
                  : "bg-primary text-primary-foreground border-0 glow-sm"
              }
            >
              {asset.price === "free" ? "FREE" : "PREMIUM"}
            </Badge>
          </div>

          {/* Hover arrow */}
          <div className="absolute right-3 bottom-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <ArrowUpRight className="h-4 w-4 text-primary-foreground" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="uppercase font-medium text-primary/80">{asset.category}</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground" />
            <span>v{asset.version}</span>
          </div>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {asset.title}
          </h3>
          <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{asset.description}</p>

          {/* Stats */}
          <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Download className="h-3.5 w-3.5" />
                <span className="font-medium text-foreground">{asset.downloads.toLocaleString()}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 fill-warning text-warning" />
                <span className="font-medium text-foreground">{asset.rating}</span>
              </span>
            </div>
            <span className="text-muted-foreground">
              by <span className="text-foreground">{asset.author}</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
