"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Code2, Cpu, Trophy, Leaf, Recycle, BarChart3, Handshake, Users } from "lucide-react"
import Link from "next/link"
import { InteractiveArchitecture } from "./components/InteractiveArchitecture"
import { GameSimulator } from "./components/GameSimulator"
import { ImpactVisualization } from "./components/ImpactVisualization"
import { InteractiveRoadmap } from "./components/InteractiveRoadmap"
import { PerformanceMetrics } from "./components/performance-metrics"

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:text-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="container py-12 max-w-4xl">
        <div className="space-y-12">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">CleanSweep Whitepaper</h1>
            <div className="text-muted-foreground">Technical Documentation & Architecture Overview</div>
          </div>

          {/* 1. Introduction */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              CleanSweep is a decentralized gamified sustainability platform designed to incentivize eco-friendly
              actions through blockchain technology. By leveraging{" "}
              <span className="font-medium text-foreground">Reactive Network's Smart Contracts (RSCs)</span> and{" "}
              <span className="font-medium text-foreground">event-driven automation</span>, CleanSweep seamlessly
              integrates real-world environmental impact with on-chain incentives, creating an engaging ecosystem that
              rewards users for sustainability efforts.
            </p>
          </section>

          {/* 2. Problem Statement */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">2. Problem Statement</h2>
            <p className="text-muted-foreground leading-relaxed">
              Traditional sustainability initiatives struggle with{" "}
              <span className="font-medium text-foreground">user engagement, transparency, and accountability</span>.
              Gamification strategies can boost participation, but centralized solutions often lack{" "}
              <span className="font-medium text-foreground">
                trust, real impact verification, and decentralized incentives
              </span>
              . CleanSweep solves this by utilizing{" "}
              <span className="font-medium text-foreground">Reactive Smart Contracts (RSCs)</span> for real-time
              validation and rewards.
            </p>
          </section>

          {/* 3. Solution Overview */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">3. Solution Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              CleanSweep combines <span className="font-medium text-foreground">on-chain game mechanics</span> with{" "}
              <span className="font-medium text-foreground">real-world sustainability challenges</span> to create an
              engaging and transparent ecosystem. Users participate in mini-games, eco-friendly tasks, and
              community-driven initiatives, earning{" "}
              <span className="font-medium text-foreground">REACT tokens and CleanSweep NFTs</span> for their
              contributions.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Key Features:</h3>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <div className="w-1 bg-primary rounded"></div>
                      <div>
                        <div className="font-medium">Mini-Game Mechanics</div>
                        <p className="text-sm text-muted-foreground">
                          Players engage in challenges such as the Trash Collection Challenge, earning rewards for
                          sorting virtual waste while mirroring real-world actions.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-1 bg-primary rounded"></div>
                      <div>
                        <div className="font-medium">Sustainability Missions</div>
                        <p className="text-sm text-muted-foreground">
                          Real-world eco-friendly behaviors trigger Reactive Smart Contracts, rewarding users
                          automatically.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-1 bg-primary rounded"></div>
                      <div>
                        <div className="font-medium">Dynamic NFTs</div>
                        <p className="text-sm text-muted-foreground">
                          Users collect CleanSweep NFTs, evolving based on their sustainability progress and milestones.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-1 bg-primary rounded"></div>
                      <div>
                        <div className="font-medium">Event-Driven On-Chain Rewards</div>
                        <p className="text-sm text-muted-foreground">
                          Using Reactive's event-driven architecture, smart contracts autonomously validate user actions
                          and distribute rewards in REACT tokens.
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Interactive Game Simulator */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">Try the CleanSweep Experience</h2>
            <p className="text-muted-foreground leading-relaxed">
              Experience how CleanSweep gamifies sustainability through this interactive simulator. Complete challenges, earn points, and see your impact grow.
            </p>
            <GameSimulator />
          </section>

          {/* 4. Technical Architecture */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">4. Technical Architecture</h2>
            <p className="text-muted-foreground leading-relaxed">
              CleanSweep leverages the Reactive Network's infrastructure to create a seamless, event-driven sustainability platform. Explore the interactive architecture diagram below.
            </p>
            <div className="h-[400px] w-full">
              <InteractiveArchitecture />
            </div>
          </section>

          {/* 5. Performance Metrics */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">5. Performance & Efficiency</h2>
            <p className="text-muted-foreground leading-relaxed">
              CleanSweep's implementation on Reactive Network provides significant performance advantages over traditional blockchain solutions.
            </p>
            <PerformanceMetrics />
          </section>

          {/* 6. Impact Visualization */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">6. Impact & Adoption</h2>
            <p className="text-muted-foreground leading-relaxed">
              Projected impact metrics and adoption rates for the CleanSweep platform over time.
            </p>
            <ImpactVisualization />
          </section>

          {/* 7. Roadmap */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">7. Roadmap & Milestones</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our development timeline and key milestones for the CleanSweep platform.
            </p>
            <InteractiveRoadmap />
          </section>

          {/* 8. Requested Funding & Budget Allocation */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">8. Requested Funding & Budget Allocation</h2>
            <p className="text-muted-foreground leading-relaxed">
              We are applying for a <span className="font-medium text-foreground">$5,000 Builder Grant</span> to develop
              CleanSweep's MVP.
            </p>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="font-medium">Smart Contract Development</div>
                      <div className="font-medium">$2,000</div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Build & optimize Reactive Smart Contracts (RSCs) for sustainability tracking, automated rewards,
                      and event-driven dApp mechanics.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="font-medium">Mini-Game Prototype</div>
                      <div className="font-medium">$1,500</div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Develop & deploy CleanSweep's Trash Collection Challenge mini-game with on-chain actions and
                      real-world impact integration.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="font-medium">Testnet Deployment & Security Audit</div>
                      <div className="font-medium">$1,000</div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Deploy on Kopli Testnet, optimize ReactVM gas usage, conduct contract security checks, and ensure
                      reliability.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="font-medium">UI/UX & Frontend Development</div>
                      <div className="font-medium">$500</div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Build interactive web-based MVP with wallet connectivity for players to engage with CleanSweep's
                      mechanics.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 9. Conclusion */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">9. Conclusion</h2>
            <p className="text-muted-foreground leading-relaxed">
              CleanSweep is more than just a game, it's a{" "}
              <span className="font-medium text-foreground">scalable Web3 sustainability solution</span> powered by{" "}
              <span className="font-medium text-foreground">
                Reactive Network's automation, smart contract efficiency, and decentralized incentives
              </span>
              . This grant will enable us to build an MVP that demonstrates the potential of{" "}
              <span className="font-medium text-foreground">blockchain-driven sustainability</span> while setting the
              stage for future expansion.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We look forward to contributing to the{" "}
              <span className="font-medium text-foreground">Reactive Network ecosystem</span> and revolutionizing
              sustainability through gamified blockchain solutions. 🚀
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
