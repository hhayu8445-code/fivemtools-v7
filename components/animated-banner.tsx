"use client"

import Image from "next/image"

export function AnimatedBanner() {
  return (
    <div className="glass rounded-xl overflow-hidden mb-6 relative h-64">
      <Image
        src="https://r2.fivemanage.com/pjW8diq5cgbXePkRb7YQg/letraserverlistgif.gif"
        alt="Server List Animation"
        fill
        className="object-cover"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
      <div className="absolute bottom-6 left-6 right-6 z-10">
        <h2 className="text-3xl font-bold text-foreground mb-2 glow-text">Browse FiveM Servers</h2>
        <p className="text-muted-foreground">Join thousands of players worldwide</p>
      </div>
    </div>
  )
}
