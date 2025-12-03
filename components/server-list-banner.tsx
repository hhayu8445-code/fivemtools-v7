"use client"

export function ServerListBanner() {
  return (
    <div className="glass rounded-xl overflow-hidden mb-6">
      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        >
          <source src="https://r2.fivemanage.com/pjW8diq5cgbXePkRb7YQg/ts(1).mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute bottom-4 left-6 right-6">
          <h2 className="text-2xl font-bold text-foreground mb-1">FiveM Server List</h2>
          <p className="text-sm text-muted-foreground">Discover the best FiveM servers</p>
        </div>
      </div>
    </div>
  )
}
