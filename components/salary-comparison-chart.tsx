"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "@/components/ui/chart"

const data = [
  {
    name: "Entry Level",
    "Frontend Developer": 70000,
    "Data Scientist": 85000,
  },
  {
    name: "Mid Level",
    "Frontend Developer": 100000,
    "Data Scientist": 120000,
  },
  {
    name: "Senior Level",
    "Frontend Developer": 140000,
    "Data Scientist": 160000,
  },
  {
    name: "Lead/Manager",
    "Frontend Developer": 170000,
    "Data Scientist": 190000,
  },
]

export default function SalaryComparisonChart() {
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
        <YAxis />
        <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, "Annual Salary"]} />
        <Legend />
        <Bar dataKey="Frontend Developer" fill="#8884d8" />
        <Bar dataKey="Data Scientist" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  )
}

