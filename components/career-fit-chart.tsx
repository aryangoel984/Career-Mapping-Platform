"use client"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "@/components/ui/chart"

const data = [
  { name: "Frontend Dev", score: 92 },
  { name: "UX/UI Design", score: 87 },
  { name: "Full Stack", score: 83 },
  { name: "Mobile Dev", score: 76 },
  { name: "Data Science", score: 65 },
  { name: "DevOps", score: 58 },
]

export default function CareerFitChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} layout="vertical" margin={{ top: 20, right: 30, left: 70, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
        <XAxis type="number" domain={[0, 100]} />
        <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={70} />
        <Tooltip formatter={(value) => [`${value}% Match`, "Career Fit"]} labelFormatter={() => ""} />
        <Bar dataKey="score" fill="#8884d8" radius={[0, 4, 4, 0]} barSize={20} />
      </BarChart>
    </ResponsiveContainer>
  )
}

