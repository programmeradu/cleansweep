"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Rocket, 
  Users, 
  Code, 
  Trophy, 
  Zap, 
  Globe, 
  CheckCircle2, 
  LucideIcon 
} from "lucide-react"

type RoadmapItem = {
  id: string
  title: string
  description: string
  quarter: string
  year: string
  status: "completed" | "in-progress" | "planned"
  icon: JSX.Element
  category: "development" | "community" | "partnerships" | "technology"
}

export function InteractiveRoadmap() {
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null)
  const [filter, setFilter] = useState<string | null>(null)
  
  const roadmapItems: RoadmapItem[] = [
    {
      id: "1",
      title: "Concept Development",
      description: "Initial concept design and technical architecture planning for CleanSweep platform",
      quarter: "Q1",
      year: "2025",
      status: "completed",
      icon: <Rocket className="h-5 w-5" />,
      category: "development"
    },
    {
      id: "2",
      title: "MVP Development",
      description: "Build and deploy Reactive Smart Contracts on Kopli Testnet",
      quarter: "Q2",
      year: "2025",
      status: "in-progress",
      icon: <Code className="h-5 w-5" />,
      category: "development"
    },
    {
      id: "3",
      title: "Trash Collection Mini-game",
      description: "Develop the first interactive sustainability challenge",
      quarter: "Q2",
      year: "2025",
      status: "in-progress",
      icon: <Trophy className="h-5 w-5" />,
      category: "development"
    },
    {
      id: "4",
      title: "Community Testing",
      description: "Conduct testnet pilot with real users and gather feedback",
      quarter: "Q3",
      year: "2025",
      status: "planned",
      icon: <Users className="h-5 w-5" />,
      category: "community"
    },
    {
      id: "5",
      title: "ReactVM Gas Optimization",
      description: "Optimize smart contracts for maximum efficiency",
      quarter: "Q3",
      year: "2025",
      status: "planned",
      icon: <Zap className="h-5 w-5" />,
      category: "technology"
    },
    {
      id: "6",
      title: "Security Audits",
      description: "Conduct comprehensive security audits of all smart contracts",
      quarter: "Q3",
      year: "2025",
      status: "planned",
      icon: <CheckCircle2 className="h-5 w-5" />,
      category: "technology"
    },
    {
      id: "7",
      title: "Mainnet Launch",
      description: "Full platform launch on mainnet with REACT tokens",
      quarter: "Q4",
      year: "2025",
      status: "planned",
      icon: <Rocket className="h-5 w-5" />,
      category: "development"
    },
    {
      id: "8",
      title: "Partnership Program",
      description: "Establish partnerships with sustainability-focused organizations",
      quarter: "Q4",
      year: "2025",
      status: "planned",
      icon: <Globe className="h-5 w-5" />,
      category: "partnerships"
    }
  ]
  
  // Filter items based on selected phase and category filter
  const filteredItems = roadmapItems.filter(item => {
    if (selectedPhase && `${item.quarter} ${item.year}` !== selectedPhase) {
      return false
    }
    if (filter && item.category !== filter) {
      return false
    }
    return true
  })

  // Get unique phases (quarter + year combinations)
  const phases = Array.from(new Set(roadmapItems.map(item => `${item.quarter} ${item.year}`)))

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold">CleanSweep Roadmap</h3>
          <p className="text-sm sm:text-base text-muted-foreground">
            Our development timeline and milestones
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Badge 
            className={`cursor-pointer px-2 py-1 text-xs ${filter === null ? 'bg-primary' : 'bg-secondary hover:bg-secondary/80'}`}
            onClick={() => setFilter(null)}
          >
            All
          </Badge>
          <Badge 
            className={`cursor-pointer px-2 py-1 text-xs ${filter === 'development' ? 'bg-primary' : 'bg-secondary hover:bg-secondary/80'}`}
            onClick={() => setFilter('development')}
          >
            Development
          </Badge>
          <Badge 
            className={`cursor-pointer px-2 py-1 text-xs ${filter === 'technology' ? 'bg-primary' : 'bg-secondary hover:bg-secondary/80'}`}
            onClick={() => setFilter('technology')}
          >
            Technology
          </Badge>
          <Badge 
            className={`cursor-pointer px-2 py-1 text-xs ${filter === 'community' ? 'bg-primary' : 'bg-secondary hover:bg-secondary/80'}`}
            onClick={() => setFilter('community')}
          >
            Community
          </Badge>
          <Badge 
            className={`cursor-pointer px-2 py-1 text-xs ${filter === 'partnerships' ? 'bg-primary' : 'bg-secondary hover:bg-secondary/80'}`}
            onClick={() => setFilter('partnerships')}
          >
            Partnerships
          </Badge>
        </div>
      </div>
      
      {/* Timeline phases */}
      <div className="relative">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 z-0" />
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 relative z-10">
          {phases.map((phase) => (
            <Badge
              key={phase}
              className={`cursor-pointer px-3 py-1.5 text-xs sm:text-sm ${selectedPhase === phase ? 'bg-primary' : 'bg-secondary hover:bg-secondary/80'}`}
              onClick={() => setSelectedPhase(selectedPhase === phase ? null : phase)}
            >
              {phase}
            </Badge>
          ))}
        </div>
        
        {/* Timeline items */}
        <div className="space-y-8 relative">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-4 ${
                index % 2 === 0 ? 'sm:flex-row-reverse sm:text-right' : ''
              }`}
            >
              <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 z-0 hidden sm:block" />
              
              <div className="flex-1 max-w-full sm:max-w-[calc(50%-2rem)]">
                <Card className="overflow-hidden">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className={`p-1.5 rounded-full 
                          ${item.status === 'completed' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' : 
                            item.status === 'in-progress' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 
                            'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'}`}
                        >
                          {item.icon}
                        </div>
                        <CardTitle className="text-base sm:text-lg">{item.title}</CardTitle>
                      </div>
                      <Badge className={`
                        ${item.status === 'completed' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' : 
                          item.status === 'in-progress' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 
                          'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'}`}
                      >
                        {item.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <p className="text-sm sm:text-base text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex items-center justify-center z-10 mt-2 sm:mt-0">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                  {item.status === 'completed' ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <span className="text-xs font-bold">{item.id}</span>
                  )}
                </div>
              </div>
              
              <div className="flex-1 hidden sm:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
