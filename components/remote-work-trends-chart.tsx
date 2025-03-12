"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "@/components/ui/chart"

const data = [
  {
    name: "Frontend",
    "2020": 25,
    "2022": 45,
    "2024": 65,
  },
  {
    name: "Backend",
    "2020": 30,
    "2022": 50,
    "2024": 70,
  },
  {
    name: "Full Stack",
    "2020": 28,
    "2022": 48,
    "2024": 68,
  },
  {
    name: "Data Science",
    "2020": 20,
    "2022": 40,
    "2024": 60,
  },
  {
    name: "DevOps",
    "2020": 35,
    "2022": 55,
    "2024": 75,
  },
  {
    name: "UI/UX",
    "2020": 22,
    "2022": 42,
    "2024": 62,
  },
]

export default function RemoteWorkTrendsChart() {
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
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 100]} />
        <Tooltip formatter={(value) => [`${value}%`, "Remote Jobs"]} />
        <Legend />
        <Bar dataKey="2020" fill="#8884d8" />
        <Bar dataKey="2022" fill="#82ca9d" />
        <Bar dataKey="2024" fill="#ffc658" />
      </BarChart>
    </ResponsiveContainer>
  )
}

