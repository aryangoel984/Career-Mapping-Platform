"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"

interface Node {
  id: string
  title: string
  description: string
  x: number
  y: number
  children?: Node[]
  status?: "not-started" | "in-progress" | "completed"
  color?: string
}

interface RoadmapProps {
  nodes: Node[]
  onNodeClick: (node: Node) => void
}

export default function InteractiveRoadmap({ nodes, onNodeClick }: RoadmapProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = canvas.offsetWidth * window.devicePixelRatio
    canvas.height = canvas.offsetHeight * window.devicePixelRatio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw connections
    drawConnections(ctx, nodes)

    // Draw nodes
    nodes.forEach((node) => drawNode(ctx, node))
  }, [nodes])

  const drawConnections = (ctx: CanvasRenderingContext2D, nodes: Node[]) => {
    ctx.beginPath()
    ctx.strokeStyle = "#e5e7eb"
    ctx.lineWidth = 2

    const drawNodeConnections = (node: Node) => {
      if (node.children) {
        node.children.forEach((child) => {
          ctx.moveTo(node.x, node.y)

          // Create curved lines
          const controlX = (node.x + child.x) / 2
          const controlY = (node.y + child.y) / 2

          ctx.quadraticCurveTo(controlX, controlY, child.x, child.y)

          drawNodeConnections(child)
        })
      }
    }

    nodes.forEach((node) => drawNodeConnections(node))
    ctx.stroke()
  }

  const drawNode = (ctx: CanvasRenderingContext2D, node: Node) => {
    ctx.beginPath()
    ctx.fillStyle = node.color || "#8884d8"
    ctx.strokeStyle = "#fff"
    ctx.lineWidth = 2

    // Draw node circle
    ctx.arc(node.x, node.y, 30, 0, Math.PI * 2)
    ctx.fill()
    ctx.stroke()

    // Draw node title
    ctx.fillStyle = "#fff"
    ctx.font = "12px Inter"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"

    // Wrap text if needed
    const words = node.title.split(" ")
    let line = ""
    let y = node.y - 6

    words.forEach((word) => {
      const testLine = line + word + " "
      const metrics = ctx.measureText(testLine)

      if (metrics.width > 50) {
        ctx.fillText(line, node.x, y)
        line = word + " "
        y += 12
      } else {
        line = testLine
      }
    })
    ctx.fillText(line, node.x, y)
  }

  const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    // Find clicked node
    const clickedNode = findClickedNode(x, y, nodes)
    if (clickedNode) {
      onNodeClick(clickedNode)
    }
  }

  const handleCanvasMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const node = findClickedNode(x, y, nodes)
    setHoveredNode(node)
    setTooltipPos({ x: event.clientX, y: event.clientY })
  }

  const findClickedNode = (x: number, y: number, nodes: Node[]): Node | null => {
    for (const node of nodes) {
      const dx = x - node.x
      const dy = y - node.y
      if (dx * dx + dy * dy < 900) {
        // 30px radius
        return node
      }
      if (node.children) {
        const childNode = findClickedNode(x, y, node.children)
        if (childNode) return childNode
      }
    }
    return null
  }

  return (
    <div className="relative w-full h-[600px]">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-pointer"
        onClick={handleCanvasClick}
        onMouseMove={handleCanvasMouseMove}
        style={{ width: "100%", height: "100%" }}
      />

      {hoveredNode && (
        <div
          className="absolute z-10 p-2 bg-white rounded-lg shadow-lg border max-w-xs"
          style={{
            left: tooltipPos.x + 10,
            top: tooltipPos.y + 10,
          }}
        >
          <h3 className="font-medium">{hoveredNode.title}</h3>
          <p className="text-sm text-muted-foreground">{hoveredNode.description}</p>
          {hoveredNode.status && (
            <Badge
              className={
                hoveredNode.status === "completed"
                  ? "bg-green-100 text-green-800"
                  : hoveredNode.status === "in-progress"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-gray-100 text-gray-800"
              }
            >
              {hoveredNode.status}
            </Badge>
          )}
        </div>
      )}

      <div className="absolute bottom-4 right-4">
        <Button variant="outline" size="sm">
          <Info className="w-4 h-4 mr-2" />
          Click nodes to explore
        </Button>
      </div>
    </div>
  )
}

