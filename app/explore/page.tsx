import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Database, LineChart, Server, Smartphone } from "lucide-react"
import Link from "next/link"
import CareerDemandChart from "@/components/career-demand-chart"
import CareerGrowthProjection from "@/components/career-growth-projection"

export default function ExplorePage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Explore Tech Careers</h1>
        <p className="text-muted-foreground">Discover various tech career paths and find your perfect fit</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Career Demand</CardTitle>
            <CardDescription>Current demand for different tech roles</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <CareerDemandChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Growth Projection</CardTitle>
            <CardDescription>Projected growth over the next 5 years</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <CareerGrowthProjection />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="frontend" className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
          <TabsTrigger value="frontend">Frontend</TabsTrigger>
          <TabsTrigger value="backend">Backend</TabsTrigger>
          <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
          <TabsTrigger value="data">Data Science</TabsTrigger>
          <TabsTrigger value="devops">DevOps</TabsTrigger>
          <TabsTrigger value="mobile">Mobile</TabsTrigger>
        </TabsList>

        <TabsContent value="frontend" className="mt-6">
          <CareerDetail
            title="Frontend Developer"
            icon={<Code className="h-8 w-8 text-purple-500" />}
            description="Frontend developers create the user interfaces of websites and applications, focusing on what users see and interact with."
            skills={["HTML/CSS", "JavaScript", "React/Vue/Angular", "Responsive Design", "UI/UX Principles"]}
            salaryRange="$70,000 - $140,000"
            demandLevel="High"
            growthRate="+15% over 5 years"
            workEnvironment="Tech companies, agencies, startups, freelance"
            careerPath={[
              "Junior Frontend Developer",
              "Mid-level Frontend Developer",
              "Senior Frontend Developer",
              "Lead Frontend Developer",
              "Frontend Architect",
            ]}
          />
        </TabsContent>

        <TabsContent value="backend" className="mt-6">
          <CareerDetail
            title="Backend Developer"
            icon={<Server className="h-8 w-8 text-blue-500" />}
            description="Backend developers build and maintain the server-side of web applications, focusing on databases, server logic, and APIs."
            skills={[
              "Node.js/Python/Java",
              "Databases (SQL/NoSQL)",
              "API Development",
              "Server Management",
              "Security",
            ]}
            salaryRange="$75,000 - $150,000"
            demandLevel="High"
            growthRate="+12% over 5 years"
            workEnvironment="Tech companies, enterprise, startups"
            careerPath={[
              "Junior Backend Developer",
              "Mid-level Backend Developer",
              "Senior Backend Developer",
              "Lead Backend Developer",
              "Backend Architect",
            ]}
          />
        </TabsContent>

        <TabsContent value="fullstack" className="mt-6">
          <CareerDetail
            title="Full Stack Developer"
            icon={<Code className="h-8 w-8 text-green-500" />}
            description="Full stack developers work on both client and server sides, handling everything from user interfaces to databases and servers."
            skills={[
              "Frontend Technologies",
              "Backend Technologies",
              "Databases",
              "DevOps Basics",
              "System Architecture",
            ]}
            salaryRange="$80,000 - $160,000"
            demandLevel="Very High"
            growthRate="+18% over 5 years"
            workEnvironment="Startups, tech companies, agencies"
            careerPath={[
              "Junior Full Stack Developer",
              "Mid-level Full Stack Developer",
              "Senior Full Stack Developer",
              "Lead Full Stack Developer",
              "Technical Director",
            ]}
          />
        </TabsContent>

        <TabsContent value="data" className="mt-6">
          <CareerDetail
            title="Data Scientist"
            icon={<LineChart className="h-8 w-8 text-orange-500" />}
            description="Data scientists analyze and interpret complex data to help organizations make better decisions using statistics, machine learning, and programming."
            skills={[
              "Python/R",
              "Statistics & Mathematics",
              "Machine Learning",
              "Data Visualization",
              "SQL & Database Knowledge",
            ]}
            salaryRange="$85,000 - $170,000"
            demandLevel="Very High"
            growthRate="+25% over 5 years"
            workEnvironment="Tech, finance, healthcare, retail, research"
            careerPath={[
              "Junior Data Scientist",
              "Data Scientist",
              "Senior Data Scientist",
              "Lead Data Scientist",
              "Chief Data Officer",
            ]}
          />
        </TabsContent>

        <TabsContent value="devops" className="mt-6">
          <CareerDetail
            title="DevOps Engineer"
            icon={<Database className="h-8 w-8 text-red-500" />}
            description="DevOps engineers bridge development and operations, automating and optimizing deployment pipelines and infrastructure management."
            skills={[
              "Cloud Platforms (AWS/Azure/GCP)",
              "CI/CD",
              "Infrastructure as Code",
              "Containerization",
              "Monitoring & Logging",
            ]}
            salaryRange="$90,000 - $160,000"
            demandLevel="High"
            growthRate="+20% over 5 years"
            workEnvironment="Tech companies, enterprise, cloud providers"
            careerPath={[
              "Junior DevOps Engineer",
              "DevOps Engineer",
              "Senior DevOps Engineer",
              "DevOps Architect",
              "Cloud Infrastructure Manager",
            ]}
          />
        </TabsContent>

        <TabsContent value="mobile" className="mt-6">
          <CareerDetail
            title="Mobile Developer"
            icon={<Smartphone className="h-8 w-8 text-cyan-500" />}
            description="Mobile developers create applications for mobile devices, focusing on iOS, Android, or cross-platform development."
            skills={[
              "Swift/Kotlin/React Native",
              "Mobile UI/UX",
              "API Integration",
              "Performance Optimization",
              "App Store Deployment",
            ]}
            salaryRange="$75,000 - $145,000"
            demandLevel="High"
            growthRate="+15% over 5 years"
            workEnvironment="Tech companies, app development agencies, startups"
            careerPath={[
              "Junior Mobile Developer",
              "Mobile Developer",
              "Senior Mobile Developer",
              "Lead Mobile Developer",
              "Mobile Architect",
            ]}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function CareerDetail({
  title,
  icon,
  description,
  skills,
  salaryRange,
  demandLevel,
  growthRate,
  workEnvironment,
  careerPath,
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start gap-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">{icon}</div>
        <div className="flex-1">
          <CardTitle>{title}</CardTitle>
          <CardDescription className="mt-1">{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">Key Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-1">Salary Range</h3>
                <p className="text-sm text-muted-foreground">{salaryRange}</p>
              </div>
              <div>
                <h3 className="font-medium mb-1">Demand Level</h3>
                <p className="text-sm text-muted-foreground">{demandLevel}</p>
              </div>
              <div>
                <h3 className="font-medium mb-1">Growth Rate</h3>
                <p className="text-sm text-muted-foreground">{growthRate}</p>
              </div>
              <div>
                <h3 className="font-medium mb-1">Work Environment</h3>
                <p className="text-sm text-muted-foreground">{workEnvironment}</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">Career Progression</h3>
              <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-3 space-y-6">
                {careerPath.map((step, index) => (
                  <li key={index} className="ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-primary/10 rounded-full -left-3">
                      {index + 1}
                    </span>
                    <p className="text-sm">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild variant="outline">
          <Link href={`/compare?career=${title.toLowerCase().replace(" ", "-")}`}>Compare with Other Careers</Link>
        </Button>
        <Button asChild>
          <Link href={`/roadmap?career=${title.toLowerCase().replace(" ", "-")}`}>
            View Learning Roadmap
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

