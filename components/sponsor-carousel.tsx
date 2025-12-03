"use client"

import Image from "next/image"

const sponsors = [
  { name: "QBox", logo: "https://www.qbox.re/static/screenshots/qbox-logo2.png" },
  { name: "Overextended", logo: "https://avatars.githubusercontent.com/u/81791099?s=280&v=4" },
  { name: "ESX Framework", logo: "https://docs.esx-framework.org/logo.png" },
]

export function SponsorCarousel() {
  return (
    <div className="glass rounded-xl p-4 mb-6">
      <p className="text-xs text-muted-foreground mb-3 text-center uppercase tracking-wider">Our Partners</p>
      <div className="flex items-center justify-around gap-4">
        {sponsors.map((sponsor) => (
          <div key={sponsor.name} className="relative h-12 w-24 opacity-70 hover:opacity-100 transition-opacity">
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
