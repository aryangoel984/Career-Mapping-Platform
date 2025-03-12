import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Briefcase, Code, GraduationCap, LineChart, Video } from "lucide-react"
import Link from "next/link"
import RecommendationMatchChart from "@/components/recommendation-match-chart"

export default function RecommendationsPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Personalized Recommendations</h1>
        <p className="text-muted-foreground">AI-powered suggestions based on your profile and goals</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Recommended Career Paths</CardTitle>
            <CardDescription>Based on your skills, interests, and market trends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <RecommendationMatchChart />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Why These Recommendations?</CardTitle>
            <CardDescription>Factors influencing your personalized suggestions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Your Strengths</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>JavaScript</Badge>
                  <Badge>HTML/CSS</Badge>
                  <Badge>UI/UX</Badge>
                  <Badge>React</Badge>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Your Interests</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Visual Design</Badge>
                  <Badge variant="outline">User Experience</Badge>
                  <Badge variant="outline">Web Applications</Badge>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Market Demand</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Frontend Development</Badge>
                  <Badge variant="secondary">UX/UI Design</Badge>
                  <Badge variant="secondary">Full Stack Development</Badge>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Learning Style</h3>
                <p className="text-sm text-muted-foreground">
                  Visual learner with preference for project-based learning and interactive tutorials
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recommended Learning Resources</CardTitle>
            <CardDescription>Curated resources to help you advance your skills</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <LearningResource
                icon={<BookOpen className="h-5 w-5 text-blue-500" />}
                title="Advanced React Patterns"
                type="Course"
                platform="Frontend Masters"
                match="95% Match"
                link="#"
              />

              <LearningResource
                icon={<Video className="h-5 w-5 text-red-500" />}
                title="UI/UX Design Fundamentals"
                type="Video Series"
                platform="Udemy"
                match="92% Match"
                link="#"
              />

              <LearningResource
                icon={<Code className="h-5 w-5 text-green-500" />}
                title="Building a Full Stack App with Next.js"
                type="Tutorial"
                platform="WsCube Tech"
                match="88% Match"
                link="#"
              />

              <LearningResource
                icon={<GraduationCap className="h-5 w-5 text-purple-500" />}
                title="Frontend Developer Bootcamp"
                type="Bootcamp"
                platform="WsCube Academy"
                match="90% Match"
                link="#"
              />

              <Button asChild className="w-full mt-2">
                <Link href="/roadmap">
                  View Complete Learning Roadmap
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Career Opportunities</CardTitle>
            <CardDescription>Recommended job roles based on your profile</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <JobOpportunity
                title="Frontend Developer"
                company="TechCorp Inc."
                location="Remote"
                match="95% Match"
                skills={["React", "JavaScript", "CSS", "Responsive Design"]}
              />

              <JobOpportunity
                title="UI/UX Designer"
                company="DesignHub"
                location="New York, NY"
                match="90% Match"
                skills={["Figma", "UI Design", "User Research", "Prototyping"]}
              />

              <JobOpportunity
                title="Full Stack Developer"
                company="WebSolutions"
                location="Remote"
                match="85% Match"
                skills={["React", "Node.js", "MongoDB", "Express"]}
              />

              <Button asChild className="w-full mt-2">
                <Link href="#">
                  Explore More Opportunities
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Next Steps</CardTitle>
          <CardDescription>Recommended actions to advance your career journey</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <NextStepCard
              icon={<Video className="h-8 w-8 text-purple-500" />}
              title="Schedule AI Consultation"
              description="Get personalized guidance from our AI career advisor"
              buttonText="Book Consultation"
              link="/consultation"
            />

            <NextStepCard
              icon={<LineChart className="h-8 w-8 text-blue-500" />}
              title="Complete Skill Assessment"
              description="Identify your strengths and areas for improvement"
              buttonText="Start Assessment"
              link="/skills"
            />

            <NextStepCard
              icon={<Briefcase className="h-8 w-8 text-green-500" />}
              title="Build Portfolio Project"
              description="Create a project to showcase your frontend skills"
              buttonText="Get Project Ideas"
              link="#"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function LearningResource({ icon, title, type, platform, match, link }) {
  return (
    <div className="flex items-start gap-4 p-4 border rounded-lg">
      <div className="mt-1">{icon}</div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h4 className="font-medium">{title}</h4>
          <Badge>{match}</Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          {type} • {platform}
        </p>
      </div>
      <Button asChild variant="ghost" size="sm">
        <Link href={link}>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  )
}

function JobOpportunity({ title, company, location, match, skills }) {
  return (
    <div className="p-4 border rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium">{title}</h4>
        <Badge>{match}</Badge>
      </div>
      <p className="text-sm text-muted-foreground mb-2">
        {company} • {location}
      </p>
      <div className="flex flex-wrap gap-1 mt-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="outline" className="text-xs">
            {skill}
          </Badge>
        ))}
      </div>
      <Button variant="outline" size="sm" className="w-full mt-3">
        View Details
      </Button>
    </div>
  )
}

function NextStepCard({ icon, title, description, buttonText, link }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">{icon}</div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <Button asChild className="w-full">
          <Link href={link}>{buttonText}</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

