import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CareerComparisonChart from "@/components/career-comparison-chart"
import SalaryComparisonChart from "@/components/salary-comparison-chart"
import SkillComparisonChart from "@/components/skill-comparison-chart"
import JobGrowthChart from "@/components/job-growth-chart"

export default function ComparePage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Career Comparison Tool</h1>
        <p className="text-muted-foreground">Compare different tech career paths to find your best fit</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>First Career Path</CardTitle>
            <CardDescription>Select a career to compare</CardDescription>
          </CardHeader>
          <CardContent>
            <Select defaultValue="frontend">
              <SelectTrigger>
                <SelectValue placeholder="Select a career" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="frontend">Frontend Developer</SelectItem>
                <SelectItem value="backend">Backend Developer</SelectItem>
                <SelectItem value="fullstack">Full Stack Developer</SelectItem>
                <SelectItem value="data">Data Scientist</SelectItem>
                <SelectItem value="devops">DevOps Engineer</SelectItem>
                <SelectItem value="mobile">Mobile Developer</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Second Career Path</CardTitle>
            <CardDescription>Select a career to compare</CardDescription>
          </CardHeader>
          <CardContent>
            <Select defaultValue="data">
              <SelectTrigger>
                <SelectValue placeholder="Select a career" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="frontend">Frontend Developer</SelectItem>
                <SelectItem value="backend">Backend Developer</SelectItem>
                <SelectItem value="fullstack">Full Stack Developer</SelectItem>
                <SelectItem value="data">Data Scientist</SelectItem>
                <SelectItem value="devops">DevOps Engineer</SelectItem>
                <SelectItem value="mobile">Mobile Developer</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="salary">Salary</TabsTrigger>
          <TabsTrigger value="growth">Job Growth</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Career Comparison Overview</CardTitle>
              <CardDescription>Comparing Frontend Developer vs Data Scientist</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <CareerComparisonChart />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="skills" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Skills Comparison</CardTitle>
              <CardDescription>Required skills for each career path</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <SkillComparisonChart />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="salary" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Salary Comparison</CardTitle>
              <CardDescription>Salary ranges at different career stages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <SalaryComparisonChart />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="growth" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Job Growth Trends</CardTitle>
              <CardDescription>Projected job growth over the next 5 years</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <JobGrowthChart />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Detailed Comparison</CardTitle>
          <CardDescription>Frontend Developer vs Data Scientist</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Frontend Developer</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Job Description</h4>
                  <p className="text-sm text-muted-foreground">
                    Frontend developers create the user interfaces of websites and applications, focusing on what users
                    see and interact with.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium">Key Skills</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground">
                    <li>HTML, CSS, JavaScript</li>
                    <li>React, Vue, or Angular</li>
                    <li>Responsive Design</li>
                    <li>UI/UX Principles</li>
                    <li>Version Control (Git)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium">Work Environment</h4>
                  <p className="text-sm text-muted-foreground">
                    Typically work in tech companies, agencies, or as freelancers. Can often work remotely.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium">Career Progression</h4>
                  <p className="text-sm text-muted-foreground">
                    Junior Developer → Mid-level Developer → Senior Developer → Lead Developer → Frontend Architect
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Data Scientist</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Job Description</h4>
                  <p className="text-sm text-muted-foreground">
                    Data scientists analyze and interpret complex data to help organizations make better decisions.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium">Key Skills</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground">
                    <li>Python, R</li>
                    <li>Statistics & Mathematics</li>
                    <li>Machine Learning</li>
                    <li>Data Visualization</li>
                    <li>SQL & Database Knowledge</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium">Work Environment</h4>
                  <p className="text-sm text-muted-foreground">
                    Work in various industries including tech, finance, healthcare, and retail. Often in office settings
                    with some remote options.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium">Career Progression</h4>
                  <p className="text-sm text-muted-foreground">
                    Junior Data Scientist → Data Scientist → Senior Data Scientist → Lead Data Scientist → Chief Data
                    Officer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

