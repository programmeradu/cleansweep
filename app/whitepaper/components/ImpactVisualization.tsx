"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts"

const adoptionData = [
  { name: "Q1 2025", users: 1000, challenges: 3000, rewards: 2000 },
  { name: "Q2 2025", users: 5000, challenges: 15000, rewards: 12000 },
  { name: "Q3 2025", users: 15000, challenges: 45000, rewards: 40000 },
  { name: "Q4 2025", users: 50000, challenges: 150000, rewards: 130000 },
  { name: "Q1 2026", users: 100000, challenges: 300000, rewards: 270000 },
]

const impactData = [
  { name: "Waste Recycled", value: 45, color: "#10b981" },
  { name: "Carbon Offset", value: 30, color: "#3b82f6" },
  { name: "Energy Saved", value: 15, color: "#f59e0b" },
  { name: "Water Conserved", value: 10, color: "#06b6d4" },
]

const comparisonData = [
  { name: "Traditional", carbon: 100, engagement: 30, cost: 100 },
  { name: "CleanSweep", carbon: 25, engagement: 85, cost: 40 },
]

export function ImpactVisualization() {
  const [activeTab, setActiveTab] = useState("adoption")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="h-[400px] bg-muted/20 animate-pulse rounded-lg"></div>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Impact & Adoption Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="adoption">Adoption</TabsTrigger>
            <TabsTrigger value="impact">Impact Distribution</TabsTrigger>
            <TabsTrigger value="comparison">Sustainability Comparison</TabsTrigger>
          </TabsList>
          
          <TabsContent value="adoption" className="pt-4">
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={adoptionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="users" stroke="#3b82f6" name="Active Users" />
                  <Line type="monotone" dataKey="challenges" stroke="#10b981" name="Completed Challenges" />
                  <Line type="monotone" dataKey="rewards" stroke="#f59e0b" name="Rewards Distributed" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Projected growth of CleanSweep's user base, completed sustainability challenges, and rewards distributed over time.
            </p>
          </TabsContent>
          
          <TabsContent value="impact" className="pt-4">
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={impactData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {impactData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Distribution of environmental impact categories achieved through CleanSweep's gamified sustainability challenges.
            </p>
          </TabsContent>
          
          <TabsContent value="comparison" className="pt-4">
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={comparisonData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="carbon" name="Carbon Footprint" fill="#ef4444" />
                  <Bar dataKey="engagement" name="User Engagement" fill="#10b981" />
                  <Bar dataKey="cost" name="Implementation Cost" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Comparison between traditional sustainability programs and CleanSweep's gamified approach (lower values for carbon footprint and cost are better).
            </p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
