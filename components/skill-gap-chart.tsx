"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "@/components/ui/chart"

const data = [
  {
    name: "JavaScript",
    "Your Skill": 80,
    Required: 90,
  },
  {
    name: "HTML/CSS",
    "Your Skill": 90,
    Required: 85,
  },
  {
    name: "React",
    "Your Skill": 75,
    Required: 90,
  },
  {
    name: "Node.js",
    "Your Skill": 60,
    Required: 70,
  },
  {
    name: "Databases",
    "Your Skill": 50,
    Required: 75,
  },
  {
    name: "UI/UX",
    "Your Skill": 85,
    Required: 80,
  },
]

export default function SkillGapChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        layout="vertical"
      >
        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
        <XAxis type="number" domain={[0, 100]} />
        <YAxis dataKey="name" type="category" width={100} />
        <Tooltip formatter={(value) => [`${value}/100`, "Skill Level"]} />
        <Legend />
        <Bar dataKey="Your Skill" fill="#8884d8" />
        <Bar dataKey="Required" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  )
}

