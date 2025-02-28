"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"

export function ArchitectureDiagram() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = canvas.offsetWidth * window.devicePixelRatio
    canvas.height = canvas.offsetHeight * window.devicePixelRatio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

    // Draw architecture diagram
    const drawComponent = (x: number, y: number, width: number, height: number, label: string, color: string) => {
      ctx.fillStyle = color
      ctx.strokeStyle = "#000"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.roundRect(x, y, width, height, 10)
      ctx.fill()
      ctx.stroke()

      ctx.fillStyle = "#000"
      ctx.font = "14px Inter"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(label, x + width / 2, y + height / 2)
    }

    // Draw connection lines
    const drawConnection = (startX: number, startY: number, endX: number, endY: number) => {
      ctx.beginPath()
      ctx.moveTo(startX, startY)
      ctx.lineTo(endX, endY)
      ctx.strokeStyle = "#666"
      ctx.lineWidth = 2
      ctx.stroke()
    }

    // Draw components
    drawComponent(50, 50, 120, 60, "ReactVM", "rgba(34, 197, 94, 0.2)")
    drawComponent(250, 50, 120, 60, "Smart Contracts", "rgba(59, 130, 246, 0.2)")
    drawComponent(450, 50, 120, 60, "NFT System", "rgba(168, 85, 247, 0.2)")

    drawComponent(150, 150, 120, 60, "Verification", "rgba(234, 179, 8, 0.2)")
    drawComponent(350, 150, 120, 60, "Rewards", "rgba(239, 68, 68, 0.2)")

    // Draw connections
    drawConnection(170, 80, 250, 80)
    drawConnection(370, 80, 450, 80)
    drawConnection(210, 150, 210, 110)
    drawConnection(410, 150, 410, 110)
  }, [])

  return (
    <Card className="p-4">
      <canvas ref={canvasRef} style={{ width: "100%", height: "300px" }} className="w-full" />
    </Card>
  )
}

