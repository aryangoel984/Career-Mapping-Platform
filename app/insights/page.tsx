import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download } from "lucide-react"
import JobMarketTrends from "@/components/job-market-trends"
import SalaryTrendsChart from "@/components/salary-trends-chart"
import TechStackPopularityChart from "@/components/tech-stack-popularity-chart"
import RemoteWorkTrendsChart from "@/components/remote-work-trends-chart"

export default function InsightsPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Career Insights & Trends</h1>
        <p className="text-muted-foreground">Data-driven insights to help you make informed career decisions</p>
      </div>

      <Tabs defaultValue="market" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="market">Job Market</TabsTrigger>
          <TabsTrigger value="salary">Salary Trends</TabsTrigger>
          <TabsTrigger value="technologies">Technologies</TabsTrigger>
          <TabsTrigger value="remote">Remote Work</TabsTrigger>
        </TabsList>

        <TabsContent value="market" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Job Market Trends</CardTitle>
              <CardDescription>Demand for different tech roles over time (2020-2024)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <JobMarketTrends />
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <MarketInsightCard
              title="Fastest Growing Roles"
              insights={[
                "Data Scientists (+35%)",
                "DevOps Engineers (+28%)",
                "Full Stack Developers (+22%)",
                "AI/ML Engineers (+40%)",
                "Cloud Architects (+30%)",
              ]}
            />

            <MarketInsightCard
              title="Most In-Demand Skills"
              insights={[
                "Cloud Computing (AWS, Azure)",
                "AI/Machine Learning",
                "React & Modern JavaScript",
                "DevOps & CI/CD",
                "Data Analysis & Visualization",
              ]}
            />

            <MarketInsightCard
              title="Industry Growth Sectors"
              insights={[
                "Healthcare Tech (+32%)",
                "FinTech (+28%)",
                "E-commerce (+25%)",
                "EdTech (+30%)",
                "Cybersecurity (+35%)",
              ]}
            />
          </div>
        </TabsContent>

        <TabsContent value="salary" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Salary Trends by Role</CardTitle>
              <CardDescription>Average salary progression over the past 5 years</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <SalaryTrendsChart />
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Salary Factors</CardTitle>
                <CardDescription>Key factors affecting tech salaries</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Location</h3>
                    <p className="text-sm text-muted-foreground">
                      Tech hubs like San Francisco, New York, and Seattle offer 30-50% higher salaries than other
                      regions, though remote work is narrowing this gap.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Experience Level</h3>
                    <p className="text-sm text-muted-foreground">
                      Senior developers (5+ years) typically earn 70-100% more than entry-level positions, with the
                      steepest growth occurring between 2-5 years.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Company Size</h3>
                    <p className="text-sm text-muted-foreground">
                      Large tech companies often pay 20-30% more than startups, though startups may offer equity
                      compensation that can be valuable long-term.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Specialized Skills</h3>
                    <p className="text-sm text-muted-foreground">
                      Specialized skills in AI, cybersecurity, and cloud architecture can command 15-25% salary premiums
                      over general development roles.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Negotiation Tips</CardTitle>
                <CardDescription>How to maximize your compensation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Research Market Rates</h3>
                    <p className="text-sm text-muted-foreground">
                      Use platforms like Glassdoor, Levels.fyi, and Blind to research salary ranges for your specific
                      role, location, and experience level.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Highlight Specialized Skills</h3>
                    <p className="text-sm text-muted-foreground">
                      Emphasize in-demand skills and quantifiable achievements that demonstrate your value beyond the
                      basic job requirements.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Consider Total Compensation</h3>
                    <p className="text-sm text-muted-foreground">
                      Evaluate the full package including base salary, bonuses, equity, benefits, and work-life balance
                      factors.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Practice Your Pitch</h3>
                    <p className="text-sm text-muted-foreground">
                      Prepare specific examples of your impact and practice articulating your value proposition
                      confidently.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="technologies" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Technology Stack Popularity</CardTitle>
              <CardDescription>Most popular technologies in job postings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <TechStackPopularityChart />
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Rising Technologies</CardTitle>
                <CardDescription>Technologies with growing demand</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <TechTrendItem name="WebAssembly" growth="+120%" />
                  <TechTrendItem name="Rust" growth="+85%" />
                  <TechTrendItem name="GraphQL" growth="+65%" />
                  <TechTrendItem name="Kubernetes" growth="+60%" />
                  <TechTrendItem name="Next.js" growth="+55%" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Stable Technologies</CardTitle>
                <CardDescription>Consistently in-demand technologies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <TechTrendItem name="JavaScript" growth="+10%" />
                  <TechTrendItem name="Python" growth="+15%" />
                  <TechTrendItem name="React" growth="+12%" />
                  <TechTrendItem name="AWS" growth="+18%" />
                  <TechTrendItem name="SQL" growth="+5%" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Declining Technologies</CardTitle>
                <CardDescription>Technologies with decreasing demand</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <TechTrendItem name="jQuery" growth="-30%" />
                  <TechTrendItem name="PHP" growth="-15%" />
                  <TechTrendItem name="Angular.js" growth="-25%" />
                  <TechTrendItem name="CoffeeScript" growth="-40%" />
                  <TechTrendItem name="Flash" growth="-95%" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="remote" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Remote Work Trends</CardTitle>
              <CardDescription>Percentage of remote job postings by role</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <RemoteWorkTrendsChart />
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Remote Work Benefits</CardTitle>
                <CardDescription>Advantages of remote work arrangements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Badge className="mt-0.5">Flexibility</Badge>
                    <p className="text-sm text-muted-foreground">
                      Control over work hours and environment, leading to better work-life balance
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge className="mt-0.5">No Commute</Badge>
                    <p className="text-sm text-muted-foreground">
                      Save time and reduce stress by eliminating daily commutes
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge className="mt-0.5">Global Opportunities</Badge>
                    <p className="text-sm text-muted-foreground">
                      Access to jobs worldwide, not limited by geographic location
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge className="mt-0.5">Cost Savings</Badge>
                    <p className="text-sm text-muted-foreground">
                      Reduced expenses on commuting, work attire, and meals
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge className="mt-0.5">Productivity</Badge>
                    <p className="text-sm text-muted-foreground">
                      Many report higher productivity with fewer office distractions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Remote Work Challenges</CardTitle>
                <CardDescription>Potential drawbacks to consider</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5">
                      Isolation
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      Reduced social interaction and potential feelings of loneliness
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5">
                      Communication
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      More effort required for clear communication and collaboration
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5">
                      Work-Life Boundaries
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      Difficulty separating work and personal life when working from home
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5">
                      Career Visibility
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      Potential challenges in getting recognition and advancement
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5">
                      Self-Discipline
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      Requires strong self-management and focus without supervision
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Industry Reports</CardTitle>
          <CardDescription>Download comprehensive reports for deeper insights</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ReportCard
              title="2024 Tech Salary Guide"
              description="Comprehensive salary data across roles, experience levels, and locations"
              date="January 2024"
            />

            <ReportCard
              title="Emerging Tech Trends"
              description="Analysis of emerging technologies and their impact on the job market"
              date="March 2024"
            />

            <ReportCard
              title="Future of Work Report"
              description="Insights on remote work, hybrid models, and workplace evolution"
              date="February 2024"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function MarketInsightCard({ title, insights }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {insights.map((insight, index) => (
            <li key={index} className="flex items-center gap-2">
              <Badge variant="outline" className="h-5 w-5 rounded-full p-0 flex items-center justify-center">
                {index + 1}
              </Badge>
              <span className="text-sm">{insight}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function TechTrendItem({ name, growth }) {
  const isPositive = growth.startsWith("+")

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium">{name}</span>
      <Badge variant={isPositive ? "default" : "destructive"} className="ml-auto">
        {growth}
      </Badge>
    </div>
  )
}

function ReportCard({ title, description, date }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <Button className="w-full">
          <Download className="mr-2 h-4 w-4" />
          Download Report
        </Button>
      </CardContent>
    </Card>
  )
}

