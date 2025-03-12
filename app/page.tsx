import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart3, BookOpen, BrainCircuit, Compass, LineChart, Video } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                AI-Powered Career Mapping Tool
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Discover your ideal tech career path with personalized AI guidance and interactive tools
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Link href="/consultation">
                  Start AI Consultation
                  <BrainCircuit className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/explore">
                  Explore Careers
                  <Compass className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Everything you need to make informed career decisions
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <FeatureCard
              icon={<Video className="h-8 w-8 text-purple-500" />}
              title="Live AI Video Consultations"
              description="Engage with our AI mentor through interactive video sessions for personalized career guidance."
              link="/consultation"
            />
            <FeatureCard
              icon={<BarChart3 className="h-8 w-8 text-purple-500" />}
              title="Career Insights & Trends"
              description="Access real-time job market data, salary insights, and growth potential for various tech careers."
              link="/insights"
            />
            <FeatureCard
              icon={<BookOpen className="h-8 w-8 text-purple-500" />}
              title="Personalized Learning Roadmaps"
              description="Get customized step-by-step learning plans to acquire the skills needed for your chosen career."
              link="/roadmap"
            />
            <FeatureCard
              icon={<LineChart className="h-8 w-8 text-purple-500" />}
              title="Skill Gap Analysis"
              description="Identify what skills you need to develop to succeed in your desired tech career path."
              link="/skills"
            />
            <FeatureCard
              icon={<Compass className="h-8 w-8 text-purple-500" />}
              title="Career Comparison Tool"
              description="Compare different career options based on skills, salary, demand, and growth potential."
              link="/compare"
            />
            <FeatureCard
              icon={<BrainCircuit className="h-8 w-8 text-purple-500" />}
              title="AI-Powered Recommendations"
              description="Receive personalized career suggestions based on your interests, skills, and preferences."
              link="/recommendations"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Find Your Perfect Tech Career?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Start your journey today with our AI-powered career mapping tools
              </p>
            </div>
            <Button asChild size="lg" className="bg-purple-600 text-white hover:bg-purple-700">
              <Link href="/dashboard">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description, link }) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 mb-4">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="ghost" className="w-full justify-between">
          <Link href={link}>
            Learn more
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

