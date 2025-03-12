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
    year: "2020",
    Frontend: 100,
    Backend: 95,
    "Data Science": 85,
    DevOps: 75,
  },
  {
    year: "2021",
    Frontend: 110,
    Backend: 105,
    "Data Science": 100,
    DevOps: 90,
  },
  {
    year: "2022",
    Frontend: 125,
    Backend: 115,
    "Data Science": 120,
    DevOps: 110,
  },
  {
    year: "2023",
    Frontend: 135,
    Backend: 125,
    "Data Science": 145,
    DevOps: 130,
  },
  {
    year: "2024",
    Frontend: 145,
    Backend: 135,
    "Data Science": 170,
    DevOps: 155,
  },
]

export default function JobMarketTrends() {
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
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Frontend" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Backend" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Data Science" stroke="#ff7300" />
        <Line type="monotone" dataKey="DevOps" stroke="#0088fe" />
      </LineChart>
    </ResponsiveContainer>
  )
}

