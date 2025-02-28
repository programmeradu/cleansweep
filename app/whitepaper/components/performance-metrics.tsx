"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "1K", traditional: 100, reactive: 10 },
  { name: "10K", traditional: 250, reactive: 15 },
  { name: "50K", traditional: 500, reactive: 25 },
  { name: "100K", traditional: 1000, reactive: 35 },
  { name: "500K", traditional: 2000, reactive: 50 },
  { name: "1M", traditional: 5000, reactive: 75 },
]

export function PerformanceMetrics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="traditional" stroke="#ef4444" name="Traditional EVM" />
              <Line type="monotone" dataKey="reactive" stroke="#22c55e" name="ReactVM" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

