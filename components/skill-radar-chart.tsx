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
    subject: "JavaScript",
    score: 80,
    fullMark: 100,
  },
  {
    subject: "HTML/CSS",
    score: 90,
    fullMark: 100,
  },
  {
    subject: "React",
    score: 75,
    fullMark: 100,
  },
  {
    subject: "Node.js",
    score: 60,
    fullMark: 100,
  },
  {
    subject: "Databases",
    score: 50,
    fullMark: 100,
  },
  {
    subject: "UI/UX",
    score: 85,
    fullMark: 100,
  },
]

export default function SkillRadarChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12 }} />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar name="Your Skills" dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  )
}

