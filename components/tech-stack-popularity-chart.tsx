"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "@/components/ui/chart"

const data = [
  {
    name: "JavaScript",
    popularity: 95,
  },
  {
    name: "Python",
    popularity: 90,
  },
  {
    name: "React",
    popularity: 85,
  },
  {
    name: "Node.js",
    popularity: 80,
  },
  {
    name: "TypeScript",
    popularity: 78,
  },
  {
    name: "AWS",
    popularity: 75,
  },
  {
    name: "Docker",
    popularity: 72,
  },
  {
    name: "SQL",
    popularity: 70,
  },
  {
    name: "MongoDB",
    popularity: 65,
  },
  {
    name: "Angular",
    popularity: 60,
  },
]

export default function TechStackPopularityChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        layout="vertical"
        margin={{
          top: 5,
          right: 30,
          left: 70,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
        <XAxis type="number" domain={[0, 100]} />
        <YAxis dataKey="name" type="category" width={70} />
        <Tooltip formatter={(value) => [`${value}/100`, "Popularity Score"]} />
        <Legend />
        <Bar dataKey="popularity" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  )
}

