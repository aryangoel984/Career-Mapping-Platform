"use client"

import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import InteractiveRoadmap from "@/components/interactive-roadmap"

// Define types for node data
interface Resource {
  title: string;
  type: string;
}

interface RoadmapNode {
  id: string;
  title: string;
  description: string;
  x: number;
  y: number;
  color?: string;
  status?: "not-started" | "in-progress" | "completed";
  importance?: string;
  concepts?: string[];
  resources?: Resource[];
  children?: RoadmapNode[];
}

interface RoadmapProps {
  onNodeClick: (node: RoadmapNode) => void;
}

export default function RoadmapPage() {
  const [selectedNode, setSelectedNode] = useState<RoadmapNode | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const frontendNodes: RoadmapNode[] = [
    {
      id: "start",
      title: "Where to Start?",
      description: "Begin your frontend development journey",
      x: 300,
      y: 300,
      color: "#8884d8",
      children: [
        {
          id: "fundamentals",
          title: "Web Fundamentals",
          description: "Master the basics of web development",
          x: 500,
          y: 200,
          color: "#82ca9d",
          status: "not-started",
          children: [
            {
              id: "html",
              title: "HTML5",
              description: "Structure and semantics",
              x: 700,
              y: 150,
              color: "#8884d8",
              status: "not-started",
            },
            {
              id: "css",
              title: "CSS3",
              description: "Styling and layouts",
              x: 700,
              y: 250,
              color: "#8884d8",
              status: "not-started",
            },
          ],
        },
        {
          id: "javascript",
          title: "JavaScript",
          description: "Core programming concepts",
          x: 500,
          y: 400,
          color: "#ffc658",
          status: "not-started",
          children: [
            {
              id: "es6",
              title: "ES6+",
              description: "Modern JavaScript features",
              x: 700,
              y: 350,
              color: "#ffc658",
              status: "not-started",
            },
            {
              id: "dom",
              title: "DOM",
              description: "Document Object Model",
              x: 700,
              y: 450,
              color: "#ffc658",
              status: "not-started",
            },
          ],
        },
      ],
    },
  ]

  const handleNodeClick = (node: RoadmapNode) => {
    setSelectedNode(node)
    setIsDialogOpen(true)
  }

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Interactive Career Roadmap</h1>
        <p className="text-muted-foreground">Explore your learning path with this interactive mind map</p>
      </div>

      <Tabs defaultValue="frontend" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="frontend">Frontend Developer</TabsTrigger>
          <TabsTrigger value="data">Data Scientist</TabsTrigger>
          <TabsTrigger value="fullstack">Full Stack Developer</TabsTrigger>
        </TabsList>

        <TabsContent value="frontend" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Frontend Developer Roadmap</CardTitle>
              <CardDescription>Click on any node to explore details and resources</CardDescription>
            </CardHeader>
            <CardContent>
              <InteractiveRoadmap nodes={frontendNodes} onNodeClick={handleNodeClick} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="data" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Data Scientist Roadmap</CardTitle>
              <CardDescription>Click on any node to explore details and resources</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-[600px] bg-gray-50 rounded-lg overflow-hidden">
                <DataScienceRoadmap onNodeClick={handleNodeClick} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fullstack" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Full Stack Developer Roadmap</CardTitle>
              <CardDescription>Click on any node to explore details and resources</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-[600px] bg-gray-50 rounded-lg overflow-hidden">
                <FullStackRoadmap onNodeClick={handleNodeClick} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {selectedNode && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedNode.title}</DialogTitle>
              <DialogDescription>{selectedNode.description}</DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <h3 className="font-medium mb-2">Learning Resources</h3>
              <ul className="space-y-2">
                <li>Resource 1</li>
                <li>Resource 2</li>
                <li>Resource 3</li>
              </ul>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

function FrontendRoadmap({ onNodeClick }: RoadmapProps) {
  const frontendNodesOriginal: RoadmapNode[] = [
    {
      id: "html-css",
      title: "HTML & CSS Fundamentals",
      description: "The building blocks of web development",
      x: 150,
      y: 300,
      status: "completed",
      importance:
        "HTML and CSS are the foundation of all web development. They define the structure and appearance of web pages and are essential skills for any frontend developer.",
      concepts: [
        "HTML5 semantic elements",
        "CSS selectors and specificity",
        "Responsive design principles",
        "Flexbox and Grid layouts",
        "CSS variables and custom properties",
      ],
      resources: [
        { title: "MDN Web Docs - HTML", type: "Documentation" },
        { title: "CSS Tricks - Complete Guide to Flexbox", type: "Tutorial" },
        { title: "Frontend Masters - HTML & CSS Basics", type: "Course" },
      ],
    },
    // ... other nodes remain the same
  ]

  // Draw connections between nodes
  const connections = [
    { from: "html-css", to: "javascript" },
    // ... other connections remain the same
  ]

  return (
    <div className="relative w-full h-full">
      {/* Draw connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {connections.map((connection, index) => {
          const fromNode = frontendNodesOriginal.find((node) => node.id === connection.from)
          const toNode = frontendNodesOriginal.find((node) => node.id === connection.to)

          if (fromNode && toNode) {
            return (
              <line
                key={index}
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke="#d1d5db"
                strokeWidth="2"
              />
            )
          }
          return null
        })}
      </svg>

      {/* Draw nodes */}
      {frontendNodesOriginal.map((node) => (
        <div
          key={node.id}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-40 p-2 rounded-lg shadow-md cursor-pointer transition-all hover:scale-105 ${
            node.status === "completed"
              ? "bg-green-100 border-green-500"
              : node.status === "in-progress"
                ? "bg-blue-100 border-blue-500"
                : "bg-white border-gray-300"
          } border-2`}
          style={{ left: node.x, top: node.y }}
          onClick={() => onNodeClick(node)}
        >
          <div className="text-center">
            <h3 className="font-medium text-sm">{node.title}</h3>
            <p className="text-xs text-muted-foreground mt-1">{node.description}</p>
            {node.status === "completed" && <Badge className="mt-2 bg-green-500">Completed</Badge>}
            {node.status === "in-progress" && <Badge className="mt-2 bg-blue-500">In Progress</Badge>}
          </div>
        </div>
      ))}
    </div>
  )
}

function DataScienceRoadmap({ onNodeClick }: RoadmapProps) {
  const dataScienceNodes: RoadmapNode[] = [
    {
      id: "python",
      title: "Python Programming",
      description: "Foundation for data science",
      x: 150,
      y: 300,
      status: "not-started",
      importance:
        "Python is the most widely used programming language in data science due to its simplicity, readability, and powerful libraries for data analysis and machine learning.",
      concepts: [
        "Basic syntax and data types",
        "Control flow and functions",
        "Object-oriented programming",
        "File handling and I/O",
        "Libraries (NumPy, Pandas)",
        "Virtual environments",
      ],
      resources: [
        { title: "Python Documentation", type: "Documentation" },
        { title: "Python for Data Science Handbook", type: "Book" },
        { title: "DataCamp - Introduction to Python", type: "Course" },
      ],
    },
    // ... other nodes remain the same
  ]

  // Draw connections between nodes
  const connections = [
    { from: "python", to: "statistics" },
    // ... other connections remain the same
  ]

  return (
    <div className="relative w-full h-full">
      {/* Draw connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {connections.map((connection, index) => {
          const fromNode = dataScienceNodes.find((node) => node.id === connection.from)
          const toNode = dataScienceNodes.find((node) => node.id === connection.to)

          if (fromNode && toNode) {
            return (
              <line
                key={index}
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke="#d1d5db"
                strokeWidth="2"
              />
            )
          }
          return null
        })}
      </svg>

      {/* Draw nodes */}
      {dataScienceNodes.map((node) => (
        <div
          key={node.id}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-40 p-2 rounded-lg shadow-md cursor-pointer transition-all hover:scale-105 ${
            node.status === "completed"
              ? "bg-green-100 border-green-500"
              : node.status === "in-progress"
                ? "bg-blue-100 border-blue-500"
                : "bg-white border-gray-300"
          } border-2`}
          style={{ left: node.x, top: node.y }}
          onClick={() => onNodeClick(node)}
        >
          <div className="text-center">
            <h3 className="font-medium text-sm">{node.title}</h3>
            <p className="text-xs text-muted-foreground mt-1">{node.description}</p>
            {node.status === "completed" && <Badge className="mt-2 bg-green-500">Completed</Badge>}
            {node.status === "in-progress" && <Badge className="mt-2 bg-blue-500">In Progress</Badge>}
          </div>
        </div>
      ))}
    </div>
  )
}

function FullStackRoadmap({ onNodeClick }: RoadmapProps) {
  const fullStackNodes: RoadmapNode[] = [
    {
      id: "html-css",
      title: "HTML & CSS",
      description: "Frontend fundamentals",
      x: 150,
      y: 200,
      status: "not-started",
      importance:
        "HTML and CSS are the foundation of all web development. They define the structure and appearance of web pages and are essential skills for any full stack developer.",
      concepts: [
        "HTML5 semantic elements",
        "CSS selectors and specificity",
        "Responsive design principles",
        "Flexbox and Grid layouts",
        "CSS preprocessors (Sass, Less)",
      ],
      resources: [
        { title: "MDN Web Docs - HTML", type: "Documentation" },
        { title: "CSS Tricks - Complete Guide to Flexbox", type: "Tutorial" },
        { title: "Frontend Masters - HTML & CSS Basics", type: "Course" },
      ],
    },
    // ... other nodes remain the same
  ]

  // Draw connections between nodes
  const connections = [
    { from: "html-css", to: "frontend-framework" },
    // ... other connections remain the same
  ]

  return (
    <div className="relative w-full h-full">
      {/* Draw connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {connections.map((connection, index) => {
          const fromNode = fullStackNodes.find((node) => node.id === connection.from)
          const toNode = fullStackNodes.find((node) => node.id === connection.to)

          if (fromNode && toNode) {
            return (
              <line
                key={index}
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke="#d1d5db"
                strokeWidth="2"
              />
            )
          }
          return null
        })}
      </svg>

      {/* Draw nodes */}
      {fullStackNodes.map((node) => (
        <div
          key={node.id}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-40 p-2 rounded-lg shadow-md cursor-pointer transition-all hover:scale-105 ${
            node.status === "completed"
              ? "bg-green-100 border-green-500"
              : node.status === "in-progress"
                ? "bg-blue-100 border-blue-500"
                : "bg-white border-gray-300"
          } border-2`}
          style={{ left: node.x, top: node.y }}
          onClick={() => onNodeClick(node)}
        >
          <div className="text-center">
            <h3 className="font-medium text-sm">{node.title}</h3>
            <p className="text-xs text-muted-foreground mt-1">{node.description}</p>
            {node.status === "completed" && <Badge className="mt-2 bg-green-500">Completed</Badge>}
            {node.status === "in-progress" && <Badge className="mt-2 bg-blue-500">In Progress</Badge>}
          </div>
        </div>
      ))}
    </div>
  )
}
