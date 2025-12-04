import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Check, Crown, Sparkles, Zap, Shield, Clock, HeadphonesIcon, X, Infinity, Users } from "lucide-react"

const plans = [
  {
    name: "Starter",
    description: "Perfect for testing the waters",
    price: "$0",
    period: "/forever",
    features: [
      { text: "Access to 1,500+ Free Scripts", included: true },
      { text: "3 Downloads per day", included: true },
      { text: "Standard Download Speed", included: true },
      { text: "15s Waiting Timer", included: true },
      { text: "Community Support", included: true },
      { text: "Premium Assets", included: false },
      { text: "Priority Support", included: false },
      { text: "Discord VIP Role", included: false },
    ],
    cta: "Current Plan",
    highlighted: false,
    icon: Users,
  },
  {
    name: "Server Owner VIP",
    description: "Unlimited power for your server",
    price: "$15",
    period: "/month",
    badge: "MOST POPULAR",
    features: [
      { text: "Everything in Free", included: true },
      { text: "Unlimited Downloads", included: true },
      { text: "High-Speed Direct Links", included: true },
      { text: "No Waiting Timer", included: true },
      { text: "Access to Premium Assets", included: true },
      { text: "Discord VIP Role", included: true },
      { text: "Priority Request Support", included: true },
      { text: "Early Access to New Assets", included: true },
    ],
    cta: "Upgrade Now",
    highlighted: true,
    icon: Crown,
  },
]

const benefits = [
  {
    icon: Infinity,
    title: "Unlimited Downloads",
    description: "No daily limits. Download as many resources as you need.",
    color: "text-primary",
  },
  {
    icon: Clock,
    title: "No Waiting Timer",
    description: "Instant access to all downloads without any delays.",
    color: "text-warning",
  },
  {
    icon: Shield,
    title: "Premium Assets",
    description: "Access to exclusive paid and leaked resources.",
    color: "text-accent",
  },
  {
    icon: HeadphonesIcon,
    title: "Priority Support",
    description: "Get help faster with priority customer support.",
    color: "text-info",
  },
]

const stats = [
  { value: "5,000+", label: "VIP Members" },
  { value: "15,000+", label: "Assets Available" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
]

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-72">
        <Header />
        <div className="p-6">
          {/* Header */}
          <div className="text-center mb-12 relative">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-sm text-primary mb-6 border border-primary/30">
                <Sparkles className="h-4 w-4" />
                <span className="font-medium">UPGRADE YOUR EXPERIENCE</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Simple, Transparent <span className="gradient-text">Pricing</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join over 5,000+ server owners who use FiveM Tools to build their dream servers.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-xl p-4 text-center card-hover">
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            {plans.map((plan) => {
              const Icon = plan.icon
              return (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl overflow-hidden ${
                    plan.highlighted ? "glass border-primary/50 glow-sm" : "glass"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                        {plan.badge}
                      </div>
                    </div>
                  )}

                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`h-12 w-12 rounded-xl flex items-center justify-center ${
                          plan.highlighted ? "bg-primary/20" : "bg-secondary"
                        }`}
                      >
                        <Icon className={`h-6 w-6 ${plan.highlighted ? "text-primary" : "text-muted-foreground"}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                        <p className="text-sm text-muted-foreground">{plan.description}</p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature.text} className="flex items-center gap-3">
                          <div
                            className={`flex h-5 w-5 items-center justify-center rounded-full shrink-0 ${
                              feature.included
                                ? plan.highlighted
                                  ? "bg-primary/20 text-primary"
                                  : "bg-success/20 text-success"
                                : "bg-secondary text-muted-foreground"
                            }`}
                          >
                            {feature.included ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                          </div>
                          <span className={feature.included ? "text-foreground" : "text-muted-foreground"}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full rounded-xl h-12 text-base font-medium ${
                        plan.highlighted
                          ? "bg-primary hover:bg-primary/90 text-primary-foreground glow-sm"
                          : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                      }`}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Benefits Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8 flex items-center justify-center gap-2">
              <Zap className="h-6 w-6 text-primary" />
              Why Go Premium?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="glass rounded-xl p-5 card-hover flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-secondary/80 flex items-center justify-center shrink-0">
                    <benefit.icon className={`h-6 w-6 ${benefit.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Can I cancel anytime?",
                  a: "Yes, you can cancel your subscription at any time. Your VIP benefits will remain active until the end of your billing period.",
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards, PayPal, and cryptocurrency payments through our secure payment processor.",
                },
                {
                  q: "Is there a refund policy?",
                  a: "We offer a 7-day money-back guarantee if you're not satisfied with your VIP membership.",
                },
              ].map((faq) => (
                <div key={faq.q} className="glass rounded-xl p-5">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
