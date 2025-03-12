"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "@/components/ui/chart"

const data = [
  {
    year: "2024",
    "Frontend Developer": 100,
    "Data Scientist": 100,
  },
  {
    year: "2025",
    "Frontend Developer": 110,
    "Data Scientist": 115,
  },
  {
    year: "2026",
    "Frontend Developer": 120,
    "Data Scientist": 135,
  },
  {
    year: "2027",
    "Frontend Developer": 130,
    "Data Scientist": 160,
  },
  {
    year: "2028",
    "Frontend Developer": 140,
    "Data Scientist": 190,
  },
]

export default function JobGrowthChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis domain={[0, 200]} />
        <Tooltip formatter={(value) => [`${value}%`, "Growth Index"]} />
        <Legend />
        <Line type="monotone" dataKey="Frontend Developer" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Data Scientist" stroke="#82ca9d" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}

