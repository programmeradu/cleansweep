import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Leaf,
  Trophy,
  BarChart3,
  Handshake,
  Code2,
  Gamepad2,
  Recycle,
  Award,
  ArrowRight,
  CheckCircle2,
  Zap,
  Users,
  LineChart,
  Rocket,
  FileCode,
  Target,
  Lightbulb,
  Shield,
  Layout,
} from "lucide-react"
import { TechnicalArchitecture } from "@/components/TechnicalArchitecture"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
              <Recycle className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl">CleanSweep</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#project-overview" className="text-sm font-medium hover:text-primary">
              Project Overview
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/whitepaper">
              <Button className="bg-gradient-to-r from-green-400 to-emerald-600 hover:from-green-500 hover:to-emerald-700">
                View Whitepaper
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-transparent to-blue-50/30 dark:from-green-950/10 dark:to-blue-950/10"></div>

          {/* Pixelated Elements */}
          <div className="absolute top-20 left-10 w-16 h-16 bg-green-400/20 rounded-lg rotate-12 animate-pulse hidden md:block"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-400/20 rounded-lg -rotate-12 animate-pulse delay-700 hidden md:block"></div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-yellow-400/20 rounded-lg rotate-45 animate-pulse delay-500 hidden md:block"></div>

          <div className="container relative">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-8 text-center md:text-left">
                <div>
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm mb-4">
                    Web3 Sustainability Platform
                  </div>
                  <h1 className="font-bold text-3xl sm:text-4xl md:text-6xl leading-tight tracking-tighter mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-700">
                      CleanSweep
                    </span>
                  </h1>
                  <h2 className="font-bold text-2xl sm:text-3xl md:text-5xl leading-tight tracking-tighter mb-4">
                    A Gamified Web3 Sustainability Platform
                  </h2>
                  <p className="text-lg sm:text-xl text-muted-foreground">
                    Leveraging Reactive Network's technology to revolutionize sustainability through blockchain-powered
                    gamification.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Link href="/whitepaper" className="w-full sm:w-auto">
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-green-400 to-emerald-600 hover:from-green-500 hover:to-emerald-700"
                    >
                      View Whitepaper <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative mt-8 md:mt-0 flex justify-center">
                <div className="relative aspect-square w-[400px] overflow-hidden rounded-xl bg-muted p-2">
                  <Image
                    src="/assets/hero-preview.jpeg"
                    alt="CleanSweep Platform Preview"
                    fill
                    className="object-contain"
                    priority
                    quality={100}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-transparent rounded-lg"></div>
                </div>
                {/* Clay-like decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-100 dark:bg-green-900/30 rounded-full blur-xl"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview Section */}
        <section id="project-overview" className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Project Overview</h2>
              <p className="text-lg text-muted-foreground">
                CleanSweep is a blockchain-based sustainability platform that gamifies real-world eco-friendly actions
                and rewards users with digital and tangible incentives. The platform integrates mini-games, real-world
                challenges, dynamic NFTs, and decentralized incentives to create an engaging, automated sustainability
                ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-green-100 dark:border-green-900/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle>Problem Statement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Traditional sustainability initiatives lack engagement and measurable impact. Web3 technology can
                    bridge this gap by creating verifiable, incentivized eco-actions.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-blue-100 dark:border-blue-900/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle>Our Solution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    CleanSweep leverages Reactive Network's technology to create an automated, gamified platform that
                    verifies and rewards real-world sustainability actions.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-yellow-100 dark:border-yellow-900/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/50 flex items-center justify-center mb-4">
                    <Trophy className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <CardTitle>Expected Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Drive measurable sustainability outcomes while showcasing Reactive Network's capabilities in a
                    high-visibility, socially impactful application.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Key Features</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                CleanSweep combines blockchain technology with real-world sustainability actions to create a unique and
                engaging platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Recycle className="h-10 w-10 text-green-500" />,
                  title: "Real-World Eco Challenges",
                  description: "Complete sustainability tasks and get verified through on-chain automation.",
                },
                {
                  icon: <Gamepad2 className="h-10 w-10 text-indigo-500" />,
                  title: "Mini-Game Mode",
                  description: "Engage in skill-based Web3 games that reinforce sustainability concepts.",
                },
                {
                  icon: <BarChart3 className="h-10 w-10 text-blue-500" />,
                  title: "On-Chain Leaderboards",
                  description: "Rank up based on sustainability impact, earning rewards and exclusive NFTs.",
                },
                {
                  icon: <Handshake className="h-10 w-10 text-amber-500" />,
                  title: "Brand-Sponsored Tournaments",
                  description: "Partner with eco-friendly companies for real-world discounts and NFT rewards.",
                },
                {
                  icon: <Code2 className="h-10 w-10 text-purple-500" />,
                  title: "Reactive Smart Contracts",
                  description: "Automate rewards & NFT upgrades through event-driven architecture.",
                },
                {
                  icon: <Leaf className="h-10 w-10 text-emerald-500" />,
                  title: "StaGreen Integration",
                  description: "Backed by municipal sustainability projects for long-term funding and adoption.",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader className="relative">
                    <div className="mb-2">{feature.icon}</div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>

                  {/* Pixelated corner accent */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tr from-transparent to-green-200/40 dark:to-green-800/20 clip-corner"></div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Implementation Section */}
        <section id="technical-implementation" className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Technical Implementation</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our architecture leverages Reactive Network's ecosystem to create a seamless, automated sustainability
                experience.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <Card className="border-none shadow-lg">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-4">
                      <FileCode className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <CardTitle>Smart Contract Architecture</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>ChallengeRegistry.sol:</strong> Manages sustainability challenges, verification
                          criteria, and reward parameters
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>DynamicNFT.sol:</strong> ERC-721 implementation with metadata that evolves based on
                          user achievements
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>RewardDistributor.sol:</strong> Handles automated token distribution based on verified
                          actions
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>LeaderboardManager.sol:</strong> Maintains on-chain rankings and achievement tracking
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Verification System:</strong> Azure Custom Vision integration for automated
                          verification of sustainability actions
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-4">
                      <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <CardTitle>Off-Chain Components</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Verification Oracles:</strong> Azure Custom Vision AI verifies sustainability actions
                          through photo submissions
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Mini-Game Engine:</strong> Web3-enabled gaming platform with sustainability education
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Analytics Dashboard:</strong> Real-time impact metrics and sustainability tracking
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Brand Partnership Portal:</strong> Interface for eco-brands to sponsor challenges
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="relative">
                <div className="sticky top-24">
                  <TechnicalArchitecture />
                  <div className="mt-4 text-center text-sm text-muted-foreground">
                    CleanSweep Technical Architecture - Interactive Diagram
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reactive Network Integration */}
        <section id="reactive-integration" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">How CleanSweep Uses Reactive Network</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our platform leverages Reactive Network's ecosystem to create a seamless, automated sustainability
                experience.
              </p>
            </div>

            <Tabs defaultValue="rsc" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="rsc">Smart Contracts</TabsTrigger>
                <TabsTrigger value="nft">Dynamic NFTs</TabsTrigger>
                <TabsTrigger value="reputation">Reputation System</TabsTrigger>
                <TabsTrigger value="evm">Parallelized EVM</TabsTrigger>
              </TabsList>

              <TabsContent value="rsc" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code2 className="h-5 w-5 text-green-500" />
                      Reactive Smart Contracts for Automated Incentives
                    </CardTitle>
                    <CardDescription>
                      Automate reward distribution based on verified sustainability actions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="relative rounded-xl overflow-hidden border p-6 bg-white/50 dark:bg-slate-900/50">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-600"></div>
                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="w-full md:w-1/3 aspect-square relative rounded-lg overflow-hidden group">
                          <Image
                            src="/assets/smartcontract.jpg"
                            alt="Smart Contract Automation - Automated reward distribution and verification system"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="eager"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="w-full md:w-2/3">
                          <h4 className="text-xl font-semibold mb-2">Implementation Details</h4>
                          <p className="mb-4">
                            When users complete verified sustainability actions, RSCs automatically distribute on-chain
                            rewards (REACT tokens) based on predefined rules.
                          </p>
                          <div className="p-4 bg-muted rounded-lg">
                            <h5 className="font-medium mb-2">Technical Example:</h5>
                            <p>
                              A recycling bin equipped with IoT sensors submits proof of recycling → RSC verifies the
                              action and triggers REACT reward distribution without user intervention.
                            </p>
                          </div>
                          <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800/30">
                            <h5 className="font-medium mb-2 flex items-center gap-2">
                              <Zap className="h-4 w-4 text-green-600" />
                              Reactive Network Advantage:
                            </h5>
                            <p className="text-sm">
                              Traditional smart contracts require manual triggers, while Reactive's event-driven
                              architecture enables automatic execution based on real-world events, reducing friction and
                              increasing user engagement.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="nft" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-blue-500" />
                      Dynamic NFTs with Real-Time Upgrades
                    </CardTitle>
                    <CardDescription>NFTs that evolve based on real-world sustainability efforts</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="relative rounded-xl overflow-hidden border p-6 bg-white/50 dark:bg-slate-900/50">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-600"></div>
                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="w-full md:w-1/3 aspect-square relative rounded-lg overflow-hidden group">
                          <Image
                            src="/assets/nft.jpg"
                            alt="Dynamic NFTs - Evolution based on sustainability achievements"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="eager"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="w-full md:w-2/3">
                          <h4 className="text-xl font-semibold mb-2">Implementation Details</h4>
                          <p className="mb-4">
                            Players earn and evolve NFTs based on their real-world sustainability efforts. NFTs
                            dynamically update attributes using Reactive's event-driven architecture.
                          </p>
                          <div className="p-4 bg-muted rounded-lg">
                            <h5 className="font-medium mb-2">Technical Example:</h5>
                            <p>
                              A player who completes five sustainability actions may unlock a "Carbon Neutral Warrior"
                              NFT upgrade with enhanced visual elements and attributes.
                            </p>
                          </div>
                          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800/30">
                            <h5 className="font-medium mb-2 flex items-center gap-2">
                              <Zap className="h-4 w-4 text-blue-600" />
                              Reactive Network Advantage:
                            </h5>
                            <p className="text-sm">
                              Reactive's architecture enables NFTs to evolve without requiring manual transactions,
                              creating a seamless user experience where digital assets reflect real-world impact in
                              real-time.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reputation" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-amber-500" />
                      Automated Reputation System & Leaderboard
                    </CardTitle>
                    <CardDescription>Transparent, tamper-proof ranking system based on verified impact</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="relative rounded-xl overflow-hidden border p-6 bg-white/50 dark:bg-slate-900/50">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-600"></div>
                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="w-full md:w-1/3 aspect-square relative rounded-lg overflow-hidden group">
                          <Image
                            src="/assets/repu.jpg"
                            alt="Reputation System - Blockchain-based achievement tracking"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="eager"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="w-full md:w-2/3">
                          <h4 className="text-xl font-semibold mb-2">Implementation Details</h4>
                          <p className="mb-4">
                            CleanSweep uses Reactive's Smart Contract Events & Callbacks to create a fully
                            decentralized, tamper-proof ranking system that updates in real-time.
                          </p>
                          <div className="p-4 bg-muted rounded-lg">
                            <h5 className="font-medium mb-2">Technical Example:</h5>
                            <p>
                              A user with the highest verified sustainability impact earns a special NFT badge that
                              updates in real-time, showcasing their leadership position.
                            </p>
                          </div>
                          <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800/30">
                            <h5 className="font-medium mb-2 flex items-center gap-2">
                              <Zap className="h-4 w-4 text-amber-600" />
                              Reactive Network Advantage:
                            </h5>
                            <p className="text-sm">
                              Traditional leaderboards require centralized databases or frequent manual updates.
                              Reactive's callbacks enable a fully on-chain reputation system that's transparent and
                              tamper-proof.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="evm" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-purple-500" />
                      Parallelized EVM for Cost Efficiency
                    </CardTitle>
                    <CardDescription>
                      Efficient processing for millions of transactions with low gas costs
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="relative rounded-xl overflow-hidden border p-6 bg-white/50 dark:bg-slate-900/50">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-violet-600"></div>
                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="w-full md:w-1/3 aspect-square relative rounded-lg overflow-hidden group">
                          <Image
                            src="/assets/parallel.jpg"
                            alt="Parallelized EVM - Efficient blockchain processing"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="eager"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="w-full md:w-2/3">
                          <h4 className="text-xl font-semibold mb-2">Implementation Details</h4>
                          <p className="mb-4">
                            By offloading heavy computation to ReactVM's parallelized execution, we ensure low gas
                            costs, instant reward processing, and seamless scalability.
                          </p>
                          <div className="p-4 bg-muted rounded-lg">
                            <h5 className="font-medium mb-2">Technical Benefits:</h5>
                            <p>
                              CleanSweep needs frequent on-chain transactions (reward distributions, NFT updates,
                              staking). Our architecture ensures these remain cost-effective at scale.
                            </p>
                          </div>
                          <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800/30">
                            <h5 className="font-medium mb-2 flex items-center gap-2">
                              <Zap className="h-4 w-4 text-purple-600" />
                              Reactive Network Advantage:
                            </h5>
                            <p className="text-sm">
                              Traditional blockchains face scalability challenges with high transaction volumes.
                              Reactive's parallelized EVM enables CleanSweep to process millions of sustainability
                              verifications without prohibitive gas costs.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Mini-Game & Real-World Integration */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Mini-Game & Real-World Integration</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                CleanSweep seamlessly blends digital gameplay with real-world sustainability actions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="col-span-1 lg:col-span-1 overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src="/assets/mini-game.jpg"
                    alt="Mini-Game Mode"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">Mini-Game Mode</h3>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">
                    Users participate in fast-paced Web3 mini-games that reinforce sustainability education while
                    earning rewards.
                  </p>
                  <div className="p-4 bg-muted rounded-lg">
                    <h5 className="font-medium mb-2">Technical Implementation</h5>
                    <p className="text-sm">
                      Games utilize Reactive's event system to trigger on-chain rewards based on in-game achievements,
                      creating a seamlesstrigger on-chain rewards based on in-game achievements, creating a seamless
                      play-to-earn experience.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="col-span-1 lg:col-span-1 overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src="/assets/vision-demo.jpg"
                    alt="Real-World Challenges"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">Real-World Challenges</h3>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">
                    Players participate in real-world sustainability missions and upload proof for verification and
                    rewards.
                  </p>
                  <div className="p-4 bg-muted rounded-lg">
                    <h5 className="font-medium mb-2">Technical Implementation:</h5>
                    <p className="text-sm">
                      Azure Custom Vision AI analyzes submitted photos of recycling, composting, and other eco-actions,
                      triggering Reactive Smart Contracts to distribute rewards automatically.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="col-span-1 lg:col-span-1 overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src="/assets/brand.jpg"
                    alt="Brand Partnerships"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">Brand Partnerships</h3>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">
                    CleanSweep partners with eco-conscious brands to sponsor sustainability missions within the game.
                  </p>
                  <div className="p-4 bg-muted rounded-lg">
                    <h5 className="font-medium mb-2">Technical Implementation:</h5>
                    <p className="text-sm">
                      Smart contracts manage brand sponsorships, automatically allocating funds to reward pools and
                      tracking brand-specific engagement metrics.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Funding Request Section */}
        <section id="funding" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Funding Request</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We're applying for the $5K Builder Grant to develop CleanSweep's MVP, showcasing the power of Reactive
                Smart Contracts in driving real-world sustainability through our initial testnet deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="border-none shadow-lg">
                  <CardHeader>
                    <CardTitle>Grant Allocation - $5K Builder Grant</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center flex-shrink-0">
                            <FileCode className="h-4 w-4 text-green-600 dark:text-green-400" />
                          </div>
                          <div>
                            <span className="font-medium">Smart Contract Development</span>
                            <p className="text-xs text-muted-foreground">RSCs for sustainability tracking & rewards</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="font-semibold">40%</span>
                          <p className="text-xs text-muted-foreground">$2,000</p>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "40%" }}></div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                            <Gamepad2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <span className="font-medium">Mini-Game Prototype</span>
                            <p className="text-xs text-muted-foreground">Trash Collection Challenge development</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="font-semibold">30%</span>
                          <p className="text-xs text-muted-foreground">$1,500</p>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "30%" }}></div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center flex-shrink-0">
                            <Shield className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div>
                            <span className="font-medium">Testnet & Security</span>
                            <p className="text-xs text-muted-foreground">Kopli deployment & contract audits</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="font-semibold">20%</span>
                          <p className="text-xs text-muted-foreground">$1,000</p>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: "20%" }}></div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center flex-shrink-0">
                            <Layout className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                          </div>
                          <div>
                            <span className="font-medium">UI/UX Development</span>
                            <p className="text-xs text-muted-foreground">Interactive web-based MVP</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="font-semibold">10%</span>
                          <p className="text-xs text-muted-foreground">$500</p>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: "10%" }}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="border-none shadow-lg">
                  <CardHeader>
                    <CardTitle>Development Milestones</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      <div className="relative pl-8 pb-8 border-l-2 border-green-200 dark:border-green-800">
                        <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 border-2 border-green-400 dark:border-green-600 flex items-center justify-center">
                          <span className="text-xs font-bold text-green-600 dark:text-green-400">1</span>
                        </div>
                        <h4 className="font-bold text-lg mb-2">Month 1-2: MVP Development</h4>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-muted-foreground mt-0.5" />
                            <p className="text-muted-foreground">Core smart contracts deployed on Reactive testnet</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-muted-foreground mt-0.5" />
                            <p className="text-muted-foreground">Basic mini-game prototype with Reactive integration</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-muted-foreground mt-0.5" />
                            <p className="text-muted-foreground">Initial computer vision verification integration</p>
                          </div>
                        </div>
                      </div>

                      <div className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800">
                        <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 border-2 border-blue-400 dark:border-blue-600 flex items-center justify-center">
                          <span className="text-xs font-bold text-blue-600 dark:text-blue-400">2</span>
                        </div>
                        <h4 className="font-bold text-lg mb-2">Month 3-4: Beta Launch</h4>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-muted-foreground mt-0.5" />
                            <p className="text-muted-foreground">Full suite of mini-games and challenges</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-muted-foreground mt-0.5" />
                            <p className="text-muted-foreground">Dynamic NFT system with evolution mechanics</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-muted-foreground mt-0.5" />
                            <p className="text-muted-foreground">Brand partnership portal for eco-companies</p>
                          </div>
                        </div>
                      </div>

                      <div className="relative pl-8">
                        <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 border-2 border-purple-400 dark:border-purple-600 flex items-center justify-center">
                          <span className="text-xs font-bold text-purple-600 dark:text-purple-400">3</span>
                        </div>
                        <h4 className="font-bold text-lg mb-2">Month 5-6: Full Launch</h4>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-muted-foreground mt-0.5" />
                            <p className="text-muted-foreground">Mainnet deployment on Reactive Network</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-muted-foreground mt-0.5" />
                            <p className="text-muted-foreground">
                              Full integration with municipal sustainability programs
                            </p>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-muted-foreground mt-0.5" />
                            <p className="text-muted-foreground">
                              Comprehensive analytics dashboard for impact tracking
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition for Reactive Network */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Value for Reactive Network</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                CleanSweep offers significant benefits to Reactive Network beyond just utilizing the technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-green-100 dark:border-green-900/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle>User Acquisition</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    CleanSweep will bring 50,000+ new users to the Reactive ecosystem within the first year, expanding
                    the network's reach.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-blue-100 dark:border-blue-900/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-4">
                    <FileCode className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle>Technology Showcase</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Demonstrates Reactive's capabilities in a high-visibility, socially impactful application with
                    real-world integration.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-purple-100 dark:border-purple-900/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-4">
                    <Handshake className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle>Corporate Partnerships</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Opens doors to eco-conscious brands and municipal governments seeking blockchain solutions for
                    sustainability.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-amber-100 dark:border-amber-900/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center mb-4">
                    <LineChart className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <CardTitle>Transaction Volume</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Will generate 100,000+ monthly transactions on Reactive Network, demonstrating scalability and
                    real-world utility.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500 to-emerald-700">
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center mix-blend-overlay opacity-20"></div>

              {/* Pixelated Elements */}
              <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-lg rotate-12"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-lg -rotate-12"></div>

              <div className="relative px-6 py-16 md:px-12 md:py-24 text-center text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Partner With Us to Drive Innovation</h2>
                <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/80">
                  CleanSweep represents a perfect showcase for Reactive Network's technology while driving meaningful
                  sustainability impact. Together, we can create a new paradigm for blockchain utility.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-green-700 hover:bg-white/90">
                    <Link href="/whitepaper">View Whitepaper</Link>
                  </Button>
                </div>

                <div className="mt-12 flex flex-wrap justify-center gap-8">
                  <div className="flex items-center gap-2">
                    <Rocket className="h-5 w-5" />
                    <span>Development Ready to Start</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    <span>Team of Experienced Developers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Leaf className="h-5 w-5" />
                    <span>Municipal Partnerships</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-muted py-6">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                    <Recycle className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-bold text-lg">CleanSweep</span>
                </div>
                <p className="text-muted-foreground text-sm mb-3">A Gamified Web3 Sustainability Platform</p>
                <div className="flex gap-3">
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    <span className="sr-only">Twitter</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    <span className="sr-only">GitHub</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    <span className="sr-only">Email</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t text-center text-muted-foreground text-sm">
              <p>Submitted to Reactive Network Grant Program - {new Date().getFullYear()}</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
