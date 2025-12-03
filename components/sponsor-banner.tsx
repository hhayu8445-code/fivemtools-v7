"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

const sponsors = [
  {
    name: "QBox",
    logo: "https://www.qbox.re/static/screenshots/qbox-logo2.png",
    url: "https://www.qbox.re",
  },
  {
    name: "Overextended",
    logo: "https://avatars.githubusercontent.com/u/81791099?s=280&v=4",
    url: "https://github.com/overextended",
  },
  {
    name: "ESX Framework",
    logo: "https://docs.esx-framework.org/logo.png",
    url: "https://esx-framework.org",
  },
]

export function SponsorBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sponsors.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="glass rounded-xl p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Sponsored By</h3>
        <div className="flex gap-1">
          {sponsors.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === currentIndex ? "w-6 bg-primary" : "w-1.5 bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
      
      <a
        href={sponsors[currentIndex].url}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative h-32 rounded-lg overflow-hidden bg-background/50 hover:bg-background/80 transition-all group"
      >
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <Image
            src={sponsors[currentIndex].logo}
            alt={sponsors[currentIndex].name}
            width={200}
            height={80}
            className="object-contain max-h-20 group-hover:scale-110 transition-transform"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </a>
    </div>
  )
}
