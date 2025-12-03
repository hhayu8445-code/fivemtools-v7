import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrendingSection } from "@/components/trending-section"
import { StatsSection } from "@/components/stats-section"
import { CategoriesSection } from "@/components/categories-section"
import { RecentAssets } from "@/components/recent-assets"
import { ActivityFeed } from "@/components/activity-feed"
import { SponsorBanner } from "@/components/sponsor-banner"
import { ServerListBanner } from "@/components/server-list-banner"
import { AnimatedBanner } from "@/components/animated-banner"
import { SponsorCarousel } from "@/components/sponsor-carousel"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-72">
        <Header />
        <div className="p-6">
          <AnimatedBanner />
          <HeroSection />
          <ServerListBanner />
          <div className="grid lg:grid-cols-3 gap-6 mt-8">
            <div className="lg:col-span-2 space-y-8">
              <CategoriesSection />
              <TrendingSection />
              <RecentAssets />
            </div>
            <div className="space-y-6">
              <SponsorBanner />
              <StatsSection />
              <SponsorCarousel />
              <ActivityFeed />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
