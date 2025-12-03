import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TrendingUp, Users, Award, ArrowUp, Rocket, Search, Crown, Flame, ExternalLink } from "lucide-react"

const mockServers = [
  {
    id: "1",
    name: "Los Santos Roleplay",
    description: "The most immersive roleplay experience",
    votes: 1250,
    players: 128,
    maxPlayers: 256,
    premium: true,
  },
  {
    id: "2",
    name: "Eclipse RP",
    description: "Premium serious roleplay community",
    votes: 980,
    players: 95,
    maxPlayers: 128,
    premium: true,
  },
  {
    id: "3",
    name: "NoPixel Clone",
    description: "High-quality scripts and content",
    votes: 756,
    players: 200,
    maxPlayers: 256,
    premium: false,
  },
  {
    id: "4",
    name: "Drift Kings",
    description: "Best drift server with custom cars",
    votes: 542,
    players: 45,
    maxPlayers: 64,
    premium: false,
  },
  {
    id: "5",
    name: "Liberty City RP",
    description: "Classic roleplay experience",
    votes: 423,
    players: 78,
    maxPlayers: 128,
    premium: false,
  },
]

export default function UpvotesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-72">
        <Header />
        <div className="p-6">
          {/* Header */}
          <div className="text-center mb-12 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-success/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-success to-accent flex items-center justify-center glow-sm">
                  <Rocket className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-3">Upvotes Server FiveM</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Boost your server visibility and attract more players with our upvote system.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-5 mb-10 max-w-4xl mx-auto">
            {[
              { icon: TrendingUp, label: "Total Votes", value: "15,420", color: "text-primary", bg: "bg-primary/20" },
              { icon: Users, label: "Servers Listed", value: "342", color: "text-success", bg: "bg-success/20" },
              { icon: Award, label: "Premium Servers", value: "50", color: "text-warning", bg: "bg-warning/20" },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-6 text-center card-hover">
                <div className={`h-14 w-14 rounded-xl ${stat.bg} flex items-center justify-center mx-auto mb-3`}>
                  <stat.icon className={`h-7 w-7 ${stat.color}`} />
                </div>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Add Server */}
          <div className="max-w-3xl mx-auto mb-10">
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Rocket className="h-5 w-5 text-primary" />
                Add Your Server
              </h3>
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Enter your CFX.re server URL..."
                    className="pl-11 h-11 bg-secondary/50 border-border/50 rounded-xl"
                  />
                </div>
                <Button className="bg-primary hover:bg-primary/90 rounded-xl h-11 px-6 glow-sm">Submit Server</Button>
              </div>
            </div>
          </div>

          {/* Server List */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <Flame className="h-5 w-5 text-chart-5" />
                Top Servers
              </h2>
              <div className="flex gap-2">
                <Button variant="secondary" size="sm" className="rounded-lg">
                  Today
                </Button>
                <Button variant="ghost" size="sm" className="rounded-lg">
                  Week
                </Button>
                <Button variant="ghost" size="sm" className="rounded-lg">
                  Month
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              {mockServers.map((server, index) => (
                <div
                  key={server.id}
                  className={`glass rounded-2xl p-5 card-hover ${index === 0 ? "border-warning/30 bg-warning/5" : ""}`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold ${
                        index === 0
                          ? "bg-warning/20 text-warning"
                          : index === 1
                            ? "bg-muted text-muted-foreground"
                            : index === 2
                              ? "bg-chart-5/20 text-chart-5"
                              : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      #{index + 1}
                    </div>
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                      <span className="text-2xl font-bold text-foreground">{server.name.charAt(0)}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-foreground">{server.name}</h3>
                        {server.premium && <Crown className="h-4 w-4 text-warning" />}
                      </div>
                      <p className="text-sm text-muted-foreground">{server.description}</p>
                      <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <div className="h-2 w-2 rounded-full status-online" />
                          {server.players}/{server.maxPlayers} players
                        </span>
                      </div>
                    </div>
                    <div className="text-right mr-4">
                      <p className="text-2xl font-bold text-foreground">{server.votes.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">votes</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="rounded-xl h-10 w-10">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button className="bg-success hover:bg-success/90 gap-1.5 rounded-xl h-10">
                        <ArrowUp className="h-4 w-4" />
                        Vote
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
