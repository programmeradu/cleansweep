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
    return <div className="h-[300px] sm:h-[400px] bg-muted/20 animate-pulse rounded-lg"></div>
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-lg sm:text-xl">Environmental Impact Visualization</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full grid grid-cols-3 rounded-none border-b">
            <TabsTrigger value="adoption" className="text-xs sm:text-sm py-2 sm:py-3">Platform Adoption</TabsTrigger>
            <TabsTrigger value="impact" className="text-xs sm:text-sm py-2 sm:py-3">Impact Distribution</TabsTrigger>
            <TabsTrigger value="comparison" className="text-xs sm:text-sm py-2 sm:py-3">Sustainability Comparison</TabsTrigger>
          </TabsList>
          
          <TabsContent value="adoption" className="p-4 sm:p-6">
            <div className="h-[300px] sm:h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={adoptionData}
                  margin={{
                    top: 5,
                    right: 5,
                    left: 5,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fontSize: 12 }}
                    tickMargin={10}
                  />
                  <YAxis 
                    tick={{ fontSize: 12 }}
                    tickFormatter={(value) => {
                      if (value >= 1000) {
                        return `${value / 1000}k`;
                      }
                      return value;
                    }}
                  />
                  <Tooltip 
                    formatter={(value) => [`${value.toLocaleString()}`, '']}
                    labelStyle={{ fontSize: 12 }}
                    contentStyle={{ fontSize: 12 }}
                  />
                  <Legend wrapperStyle={{ fontSize: 12, paddingTop: 10 }} />
                  <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} activeDot={{ r: 6 }} />
                  <Line type="monotone" dataKey="challenges" stroke="#10b981" strokeWidth={2} activeDot={{ r: 6 }} />
                  <Line type="monotone" dataKey="rewards" stroke="#f59e0b" strokeWidth={2} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          
          <TabsContent value="impact" className="p-4 sm:p-6">
            <div className="h-[300px] sm:h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={impactData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    innerRadius={40}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {impactData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value}%`, '']}
                    labelStyle={{ fontSize: 12 }}
                    contentStyle={{ fontSize: 12 }}
                  />
                  <Legend wrapperStyle={{ fontSize: 12, paddingTop: 20 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          
          <TabsContent value="comparison" className="p-4 sm:p-6">
            <div className="h-[300px] sm:h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={comparisonData}
                  margin={{
                    top: 5,
                    right: 5,
                    left: 5,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fontSize: 12 }}
                    tickMargin={10}
                  />
                  <YAxis 
                    tick={{ fontSize: 12 }}
                  />
                  <Tooltip 
                    labelStyle={{ fontSize: 12 }}
                    contentStyle={{ fontSize: 12 }}
                  />
                  <Legend wrapperStyle={{ fontSize: 12, paddingTop: 10 }} />
                  <Bar name="Carbon Footprint" dataKey="carbon" fill="#ef4444" />
                  <Bar name="User Engagement" dataKey="engagement" fill="#10b981" />
                  <Bar name="Operational Cost" dataKey="cost" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
