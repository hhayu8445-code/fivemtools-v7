import { NextResponse } from "next/server"

// Real-time activity feed
export async function GET() {
  const activities = [
    {
      type: "download",
      user: "ServerOwner_RP",
      action: "downloaded",
      target: "Advanced Banking System",
      time: "Just now",
    },
    {
      type: "post",
      user: "MLOCreator",
      action: "posted in",
      target: "Showcase",
      time: "2m ago",
    },
    {
      type: "like",
      user: "QBDeveloper",
      action: "liked",
      target: "Multi-Level Garage",
      time: "5m ago",
    },
    {
      type: "join",
      user: "NewRPServer",
      action: "joined the community",
      target: "",
      time: "8m ago",
    },
    {
      type: "review",
      user: "ScriptReviewer",
      action: "reviewed",
      target: "Electron AC V7",
      time: "12m ago",
    },
    {
      type: "download",
      user: "ESXServer",
      action: "downloaded",
      target: "Police EUP Pack",
      time: "15m ago",
    },
  ]

  return NextResponse.json(activities)
}
