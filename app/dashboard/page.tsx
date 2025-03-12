import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Award, BookOpen, BrainCircuit, Briefcase, LineChart, Video } from "lucide-react"
import Link from "next/link"
import CareerFitChart from "@/components/career-fit-chart"
import SkillRadarChart from "@/components/skill-radar-chart"
import JobMarketTrends from "@/components/job-market-trends"

export default function Dashboard() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Career Dashboard</h1>
          <p className="text-muted-foreground">Track your progress and explore career options</p>
        </div>
        <Button asChild>
          <Link href="/consultation">
            <Video className="mr-2 h-4 w-4" />
            Start AI Consultation
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Career Fit Score</CardTitle>
            <CardDescription>Based on your skills and interests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <CareerFitChart />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Skill Assessment</CardTitle>
            <CardDescription>Your current skill levels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <SkillRadarChart />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Job Market Trends</CardTitle>
            <CardDescription>Demand for different tech roles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <JobMarketTrends />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="roadmap" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="roadmap">Learning Roadmap</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>
        <TabsContent value="roadmap" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Learning Roadmap</CardTitle>
              <CardDescription>Personalized path to your career goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <RoadmapItem title="Foundations of Software Development" progress={100} status="completed" />
                <RoadmapItem title="Advanced JavaScript & Frameworks" progress={65} status="in-progress" />
                <RoadmapItem title="Backend Development & APIs" progress={20} status="in-progress" />
                <RoadmapItem title="Database Design & Management" progress={0} status="upcoming" />
                <RoadmapItem title="DevOps & Deployment" progress={0} status="upcoming" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="achievements" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Achievements</CardTitle>
              <CardDescription>Badges and milestones you've earned</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <AchievementBadge
                  title="Getting Started"
                  icon={<Award className="h-8 w-8 text-yellow-500" />}
                  description="Completed your profile and initial assessment"
                />
                <AchievementBadge
                  title="Code Explorer"
                  icon={<Award className="h-8 w-8 text-blue-500" />}
                  description="Completed 5 coding challenges"
                />
                <AchievementBadge
                  title="Learning Enthusiast"
                  icon={<Award className="h-8 w-8 text-green-500" />}
                  description="Completed first learning module"
                />
                <AchievementBadge
                  title="Career Researcher"
                  icon={<Award className="h-8 w-8 text-purple-500" />}
                  description="Explored all career paths"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="recommendations" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Personalized Recommendations</CardTitle>
              <CardDescription>Based on your profile and progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <RecommendationItem
                  icon={<BookOpen className="h-5 w-5 text-blue-500" />}
                  title="Advanced React Patterns Course"
                  description="Enhance your frontend skills with this recommended course"
                  link="/courses/advanced-react"
                />
                <RecommendationItem
                  icon={<Briefcase className="h-5 w-5 text-green-500" />}
                  title="Frontend Developer Internship Opportunities"
                  description="5 new internships matching your profile"
                  link="/opportunities"
                />
                <RecommendationItem
                  icon={<BrainCircuit className="h-5 w-5 text-purple-500" />}
                  title="AI Career Consultation"
                  description="Schedule a session to refine your career path"
                  link="/consultation"
                />
                <RecommendationItem
                  icon={<LineChart className="h-5 w-5 text-orange-500" />}
                  title="Skill Gap Analysis"
                  description="Identify areas for improvement in your skillset"
                  link="/skills"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function RoadmapItem({ title, progress, status }) {
  const statusColors = {
    completed: "bg-green-100 text-green-800",
    "in-progress": "bg-blue-100 text-blue-800",
    upcoming: "bg-gray-100 text-gray-800",
  }

  const statusLabels = {
    completed: "Completed",
    "in-progress": "In Progress",
    upcoming: "Upcoming",
  }

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h3 className="font-medium">{title}</h3>
          <Badge className={statusColors[status]}>{statusLabels[status]}</Badge>
        </div>
        <span className="text-sm text-muted-foreground">{progress}%</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  )
}

function AchievementBadge({ title, icon, description }) {
  return (
    <div className="flex flex-col items-center text-center p-4 border rounded-lg">
      <div className="mb-2">{icon}</div>
      <h4 className="font-medium">{title}</h4>
      <p className="text-sm text-muted-foreground mt-1">{description}</p>
    </div>
  )
}

function RecommendationItem({ icon, title, description, link }) {
  return (
    <div className="flex items-start gap-4 p-4 border rounded-lg">
      <div className="mt-1">{icon}</div>
      <div className="flex-1">
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <Button asChild variant="ghost" size="sm">
        <Link href={link}>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  )
}

