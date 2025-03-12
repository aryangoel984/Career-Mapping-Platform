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
      "Frontend Developer": 50000,
      "Backend Developer": 60000,
      "Full Stack Developer": 100000,
      "Data Scientist": 30000,
      "DevOps Engineer": 88000,
    },
    {
      year: "2021",
      "Frontend Developer": 43000,
      "Backend Developer": 83000,
      "Full Stack Developer": 88000,
      "Data Scientist": 64000,
      "DevOps Engineer": 52000,
    },
    {
      year: "2022",
      "Frontend Developer": 78000,
      "Backend Developer": 86000,
      "Full Stack Developer": 91000,
      "Data Scientist": 98000,
      "DevOps Engineer": 94000,
    },
    {
      year: "2023",
      "Frontend Developer": 54000,
      "Backend Developer": 65000,
      "Full Stack Developer": 24000,
      "Data Scientist": 62000,
      "DevOps Engineer": 87000,
    },
    {
      year: "2024",
      "Frontend Developer": 91000,
      "Backend Developer": 82000,
      "Full Stack Developer": 98000,
      "Data Scientist": 106000,
      "DevOps Engineer": 100000,
    },
  ];
  
  

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

