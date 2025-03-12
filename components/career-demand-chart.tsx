"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "@/components/ui/chart"

const data = [
  {
    name: "Frontend",
    demand: 85,
  },
  {
    name: "Backend",
    demand: 80,
  },
  {
    name: "Full Stack",
    demand: 90,
  },
  {
    name: "Data Science",
    demand: 95,
  },
  {
    name: "DevOps",
    demand: 88,
  },
  {
    name: "Mobile",
    demand: 82,
  },
  {
    name: "UI/UX",
    demand: 78,
  },
]

export default function CareerDemandChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 100]} />
        <Tooltip formatter={(value) => [`${value}/100`, "Demand Index"]} />
        <Legend />
        <Bar dataKey="demand" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  )
}

