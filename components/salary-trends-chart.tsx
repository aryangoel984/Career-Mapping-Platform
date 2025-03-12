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
    "Frontend Developer": 75000,
    "Backend Developer": 80000,
    "Full Stack Developer": 85000,
    "Data Scientist": 90000,
    "DevOps Engineer": 88000,
  },
  {
    year: "2021",
    "Frontend Developer": 82000,
    "Backend Developer": 87000,
    "Full Stack Developer": 93000,
    "Data Scientist": 100000,
    "DevOps Engineer": 97000,
  },
  {
    year: "2022",
    "Frontend Developer": 90000,
    "Backend Developer": 95000,
    "Full Stack Developer": 102000,
    "Data Scientist": 112000,
    "DevOps Engineer": 108000,
  },
  {
    year: "2023",
    "Frontend Developer": 98000,
    "Backend Developer": 105000,
    "Full Stack Developer": 112000,
    "Data Scientist": 125000,
    "DevOps Engineer": 120000,
  },
  {
    year: "2024",
    "Frontend Developer": 105000,
    "Backend Developer": 115000,
    "Full Stack Developer": 125000,
    "Data Scientist": 140000,
    "DevOps Engineer": 135000,
  },
]

export default function SalaryTrendsChart() {
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
        <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, "Average Salary"]} />
        <Legend />
        <Line type="monotone" dataKey="Frontend Developer" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Backend Developer" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Full Stack Developer" stroke="#ffc658" />
        <Line type="monotone" dataKey="Data Scientist" stroke="#ff8042" />
        <Line type="monotone" dataKey="DevOps Engineer" stroke="#0088fe" />
      </LineChart>
    </ResponsiveContainer>
  )
}

