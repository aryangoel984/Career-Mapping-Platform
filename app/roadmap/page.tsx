"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, ExternalLink, Sparkles, BookOpen } from "lucide-react"
import Link from "next/link"
import CareerRoadmap from "@/components/career-roadmap"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { MarkerType } from "reactflow"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function RoadmapPage() {
  const [selectedNode, setSelectedNode] = useState(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isGeneratingRoadmap, setIsGeneratingRoadmap] = useState(false)
  const [generatedRoadmap, setGeneratedRoadmap] = useState(null)
  const [activeTab, setActiveTab] = useState("frontend")

  // Frontend Developer Roadmap
  const frontendNodes = [
    {
      id: "html-css",
      type: "roadmapNode",
      position: { x: 100, y: 300 },
      data: {
        label: "HTML & CSS Fundamentals",
        description: "Master the core technologies of the web",
        status: "completed",
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
    },
    {
      id: "javascript",
      type: "roadmapNode",
      position: { x: 350, y: 300 },
      data: {
        label: "JavaScript Fundamentals",
        description: "Core programming concepts for the web",
        status: "completed",
        concepts: [
          "Variables, data types, and operators",
          "Functions and scope",
          "Arrays and objects",
          "DOM manipulation",
          "Event handling",
          "Asynchronous JavaScript (Promises, async/await)",
        ],
        resources: [
          { title: "JavaScript.info", type: "Documentation" },
          { title: "Eloquent JavaScript", type: "Book" },
          { title: "JavaScript30 by Wes Bos", type: "Course" },
        ],
      },
    },
    {
      id: "react",
      type: "roadmapNode",
      position: { x: 600, y: 200 },
      data: {
        label: "React Framework",
        description: "Component-based UI development",
        status: "in-progress",
        concepts: [
          "Components and props",
          "State and lifecycle",
          "Hooks (useState, useEffect, useContext)",
          "Context API",
          "React Router",
          "State management (Redux, Zustand)",
        ],
        resources: [
          { title: "React Documentation", type: "Documentation" },
          { title: "Epic React by Kent C. Dodds", type: "Course" },
          { title: "React for Beginners by Wes Bos", type: "Course" },
        ],
      },
    },
    {
      id: "typescript",
      type: "roadmapNode",
      position: { x: 600, y: 400 },
      data: {
        label: "TypeScript",
        description: "Type-safe JavaScript development",
        status: "not-started",
        concepts: [
          "Basic types and interfaces",
          "Type inference",
          "Generics",
          "Union and intersection types",
          "TypeScript with React",
          "Advanced type utilities",
        ],
        resources: [
          { title: "TypeScript Handbook", type: "Documentation" },
          { title: "TypeScript Deep Dive", type: "Book" },
          { title: "Total TypeScript by Matt Pocock", type: "Course" },
        ],
      },
    },
    {
      id: "testing",
      type: "roadmapNode",
      position: { x: 850, y: 300 },
      data: {
        label: "Frontend Testing",
        description: "Ensuring code quality and reliability",
        status: "not-started",
        concepts: [
          "Jest for unit testing",
          "React Testing Library",
          "Component testing",
          "Mocking API calls",
          "End-to-end testing with Cypress",
          "Test-driven development (TDD)",
        ],
        resources: [
          { title: "Testing JavaScript by Kent C. Dodds", type: "Course" },
          { title: "React Testing Library Documentation", type: "Documentation" },
          { title: "Cypress Documentation", type: "Documentation" },
        ],
      },
    },
    {
      id: "performance",
      type: "roadmapNode",
      position: { x: 1100, y: 200 },
      data: {
        label: "Web Performance",
        description: "Optimizing for speed and user experience",
        status: "not-started",
        concepts: [
          "Core Web Vitals",
          "Lazy loading and code splitting",
          "Image optimization",
          "Caching strategies",
          "Performance monitoring",
          "Bundle size optimization",
        ],
        resources: [
          { title: "web.dev - Learn Web Performance", type: "Documentation" },
          { title: "Frontend Masters - Web Performance", type: "Course" },
          { title: "Lighthouse Documentation", type: "Tool" },
        ],
      },
    },
    {
      id: "accessibility",
      type: "roadmapNode",
      position: { x: 1100, y: 400 },
      data: {
        label: "Web Accessibility",
        description: "Building inclusive web experiences",
        status: "not-started",
        concepts: [
          "WCAG guidelines",
          "Semantic HTML",
          "Keyboard navigation",
          "Screen reader compatibility",
          "Color contrast and visual design",
          "Accessible forms and interactive elements",
        ],
        resources: [
          { title: "MDN Web Docs - Accessibility", type: "Documentation" },
          { title: "A11y Project", type: "Resource" },
          { title: "Deque University", type: "Course" },
        ],
      },
    },
  ]

  const frontendEdges = [
    {
      id: "html-css-to-javascript",
      source: "html-css",
      target: "javascript",
      type: "smoothstep",
      animated: true,
      style: { stroke: "#6366f1" },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: "#6366f1",
      },
    },
    {
      id: "javascript-to-react",
      source: "javascript",
      target: "react",
      type: "smoothstep",
      style: { stroke: "#6366f1" },
    },
    {
      id: "javascript-to-typescript",
      source: "javascript",
      target: "typescript",
      type: "smoothstep",
      style: { stroke: "#6366f1" },
    },
    {
      id: "react-to-testing",
      source: "react",
      target: "testing",
      type: "smoothstep",
      style: { stroke: "#6366f1" },
    },
    {
      id: "typescript-to-testing",
      source: "typescript",
      target: "testing",
      type: "smoothstep",
      style: { stroke: "#6366f1" },
    },
    {
      id: "testing-to-performance",
      source: "testing",
      target: "performance",
      type: "smoothstep",
      style: { stroke: "#6366f1" },
    },
    {
      id: "testing-to-accessibility",
      source: "testing",
      target: "accessibility",
      type: "smoothstep",
      style: { stroke: "#6366f1" },
    },
  ]

  // Data Science Roadmap
  const dataScienceNodes = [
    {
      id: "python",
      type: "roadmapNode",
      position: { x: 100, y: 300 },
      data: {
        label: "Python Programming",
        description: "Foundation for data science",
        status: "not-started",
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
    },
    {
      id: "statistics",
      type: "roadmapNode",
      position: { x: 350, y: 300 },
      data: {
        label: "Statistics & Mathematics",
        description: "Theoretical foundation",
        status: "not-started",
        concepts: [
          "Descriptive statistics",
          "Probability distributions",
          "Hypothesis testing",
          "Linear algebra basics",
          "Calculus fundamentals",
          "Bayesian statistics",
        ],
        resources: [
          { title: "Statistics and Probability by Khan Academy", type: "Course" },
          { title: "Think Stats by Allen B. Downey", type: "Book" },
          { title: "StatQuest with Josh Starmer (YouTube)", type: "Video Series" },
        ],
      },
    },
    {
      id: "data-analysis",
      type: "roadmapNode",
      position: { x: 600, y: 200 },
      data: {
        label: "Data Analysis & Visualization",
        description: "Extracting insights from data",
        status: "not-started",
        concepts: [
          "Data cleaning and preprocessing",
          "Exploratory data analysis (EDA)",
          "Pandas for data manipulation",
          "Matplotlib and Seaborn for visualization",
          "Tableau for interactive dashboards",
          "Statistical analysis techniques",
        ],
        resources: [
          { title: "Pandas Documentation", type: "Documentation" },
          { title: "Data Visualization with Python", type: "Course" },
          { title: "Storytelling with Data by Cole Nussbaumer Knaflic", type: "Book" },
        ],
      },
    },
    {
      id: "machine-learning",
      type: "roadmapNode",
      position: { x: 600, y: 400 },
      data: {
        label: "Machine Learning",
        description: "Building predictive models",
        status: "not-started",
        concepts: [
          "Supervised vs. unsupervised learning",
          "Classification and regression",
          "Model evaluation and validation",
          "Feature engineering",
          "Ensemble methods",
          "Scikit-learn library",
        ],
        resources: [
          { title: "Hands-On Machine Learning with Scikit-Learn", type: "Book" },
          { title: "Machine Learning by Andrew Ng (Coursera)", type: "Course" },
          { title: "Scikit-learn Documentation", type: "Documentation" },
        ],
      },
    },
    {
      id: "deep-learning",
      type: "roadmapNode",
      position: { x: 850, y: 300 },
      data: {
        label: "Deep Learning",
        description: "Neural networks and AI",
        status: "not-started",
        concepts: [
          "Neural network fundamentals",
          "Convolutional neural networks (CNNs)",
          "Recurrent neural networks (RNNs)",
          "Transfer learning",
          "TensorFlow and PyTorch",
          "GPU acceleration",
        ],
        resources: [
          { title: "Deep Learning by Ian Goodfellow", type: "Book" },
          { title: "Deep Learning Specialization by Andrew Ng", type: "Course" },
          { title: "TensorFlow Documentation", type: "Documentation" },
        ],
      },
    },
    {
      id: "big-data",
      type: "roadmapNode",
      position: { x: 1100, y: 200 },
      data: {
        label: "Big Data Technologies",
        description: "Processing large-scale datasets",
        status: "not-started",
        concepts: [
          "Distributed computing",
          "Hadoop ecosystem",
          "Apache Spark",
          "SQL and NoSQL databases",
          "Data warehousing",
          "Cloud computing (AWS, GCP, Azure)",
        ],
        resources: [
          { title: "Learning Spark by Holden Karau", type: "Book" },
          { title: "Big Data Specialization (Coursera)", type: "Course" },
          { title: "Apache Spark Documentation", type: "Documentation" },
        ],
      },
    },
    {
      id: "mlops",
      type: "roadmapNode",
      position: { x: 1100, y: 400 },
      data: {
        label: "MLOps & Deployment",
        description: "Operationalizing ML models",
        status: "not-started",
        concepts: [
          "Model versioning and tracking",
          "CI/CD for machine learning",
          "Model serving and APIs",
          "Monitoring and maintenance",
          "Docker and containerization",
          "Kubernetes for orchestration",
        ],
        resources: [
          { title: "Building Machine Learning Pipelines by Hannes Hapke", type: "Book" },
          { title: "MLOps Specialization (Coursera)", type: "Course" },
          { title: "MLflow Documentation", type: "Documentation" },
        ],
      },
    },
  ]

  const dataScienceEdges = [
    {
      id: "python-to-statistics",
      source: "python",
      target: "statistics",
      type: "smoothstep",
      animated: true,
      style: { stroke: "#6366f1" },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: "#6366f1",
      },
    },
    {
      id: "statistics-to-data-analysis",
      source: "statistics",
      target: "data-analysis",
      type: "smoothstep",
      style: { stroke: "#6366f1" },
    },
    {
      id: "statistics-to-machine-learning",
      source: "statistics",
      target: "machine-learning",
      type: "smoothstep",
      style: { stroke: "#6366f1" },
    },
    {
      id: "data-analysis-to-machine-learning",
      source: "data-analysis",
      target: "machine-learning",
      type: "smoothstep",
      style: { stroke: "#6366f1" },
    },
    {
      id: "machine-learning-to-deep-learning",
      source: "machine-learning",
      target: "deep-learning",
      type: "smoothstep",
      style: { stroke: "#6366f1" },
    },
    {
      id: "deep-learning-to-big-data",
      source: "deep-learning",
      target: "big-data",
      type: "smoothstep",
      style: { stroke: "#6366f1" },
    },
    {
      id: "deep-learning-to-mlops",
      source: "deep-learning",
      target: "mlops",
      type: "smoothstep",
      style: { stroke: "#6366f1" },
    },
  ]

  // Full Stack Developer Roadmap
  const fullStackNodes = [
    {
      id: "html-css-fs",
      type: "roadmapNode",
      position: { x: 100, y: 200 },
      data: {
        label: "HTML & CSS",
        description: "Frontend fundamentals",
        status: "not-started",
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
    },
    {
      id: "javascript-fs",
      type: "roadmapNode",
      position: { x: 100, y: 400 },
      data: {
        label: "JavaScript",
        description: "Frontend programming",
        status: "not-started",
        concepts: [
          "Variables, data types, and operators",
          "Functions and scope",
          "DOM manipulation",
          "Event handling",
          "Asynchronous JavaScript",
          "ES6+ features",
        ],
        resources: [
          { title: "JavaScript.info", type: "Documentation" },
          { title: "Eloquent JavaScript", type: "Book" },
          { title: "JavaScript30 by Wes Bos", type: "Course" },
        ],
      },
    },
    {
      id: "frontend-framework",
      type: "roadmapNode",
      position: { x: 350, y: 200 },
      data: {
        label: "Frontend Framework",
        description: "React, Angular, or Vue",
        status: "not-started",
        concepts: [
          "Components and props",
          "State management",
          "Routing",
          "API integration",
          "Form handling",
          "Performance optimization",
        ],
        resources: [
          { title: "React Documentation", type: "Documentation" },
          { title: "Vue.js Documentation", type: "Documentation" },
          { title: "Angular Documentation", type: "Documentation" },
        ],
      },
    },
    {
      id: "backend-language",
      type: "roadmapNode",
      position: { x: 350, y: 400 },
      data: {
        label: "Backend Language",
        description: "Node.js, Python, etc.",
        status: "not-started",
        concepts: [
          "Server-side programming",
          "Request-response cycle",
          "Middleware",
          "Authentication",
          "Error handling",
          "Performance considerations",
        ],
        resources: [
          { title: "Node.js Documentation", type: "Documentation" },
          { title: "Python Django Documentation", type: "Documentation" },
          { title: "The Odin Project - NodeJS", type: "Course" },
        ],
      },
    },
    {
      id: "databases",
      type: "roadmapNode",
      position: { x: 600, y: 300 },
      data: {
        label: "Databases",
        description: "SQL and NoSQL",
        status: "not-started",
        concepts: [
          "Database design",
          "SQL queries",
          "CRUD operations",
          "Indexing and optimization",
          "MongoDB for NoSQL",
          "PostgreSQL/MySQL for SQL",
        ],
        resources: [
          { title: "SQL Tutorial - W3Schools", type: "Tutorial" },
          { title: "MongoDB University", type: "Course" },
          { title: "Database Design for Mere Mortals", type: "Book" },
        ],
      },
    },
    {
      id: "api-development",
      type: "roadmapNode",
      position: { x: 850, y: 300 },
      data: {
        label: "API Development",
        description: "RESTful and GraphQL",
        status: "not-started",
        concepts: [
          "REST principles",
          "HTTP methods",
          "API authentication",
          "GraphQL schemas",
          "API documentation",
          "Rate limiting and security",
        ],
        resources: [
          { title: "RESTful API Design - Best Practices", type: "Documentation" },
          { title: "GraphQL Documentation", type: "Documentation" },
          { title: "API Design Patterns", type: "Book" },
        ],
      },
    },
    {
      id: "devops",
      type: "roadmapNode",
      position: { x: 1100, y: 200 },
      data: {
        label: "DevOps & Deployment",
        description: "CI/CD, cloud services",
        status: "not-started",
        concepts: [
          "Git workflow",
          "CI/CD pipelines",
          "Docker containers",
          "Cloud platforms (AWS, Azure, GCP)",
          "Monitoring and logging",
          "Infrastructure as code",
        ],
        resources: [
          { title: "GitHub Actions Documentation", type: "Documentation" },
          { title: "Docker Documentation", type: "Documentation" },
          { title: "AWS for Developers", type: "Course" },
        ],
      },
    },
    {
      id: "testing-fs",
      type: "roadmapNode",
      position: { x: 1100, y: 400 },
      data: {
        label: "Testing & Quality",
        description: "Unit, integration, E2E tests",
        status: "not-started",
        concepts: [
          "Unit testing",
          "Integration testing",
          "End-to-end testing",
          "Test-driven development",
          "Mocking and stubbing",
          "Code coverage",
        ],
        resources: [
          { title: "Jest Documentation", type: "Documentation" },
          { title: "Testing JavaScript by Kent C. Dodds", type: "Course" },
          { title: "Cypress Documentation", type: "Documentation" },
        ],
      },
    },
  ]

  const fullStackEdges = [
    {
      id: "html-css-fs-to-frontend-framework",
      source: "html-css-fs",
      target: "frontend-framework",
      type: "smoothstep",
      style: { stroke: "#6366f1" },
    },
    {
      id: "javascript-fs-to-frontend-framework",
      source: "javascript-fs",
      target: "frontend-framework",
      type: "smoothstep",
      style: { stroke: "#6366f1" },
    },
    {
      id: "javascript-fs-to-backend-language",
      source: "javascript-fs",
      target: "backend-language",
      type: "smoothstep",
      style: { stroke: "#6366f1" },
    },
    {
      id: "frontend-framework-to-api-development",
      source: "frontend-framework",
      target: "api-development",
      type: "smoothstep",
      style: { stroke: "#6366f1" },
    },
    {
      id: "backend-language-to-databases",
      source: "backend-language",
      target: "databases",
      type: "smoothstep",
      style: { stroke: "#6366f1" },
    },
    {
      id: "databases-to-api-development",
      source: "databases",
      target: "api-development",
      type: "smoothstep",
      style: { stroke: "#6366f1" },
    },
    {
      id: "api-development-to-devops",
      source: "api-development",
      target: "devops",
      type: "smoothstep",
      style: { stroke: "#6366f1" },
    },
    {
      id: "api-development-to-testing-fs",
      source: "api-development",
      target: "testing-fs",
      type: "smoothstep",
      style: { stroke: "#6366f1" },
    },
  ]

  const handleNodeClick = (node) => {
    setSelectedNode(node)
    setIsDialogOpen(true)
  }

  const generatePersonalizedRoadmap = async () => {
    setIsGeneratingRoadmap(true)

    try {
      // Simulate API call to generate roadmap
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Example of AI-generated roadmap based on user profile
      const userSkills = ["JavaScript", "HTML/CSS", "React basics"]
      const userInterests = ["UI/UX", "Frontend Development"]
      const userGoals = ["Become a Frontend Developer", "Learn React in depth"]

      // Generate personalized nodes and edges
      const personalizedNodes = [
        {
          id: "current-skills",
          type: "roadmapNode",
          position: { x: 100, y: 300 },
          data: {
            label: "Your Current Skills",
            description: "Skills you already have",
            status: "completed",
            concepts: userSkills,
            resources: [],
          },
        },
        {
          id: "react-advanced",
          type: "roadmapNode",
          position: { x: 350, y: 200 },
          data: {
            label: "Advanced React",
            description: "Deepen your React knowledge",
            status: "not-started",
            concepts: [
              "React Hooks in depth",
              "Context API",
              "Performance optimization",
              "Custom hooks",
              "React patterns",
            ],
            resources: [
              { title: "Advanced React Patterns", type: "Course" },
              { title: "React Performance", type: "Documentation" },
            ],
          },
        },
        {
          id: "ui-ux-design",
          type: "roadmapNode",
          position: { x: 350, y: 400 },
          data: {
            label: "UI/UX Principles",
            description: "Design fundamentals for developers",
            status: "not-started",
            concepts: ["Design systems", "User experience principles", "Accessibility", "Color theory", "Typography"],
            resources: [
              { title: "Refactoring UI", type: "Book" },
              { title: "Design for Developers", type: "Course" },
            ],
          },
        },
        {
          id: "state-management",
          type: "roadmapNode",
          position: { x: 600, y: 200 },
          data: {
            label: "State Management",
            description: "Managing complex application state",
            status: "not-started",
            concepts: ["Redux", "Zustand", "Jotai", "React Query", "State machines"],
            resources: [
              { title: "Redux Documentation", type: "Documentation" },
              { title: "State Management in React", type: "Course" },
            ],
          },
        },
        {
          id: "testing",
          type: "roadmapNode",
          position: { x: 600, y: 400 },
          data: {
            label: "Testing React Apps",
            description: "Ensuring code quality",
            status: "not-started",
            concepts: [
              "Jest",
              "React Testing Library",
              "Component testing",
              "Integration testing",
              "Test-driven development",
            ],
            resources: [
              { title: "Testing JavaScript", type: "Course" },
              { title: "React Testing Library Docs", type: "Documentation" },
            ],
          },
        },
        {
          id: "frontend-project",
          type: "roadmapNode",
          position: { x: 850, y: 300 },
          data: {
            label: "Portfolio Project",
            description: "Build a showcase project",
            status: "not-started",
            concepts: ["Project planning", "Architecture design", "Implementation", "Deployment", "Documentation"],
            resources: [
              { title: "Frontend Project Ideas", type: "Resource" },
              { title: "Deploying React Apps", type: "Tutorial" },
            ],
          },
        },
      ]

      const personalizedEdges = [
        {
          id: "current-to-react",
          source: "current-skills",
          target: "react-advanced",
          type: "smoothstep",
          animated: true,
          style: { stroke: "#6366f1" },
          markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 20,
            height: 20,
            color: "#6366f1",
          },
        },
        {
          id: "current-to-ui-ux",
          source: "current-skills",
          target: "ui-ux-design",
          type: "smoothstep",
          animated: true,
          style: { stroke: "#6366f1" },
          markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 20,
            height: 20,
            color: "#6366f1",
          },
        },
        {
          id: "react-to-state",
          source: "react-advanced",
          target: "state-management",
          type: "smoothstep",
          style: { stroke: "#6366f1" },
        },
        {
          id: "react-to-testing",
          source: "react-advanced",
          target: "testing",
          type: "smoothstep",
          style: { stroke: "#6366f1" },
        },
        {
          id: "ui-ux-to-testing",
          source: "ui-ux-design",
          target: "testing",
          type: "smoothstep",
          style: { stroke: "#6366f1" },
        },
        {
          id: "state-to-project",
          source: "state-management",
          target: "frontend-project",
          type: "smoothstep",
          style: { stroke: "#6366f1" },
        },
        {
          id: "testing-to-project",
          source: "testing",
          target: "frontend-project",
          type: "smoothstep",
          style: { stroke: "#6366f1" },
        },
      ]

      setGeneratedRoadmap({
        nodes: personalizedNodes,
        edges: personalizedEdges,
        title: "Your Personalized Frontend Roadmap",
        description: "Based on your skills, interests, and goals",
      })
    } catch (error) {
      console.error("Error generating roadmap:", error)
    } finally {
      setIsGeneratingRoadmap(false)
    }
  }

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Learning Roadmap</h1>
          <p className="text-muted-foreground">Your personalized path to becoming a Frontend Developer</p>
        </div>
        <Button onClick={generatePersonalizedRoadmap} disabled={isGeneratingRoadmap}>
          <Sparkles className="mr-2 h-4 w-4" />
          {isGeneratingRoadmap ? "Generating..." : "Generate AI Roadmap"}
        </Button>
      </div>

      <Tabs defaultValue={activeTab} className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="frontend">Frontend Developer</TabsTrigger>
          <TabsTrigger value="data">Data Scientist</TabsTrigger>
          <TabsTrigger value="fullstack">Full Stack Developer</TabsTrigger>
          {generatedRoadmap && <TabsTrigger value="personalized">Personalized</TabsTrigger>}
        </TabsList>

        <TabsContent value="frontend" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Frontend Developer Roadmap</CardTitle>
              <CardDescription>Interactive visualization of your learning path</CardDescription>
            </CardHeader>
            <CardContent className="p-0 h-[600px]">
              <CareerRoadmap initialNodes={frontendNodes} initialEdges={frontendEdges} onNodeClick={handleNodeClick} />
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Stage Progress</CardTitle>
                <CardDescription>Track your progress through the roadmap</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <RoadmapStage
                    title="Stage 1: Web Fundamentals"
                    description="Master the core technologies of the web"
                    progress={100}
                    status="completed"
                    modules={[
                      { name: "HTML5 Essentials", status: "completed" },
                      { name: "CSS3 & Responsive Design", status: "completed" },
                      { name: "JavaScript Fundamentals", status: "completed" },
                      { name: "Git & GitHub Basics", status: "completed" },
                    ]}
                  />

                  <RoadmapStage
                    title="Stage 2: Frontend Frameworks"
                    description="Learn modern JavaScript frameworks"
                    progress={65}
                    status="in-progress"
                    modules={[
                      { name: "React Fundamentals", status: "completed" },
                      { name: "State Management with Redux", status: "completed" },
                      { name: "React Router & Navigation", status: "in-progress" },
                      { name: "Building a React Portfolio Project", status: "not-started" },
                    ]}
                  />

                  <RoadmapStage
                    title="Stage 3: Advanced Frontend"
                    description="Master advanced concepts and tools"
                    progress={0}
                    status="not-started"
                    modules={[
                      { name: "TypeScript for Frontend", status: "not-started" },
                      { name: "Testing with Jest & React Testing Library", status: "not-started" },
                      { name: "Performance Optimization", status: "not-started" },
                      { name: "Progressive Web Apps (PWAs)", status: "not-started" },
                    ]}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Progress</CardTitle>
                <CardDescription>Frontend Developer Path</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Overall Completion</span>
                      <span className="text-sm text-muted-foreground">41%</span>
                    </div>
                    <Progress value={41} className="h-2" />
                  </div>

                  <div className="pt-4 space-y-2">
                    <h4 className="font-medium">Statistics</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Modules Completed:</span>
                        <span>6/16</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Hours Invested:</span>
                        <span>120</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Projects Built:</span>
                        <span>3</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Days Streak:</span>
                        <span>14</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="data" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Data Scientist Roadmap</CardTitle>
              <CardDescription>Interactive visualization of your learning path</CardDescription>
            </CardHeader>
            <CardContent className="p-0 h-[600px]">
              <CareerRoadmap
                initialNodes={dataScienceNodes}
                initialEdges={dataScienceEdges}
                onNodeClick={handleNodeClick}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fullstack" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Full Stack Developer Roadmap</CardTitle>
              <CardDescription>Interactive visualization of your learning path</CardDescription>
            </CardHeader>
            <CardContent className="p-0 h-[600px]">
              <CareerRoadmap
                initialNodes={fullStackNodes}
                initialEdges={fullStackEdges}
                onNodeClick={handleNodeClick}
              />
            </CardContent>
          </Card>
        </TabsContent>

        {generatedRoadmap && (
          <TabsContent value="personalized" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>{generatedRoadmap.title}</CardTitle>
                <CardDescription>{generatedRoadmap.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-0 h-[600px]">
                <CareerRoadmap
                  initialNodes={generatedRoadmap.nodes}
                  initialEdges={generatedRoadmap.edges}
                  onNodeClick={handleNodeClick}
                />
              </CardContent>
            </Card>

            <Alert className="mt-6">
              <AlertTitle>AI-Generated Roadmap</AlertTitle>
              <AlertDescription>
                This roadmap was generated based on your skills, interests, and career goals. It's personalized to help
                you focus on the most relevant skills for your specific situation.
              </AlertDescription>
            </Alert>
          </TabsContent>
        )}
      </Tabs>

      {selectedNode && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{selectedNode.data?.label}</DialogTitle>
              <DialogDescription>{selectedNode.data?.description}</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              {selectedNode.data?.concepts && (
                <div>
                  <h3 className="font-medium mb-2">Key Concepts</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {selectedNode.data.concepts.map((concept, index) => (
                      <li key={index}>{concept}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedNode.data?.resources && selectedNode.data.resources.length > 0 && (
                <div>
                  <h3 className="font-medium mb-2">Recommended Resources</h3>
                  <div className="space-y-2">
                    {selectedNode.data.resources.map((resource, index) => (
                      <div key={index} className="flex items-center justify-between p-2 border rounded-md">
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-blue-500" />
                          <span className="text-sm font-medium">{resource.title}</span>
                          <Badge variant="outline" className="text-xs">
                            {resource.type}
                          </Badge>
                        </div>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Close
              </Button>
              {selectedNode.data?.status !== "completed" && (
                <Button>Mark as {selectedNode.data?.status === "in-progress" ? "Completed" : "In Progress"}</Button>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

function RoadmapStage({ title, description, progress, status, modules }) {
  const statusColors = {
    completed: "bg-green-100 text-green-800",
    "in-progress": "bg-blue-100 text-blue-800",
    "not-started": "bg-gray-100 text-gray-800",
  }

  const statusLabels = {
    completed: "Completed",
    "in-progress": "In Progress",
    "not-started": "Not Started",
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <Badge className={statusColors[status]}>{statusLabels[status]}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium">Stage Progress</span>
              <span className="text-sm text-muted-foreground">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="space-y-3 pt-2">
            {modules.map((module, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {module.status === "completed" ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : module.status === "in-progress" ? (
                    <Clock className="h-5 w-5 text-blue-500" />
                  ) : (
                    <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
                  )}
                  <span className={module.status === "completed" ? "line-through text-muted-foreground" : ""}>
                    {module.name}
                  </span>
                </div>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0" asChild>
                  <Link href="#">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">Open module</span>
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

