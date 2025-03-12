import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"
import SkillRadarChart from "@/components/skill-radar-chart"
import SkillGapChart from "@/components/skill-gap-chart"

export default function SkillsPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Skill Assessment</h1>
        <p className="text-muted-foreground">Analyze your current skills and identify gaps for your career goals</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Your Current Skills</CardTitle>
            <CardDescription>Based on your self-assessment and completed courses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <SkillRadarChart />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skill Summary</CardTitle>
            <CardDescription>Frontend Developer Path</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">JavaScript</span>
                  <span className="text-sm text-muted-foreground">80%</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">HTML/CSS</span>
                  <span className="text-sm text-muted-foreground">90%</span>
                </div>
                <Progress value={90} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">React</span>
                  <span className="text-sm text-muted-foreground">75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Node.js</span>
                  <span className="text-sm text-muted-foreground">60%</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Databases</span>
                  <span className="text-sm text-muted-foreground">50%</span>
                </div>
                <Progress value={50} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">UI/UX</span>
                  <span className="text-sm text-muted-foreground">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="frontend" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="frontend">Frontend Developer</TabsTrigger>
          <TabsTrigger value="data">Data Scientist</TabsTrigger>
          <TabsTrigger value="fullstack">Full Stack Developer</TabsTrigger>
        </TabsList>

        <TabsContent value="frontend" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Skill Gap Analysis</CardTitle>
              <CardDescription>Your skills compared to industry requirements for Frontend Developers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <SkillGapChart />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="data" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Data Scientist Skill Gap</CardTitle>
              <CardDescription>Switch to this path to view your skill gap analysis</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center py-8">
              <Button asChild>
                <Link href="/consultation">Get Data Science Skill Analysis</Link>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fullstack" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Full Stack Developer Skill Gap</CardTitle>
              <CardDescription>Switch to this path to view your skill gap analysis</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center py-8">
              <Button asChild>
                <Link href="/consultation">Get Full Stack Skill Analysis</Link>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recommended Courses</CardTitle>
            <CardDescription>Based on your skill gaps for Frontend Development</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <CourseRecommendation
                title="Advanced React Patterns"
                description="Master advanced React concepts and patterns"
                skillGap="React"
                level="Intermediate"
                duration="4 weeks"
              />

              <CourseRecommendation
                title="Modern JavaScript ES6+"
                description="Stay up-to-date with the latest JavaScript features"
                skillGap="JavaScript"
                level="Intermediate"
                duration="3 weeks"
              />

              <CourseRecommendation
                title="Node.js Fundamentals"
                description="Build backend services with Node.js"
                skillGap="Node.js"
                level="Beginner"
                duration="6 weeks"
              />

              <CourseRecommendation
                title="SQL & NoSQL Databases"
                description="Learn database fundamentals for web developers"
                skillGap="Databases"
                level="Beginner"
                duration="5 weeks"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skill Development Plan</CardTitle>
            <CardDescription>Personalized plan to close your skill gaps</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Short-term Goals (1-3 months)</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Complete Advanced React Patterns course</li>
                  <li>Build a React project using context API and hooks</li>
                  <li>Practice JavaScript ES6+ features daily</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">Mid-term Goals (3-6 months)</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Learn Node.js fundamentals</li>
                  <li>Build a full-stack application with React and Node.js</li>
                  <li>Study database design principles</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">Long-term Goals (6-12 months)</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Master state management with Redux</li>
                  <li>Learn TypeScript for frontend development</li>
                  <li>Build a comprehensive portfolio of projects</li>
                </ul>
              </div>

              <Button asChild className="w-full">
                <Link href="/roadmap">
                  View Detailed Learning Roadmap
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function CourseRecommendation({ title, description, skillGap, level, duration }) {
  return (
    <div className="flex items-start gap-4 p-4 border rounded-lg">
      <div className="mt-1">
        <BookOpen className="h-5 w-5 text-blue-500" />
      </div>
      <div className="flex-1">
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          <Badge variant="outline">{skillGap}</Badge>
          <Badge variant="outline">{level}</Badge>
          <Badge variant="outline">{duration}</Badge>
        </div>
      </div>
      <Button asChild variant="ghost" size="sm">
        <Link href="#">
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  )
}

