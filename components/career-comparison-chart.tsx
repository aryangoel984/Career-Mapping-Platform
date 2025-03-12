"use client"

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  ResponsiveContainer,
} from "@/components/ui/chart"

const data = [
  {
    subject: "Salary",
    "Frontend Developer": 80,
    "Data Scientist": 90,
    fullMark: 100,
  },
  {
    subject: "Job Demand",
    "Frontend Developer": 85,
    "Data Scientist": 80,
    fullMark: 100,
  },
  {
    subject: "Work-Life Balance",
    "Frontend Developer": 75,
    "Data Scientist": 70,
    fullMark: 100,
  },
  {
    subject: "Remote Work",
    "Frontend Developer": 90,
    "Data Scientist": 75,
    fullMark: 100,
  },
  {
    subject: "Career Growth",
    "Frontend Developer": 80,
    "Data Scientist": 85,
    fullMark: 100,
  },
  {
    subject: "Entry Barrier",
    "Frontend Developer": 65,
    "Data Scientist": 40,
    fullMark: 100,
  },
]

export default function CareerComparisonChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar
          name="Frontend Developer"
          dataKey="Frontend Developer"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Radar name="Data Scientist" dataKey="Data Scientist" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  )
}

