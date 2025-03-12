"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "@/components/ui/chart"

const data = [
  {
    name: "Programming",
    "Frontend Developer": 90,
    "Data Scientist": 85,
  },
  {
    name: "Mathematics",
    "Frontend Developer": 60,
    "Data Scientist": 95,
  },
  {
    name: "Design",
    "Frontend Developer": 85,
    "Data Scientist": 50,
  },
  {
    name: "Databases",
    "Frontend Developer": 70,
    "Data Scientist": 80,
  },
  {
    name: "Problem Solving",
    "Frontend Developer": 85,
    "Data Scientist": 90,
  },
  {
    name: "Communication",
    "Frontend Developer": 80,
    "Data Scientist": 75,
  },
]

export default function SkillComparisonChart() {
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
        <Bar dataKey="Frontend Developer" fill="#8884d8" />
        <Bar dataKey="Data Scientist" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  )
}

