"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "@/components/ui/chart"

const data = [
  { name: "Frontend Developer", match: 92 },
  { name: "UX/UI Designer", match: 87 },
  { name: "Full Stack Developer", match: 83 },
  { name: "Mobile Developer", match: 76 },
  { name: "Data Scientist", match: 65 },
  { name: "DevOps Engineer", match: 58 },
]

export default function RecommendationMatchChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} layout="vertical" margin={{ top: 20, right: 30, left: 120, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
        <XAxis type="number" domain={[0, 100]} />
        <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={120} />
        <Tooltip formatter={(value) => [`${value}% Match`, "Career Fit"]} labelFormatter={() => ""} />
        <Bar dataKey="match" fill="#8884d8" radius={[0, 4, 4, 0]} barSize={20} />
      </BarChart>
    </ResponsiveContainer>
  )
}

