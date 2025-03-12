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
    Frontend: 100,
    Backend: 100,
    "Full Stack": 100,
    "Data Science": 100,
    DevOps: 100,
    Mobile: 100,
  },
  {
    year: "2025",
    Frontend: 110,
    Backend: 108,
    "Full Stack": 115,
    "Data Science": 120,
    DevOps: 118,
    Mobile: 112,
  },
  {
    year: "2026",
    Frontend: 120,
    Backend: 116,
    "Full Stack": 132,
    "Data Science": 145,
    DevOps: 138,
    Mobile: 125,
  },
  {
    year: "2027",
    Frontend: 132,
    Backend: 125,
    "Full Stack": 150,
    "Data Science": 175,
    DevOps: 160,
    Mobile: 140,
  },
  {
    year: "2028",
    Frontend: 145,
    Backend: 135,
    "Full Stack": 170,
    "Data Science": 210,
    DevOps: 185,
    Mobile: 155,
  },
]

export default function CareerGrowthProjection() {
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
        <YAxis domain={[0, 220]} />
        <Tooltip formatter={(value) => [`${value}%`, "Growth Index"]} />
        <Legend />
        <Line type="monotone" dataKey="Frontend" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Backend" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Full Stack" stroke="#ffc658" />
        <Line type="monotone" dataKey="Data Science" stroke="#ff8042" />
        <Line type="monotone" dataKey="DevOps" stroke="#0088fe" />
        <Line type="monotone" dataKey="Mobile" stroke="#00C49F" />
      </LineChart>
    </ResponsiveContainer>
  )
}

