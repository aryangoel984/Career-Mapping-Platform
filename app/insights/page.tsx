"use client"
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
                "AI/ML Engineers (+42.3% YoY)",
                "Cloud Security Specialists (+37.8% YoY)",
                "DevOps/Platform Engineers (+31.5% YoY)",
                "Data Scientists (+29.2% YoY)",
                "Blockchain Developers (+26.7% YoY)",
              ]}
            />

            <MarketInsightCard
              title="Most In-Demand Skills"
              insights={[
                "Generative AI & LLM Engineering",
                "Kubernetes & Container Orchestration",
                "React, Next.js & Modern Frontend",
                "Cloud Architecture (AWS, Azure, GCP)",
                "Data Engineering & Analytics",
              ]}
            />

            <MarketInsightCard
              title="Industry Growth Sectors"
              insights={[
                "Healthcare Tech (+34.7% hiring volume)",
                "Cybersecurity (+33.2% hiring volume)",
                "FinTech (+29.5% hiring volume)",
                "Sustainable Tech (+27.8% hiring volume)",
                "EdTech (+24.3% hiring volume)",
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
                      San Francisco leads with a median of $175,800 for senior roles, followed by New York ($162,400)
                      and Seattle ($158,700). Remote roles average 15-20% lower but are steadily increasing.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Experience Level</h3>
                    <p className="text-sm text-muted-foreground">
                      Entry-level developers average $87,300, mid-level (3-5 years) reach $124,600, and senior (6+
                      years) average $152,800. The most significant jump occurs between 2-4 years of experience.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Company Size</h3>
                    <p className="text-sm text-muted-foreground">
                      FAANG and top-tier tech companies pay 28.5% above market rate, mid-size tech firms average 5-10%
                      above market, while early-stage startups typically offer 10-15% below market with equity
                      compensation.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Specialized Skills</h3>
                    <p className="text-sm text-muted-foreground">
                      AI/ML specialists command a 24.7% premium, cybersecurity experts 21.3%, and cloud architects
                      18.9%. Full-stack developers with specialized framework experience earn 12.5% more than their
                      peers.
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
                      Combine data from Levels.fyi, Glassdoor, and Blind with recent offer data from your network. Aim
                      for the 75th percentile of the salary range for your role and location.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Highlight Specialized Skills</h3>
                    <p className="text-sm text-muted-foreground">
                      Quantify your impact with metrics (e.g., "Reduced API response time by 42%") and emphasize skills
                      that match the company's current technical challenges or roadmap.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Consider Total Compensation</h3>
                    <p className="text-sm text-muted-foreground">
                      Evaluate RSUs, stock options, bonuses, benefits (worth $15K-$30K annually), and work flexibility.
                      Request a compensation breakdown with 4-year projections.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Practice Your Pitch</h3>
                    <p className="text-sm text-muted-foreground">
                      Prepare 3-5 specific examples of your highest-impact work with quantifiable results. Practice with
                      a peer and prepare responses for common objections.
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
                  <TechTrendItem name="AI/ML Frameworks" growth="+143.2%" />
                  <TechTrendItem name="Rust" growth="+89.7%" />
                  <TechTrendItem name="WebAssembly" growth="+76.5%" />
                  <TechTrendItem name="Next.js" growth="+68.3%" />
                  <TechTrendItem name="Kubernetes" growth="+52.9%" />
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
                  <TechTrendItem name="Python" growth="+18.7%" />
                  <TechTrendItem name="React" growth="+15.3%" />
                  <TechTrendItem name="TypeScript" growth="+14.9%" />
                  <TechTrendItem name="AWS" growth="+12.6%" />
                  <TechTrendItem name="Node.js" growth="+8.4%" />
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
                  <TechTrendItem name="jQuery" growth="-37.8%" />
                  <TechTrendItem name="Angular.js (v1)" growth="-32.5%" />
                  <TechTrendItem name="CoffeeScript" growth="-45.2%" />
                  <TechTrendItem name="Backbone.js" growth="-53.7%" />
                  <TechTrendItem name="Flash" growth="-98.3%" />
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
                      87% of developers report improved work-life balance with flexible schedules, saving an average of
                      1.2 hours daily
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge className="mt-0.5">No Commute</Badge>
                    <p className="text-sm text-muted-foreground">
                      Average savings of $4,650 annually on commuting costs and 240 hours of travel time per year
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge className="mt-0.5">Global Opportunities</Badge>
                    <p className="text-sm text-muted-foreground">
                      42% increase in international hiring for remote tech roles since 2021, with 68% higher application
                      rates
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge className="mt-0.5">Cost Savings</Badge>
                    <p className="text-sm text-muted-foreground">
                      Remote workers save $6,000-$12,000 annually on work-related expenses including meals, clothing,
                      and transportation
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge className="mt-0.5">Productivity</Badge>
                    <p className="text-sm text-muted-foreground">
                      71% of developers report higher productivity, with an average 13% increase in output for complex
                      coding tasks
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
                      65% of remote developers report feelings of isolation at least once weekly, with 38% citing it as
                      their biggest challenge
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5">
                      Communication
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      Teams spend 32% more time in coordination activities, with asynchronous communication adding 4-24
                      hours to resolution times
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5">
                      Work-Life Boundaries
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      52% report working longer hours remotely, with an average of 2.5 additional hours per week
                      compared to office-based peers
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5">
                      Career Visibility
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      Remote workers are 38% less likely to receive promotions within the first year compared to
                      in-office counterparts
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-0.5">
                      Self-Discipline
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      47% struggle with maintaining focus at home, with distractions causing an average of 27 minutes of
                      lost productivity daily
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
              description="Comprehensive salary data across roles, experience levels, and locations with 5-year projections"
              date="January 2024"
            />

            <ReportCard
              title="Emerging Tech Trends"
              description="In-depth analysis of emerging technologies and their projected impact on hiring and skill demands"
              date="March 2024"
            />

            <ReportCard
              title="Future of Work Report"
              description="Research-backed insights on remote work, hybrid models, and the evolution of tech workplaces"
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
  const handleDownload = () => {
    // Create the PDF file name based on the title
    const fileName = title.toLowerCase().replace(/\s+/g, "-") + ".pdf"

    // Create a link to the PDF file
    const link = document.createElement("a")
    link.href = `/reports/${fileName}`
    link.setAttribute("download", fileName)

    // Append to the body, click, and remove
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <Button className="w-full" onClick={handleDownload}>
          <Download className="mr-2 h-4 w-4" />
          Download Report
        </Button>
      </CardContent>
    </Card>
  )
}

