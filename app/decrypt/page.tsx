"use client"

import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Upload, FileCode, Shield, Zap, Key, CheckCircle, Lock } from "lucide-react"
import { useState } from "react"

export default function DecryptPage() {
  const [isDragging, setIsDragging] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-72">
        <Header />
        <div className="p-6">
          {/* Header */}
          <div className="text-center mb-12 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-sm">
                  <Key className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-3">Decrypt Assets CFX V7</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Decrypt and unlock protected FiveM assets with our advanced decryption tool. Supports all major
                encryption methods.
              </p>
            </div>
          </div>

          {/* Upload Area - Removed scale-[1.02] from dragging state */}
          <div className="max-w-2xl mx-auto mb-12">
            <div
              className={`glass rounded-2xl p-12 text-center transition-all duration-300 ${
                isDragging
                  ? "border-2 border-primary bg-primary/5"
                  : "border-2 border-dashed border-border hover:border-primary/50"
              }`}
              onDragOver={(e) => {
                e.preventDefault()
                setIsDragging(true)
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={() => setIsDragging(false)}
            >
              <div className="flex justify-center mb-4">
                <div
                  className={`h-20 w-20 rounded-2xl flex items-center justify-center transition-all ${
                    isDragging ? "bg-primary/30 scale-110" : "bg-primary/20"
                  }`}
                >
                  <Upload
                    className={`h-10 w-10 text-primary transition-transform ${isDragging ? "animate-bounce" : ""}`}
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Drop your encrypted file here</h3>
              <p className="text-muted-foreground mb-6">or click to browse from your computer</p>
              <Button className="bg-primary hover:bg-primary/90 rounded-xl h-11 px-6 glow-sm">Select File</Button>
              <p className="text-xs text-muted-foreground mt-6">
                Supported: <span className="text-foreground">.lua, .js, .dll, .zip</span> (Max 50MB)
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-12">
            {[
              {
                icon: Shield,
                title: "Secure Processing",
                description: "All files are processed securely and deleted after decryption.",
                color: "text-primary",
                bg: "bg-primary/20",
              },
              {
                icon: Zap,
                title: "Fast Decryption",
                description: "Advanced algorithms ensure quick processing of your files.",
                color: "text-success",
                bg: "bg-success/20",
              },
              {
                icon: FileCode,
                title: "Multiple Formats",
                description: "Support for Lua, JavaScript, and compiled resources.",
                color: "text-accent",
                bg: "bg-accent/20",
              },
            ].map((feature) => (
              <div key={feature.title} className="glass rounded-2xl p-6 card-hover">
                <div className={`h-12 w-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Supported Encryptions */}
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                Supported Encryptions
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  "Escrow CFX",
                  "FiveM Asset",
                  "Tebex Protected",
                  "Custom Obfuscation",
                  "Luraph",
                  "Moonsec",
                  "Ironbrew",
                  "Synapse",
                ].map((enc) => (
                  <div key={enc} className="flex items-center gap-2 rounded-xl bg-secondary/30 px-4 py-3">
                    <CheckCircle className="h-4 w-4 text-success shrink-0" />
                    <span className="text-sm text-foreground">{enc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
