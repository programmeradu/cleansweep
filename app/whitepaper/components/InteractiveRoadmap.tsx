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
  
  const filteredItems = filter 
    ? roadmapItems.filter(item => item.category === filter)
    : roadmapItems
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-emerald-500"
      case "in-progress": return "bg-amber-500"
      case "planned": return "bg-slate-500"
      default: return "bg-slate-500"
    }
  }
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "development": return "bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800"
      case "community": return "bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-300 dark:hover:bg-purple-800"
      case "partnerships": return "bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-900 dark:text-amber-300 dark:hover:bg-amber-800"
      case "technology": return "bg-emerald-100 text-emerald-800 hover:bg-emerald-200 dark:bg-emerald-900 dark:text-emerald-300 dark:hover:bg-emerald-800"
      default: return "bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
    }
  }
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Interactive Roadmap</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          <Badge 
            variant="outline" 
            className={`cursor-pointer ${filter === null ? 'bg-slate-100 dark:bg-slate-800' : ''}`}
            onClick={() => setFilter(null)}
          >
            All
          </Badge>
          <Badge 
            variant="outline" 
            className={`cursor-pointer ${filter === 'development' ? getCategoryColor('development') : ''}`}
            onClick={() => setFilter('development')}
          >
            Development
          </Badge>
          <Badge 
            variant="outline" 
            className={`cursor-pointer ${filter === 'community' ? getCategoryColor('community') : ''}`}
            onClick={() => setFilter('community')}
          >
            Community
          </Badge>
          <Badge 
            variant="outline" 
            className={`cursor-pointer ${filter === 'partnerships' ? getCategoryColor('partnerships') : ''}`}
            onClick={() => setFilter('partnerships')}
          >
            Partnerships
          </Badge>
          <Badge 
            variant="outline" 
            className={`cursor-pointer ${filter === 'technology' ? getCategoryColor('technology') : ''}`}
            onClick={() => setFilter('technology')}
          >
            Technology
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700" />
          
          <div className="space-y-8">
            {filteredItems.map((item) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`relative pl-10 ${selectedPhase === item.id ? 'bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg -ml-4' : ''}`}
                onClick={() => setSelectedPhase(selectedPhase === item.id ? null : item.id)}
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 top-1.5 w-8 h-8 rounded-full flex items-center justify-center ${getStatusColor(item.status)}`}>
                  {item.icon}
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className={getCategoryColor(item.category)}>
                        {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {item.quarter} {item.year}
                      </span>
                    </div>
                  </div>
                  
                  <Badge variant={item.status === "completed" ? "default" : "outline"} className={
                    item.status === "completed" ? "bg-emerald-500" : 
                    item.status === "in-progress" ? "text-amber-500 border-amber-500" : 
                    "text-slate-500 border-slate-500"
                  }>
                    {item.status === "completed" ? "Completed" : 
                     item.status === "in-progress" ? "In Progress" : 
                     "Planned"}
                  </Badge>
                </div>
                
                {(selectedPhase === item.id) && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-2 text-muted-foreground"
                  >
                    {item.description}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
