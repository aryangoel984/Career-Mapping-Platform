"use client"

import type React from "react"

import { useCallback, useRef } from "react"
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Panel,
  type NodeTypes,
  Handle,
  Position,
  type NodeProps,
} from "reactflow"
import "reactflow/dist/style.css"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

// Custom node component for roadmap items
function RoadmapNode({ data, isConnectable }: NodeProps) {
  return (
    <div
      className={`px-4 py-2 rounded-lg shadow-md border-2 transition-all hover:shadow-lg ${
        data.status === "completed"
          ? "bg-green-50 border-green-500"
          : data.status === "in-progress"
            ? "bg-blue-50 border-blue-500"
            : "bg-white border-gray-300"
      }`}
    >
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} className="!bg-gray-400 !w-3 !h-3" />
      <div className="text-center">
        <h3 className="font-medium text-sm">{data.label}</h3>
        <p className="text-xs text-muted-foreground mt-1">{data.description}</p>
        {data.status === "completed" && <Badge className="mt-2 bg-green-500 text-white">Completed</Badge>}
        {data.status === "in-progress" && <Badge className="mt-2 bg-blue-500 text-white">In Progress</Badge>}
      </div>
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        className="!bg-gray-400 !w-3 !h-3"
      />
    </div>
  )
}

// Custom node component for main question nodes
function QuestionNode({ data, isConnectable }: NodeProps) {
  return (
    <div className="px-4 py-2 rounded-lg shadow-md border-2 border-blue-500 bg-blue-50 transition-all hover:shadow-lg max-w-[200px]">
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} className="!bg-blue-500 !w-3 !h-3" />
      <div className="text-center">
        <h3 className="font-medium text-sm">{data.label}</h3>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        className="!bg-blue-500 !w-3 !h-3"
      />
    </div>
  )
}

// Define custom node types
const nodeTypes: NodeTypes = {
  roadmapNode: RoadmapNode,
  questionNode: QuestionNode,
}

interface CareerRoadmapProps {
  initialNodes: any[]
  initialEdges: any[]
  onNodeClick: (node: any) => void
}

export default function CareerRoadmap({ initialNodes, initialEdges, onNodeClick }: CareerRoadmapProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const reactFlowWrapper = useRef<HTMLDivElement>(null)

  const onConnect = useCallback(
    (params: any) => {
      setEdges((eds) => addEdge(params, eds))
    },
    [setEdges],
  )

  const handleNodeClick = (event: React.MouseEvent, node: any) => {
    onNodeClick(node)
  }

  return (
    <div className="w-full h-full" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={handleNodeClick}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-right"
      >
        <Controls />
        <MiniMap />
        <Background color="#f8f9fa" gap={16} />
        <Panel position="top-right">
          <Card className="p-2 text-xs">
            <p>Drag to pan, scroll to zoom</p>
            <p>Click on nodes for details</p>
          </Card>
        </Panel>
      </ReactFlow>
    </div>
  )
}

