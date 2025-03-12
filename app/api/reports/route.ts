import { NextResponse } from "next/server"
import { jsPDF } from "jspdf"

// This is a server-side route handler that generates PDF reports
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const reportType = searchParams.get("type")

  // Create a new PDF document
  const doc = new jsPDF()

  // Set up the PDF based on report type
  if (reportType === "salary-guide") {
    generateSalaryReport(doc)
  } else if (reportType === "tech-trends") {
    generateTechTrendsReport(doc)
  } else if (reportType === "future-of-work") {
    generateFutureOfWorkReport(doc)
  } else {
    // Default generic report
    generateGenericReport(doc)
  }

  // Convert the PDF to a buffer
  const pdfBuffer = Buffer.from(doc.output("arraybuffer"))

  // Return the PDF as a response
  return new NextResponse(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${reportType || "report"}.pdf"`,
    },
  })
}

// Helper functions to generate different report types
function generateSalaryReport(doc: any) {
  doc.setFontSize(22)
  doc.text("2024 Tech Salary Guide", 20, 20)

  doc.setFontSize(12)
  doc.text("Comprehensive salary data across roles, experience levels, and locations", 20, 30)

  doc.setFontSize(16)
  doc.text("Key Findings", 20, 50)

  doc.setFontSize(12)
  doc.text("• Software Engineer salaries increased by 8.7% on average in 2023", 25, 60)
  doc.text("• DevOps and SRE roles saw the highest growth at 12.3%", 25, 70)
  doc.text("• Remote roles now offer 92% of on-site compensation, up from 85% in 2022", 25, 80)
  doc.text("• AI/ML specialists command a 24.7% premium over general developers", 25, 90)

  doc.setFontSize(16)
  doc.text("Regional Breakdown", 20, 110)

  doc.setFontSize(12)
  doc.text("San Francisco Bay Area: $145,000 - $210,000", 25, 120)
  doc.text("New York: $135,000 - $195,000", 25, 130)
  doc.text("Seattle: $130,000 - $190,000", 25, 140)
  doc.text("Austin: $115,000 - $175,000", 25, 150)
  doc.text("Remote (US-based): $125,000 - $180,000", 25, 160)
}

function generateTechTrendsReport(doc: any) {
  doc.setFontSize(22)
  doc.text("Emerging Tech Trends", 20, 20)

  doc.setFontSize(12)
  doc.text("Analysis of emerging technologies and their impact on the job market", 20, 30)

  doc.setFontSize(16)
  doc.text("Rising Technologies", 20, 50)

  doc.setFontSize(12)
  doc.text("• AI/ML Frameworks: +143.2% YoY growth in job postings", 25, 60)
  doc.text("• Rust: +89.7% YoY growth, particularly in systems programming", 25, 70)
  doc.text("• WebAssembly: +76.5% YoY growth for cross-platform applications", 25, 80)
  doc.text("• Next.js: +68.3% YoY growth in frontend development roles", 25, 90)

  doc.setFontSize(16)
  doc.text("Technology Adoption Timeline", 20, 110)

  doc.setFontSize(12)
  doc.text("2024-2025: Widespread adoption of AI-assisted development tools", 25, 120)
  doc.text("2025-2026: WebAssembly becomes standard for cross-platform apps", 25, 130)
  doc.text("2026-2027: Quantum computing begins impacting specialized fields", 25, 140)
}

function generateFutureOfWorkReport(doc: any) {
  doc.setFontSize(22)
  doc.text("Future of Work Report", 20, 20)

  doc.setFontSize(12)
  doc.text("Insights on remote work, hybrid models, and workplace evolution", 20, 30)

  doc.setFontSize(16)
  doc.text("Remote Work Trends", 20, 50)

  doc.setFontSize(12)
  doc.text("• 68% of tech companies now offer permanent remote options", 25, 60)
  doc.text("• 42% of developers would take a 10% pay cut to work remotely", 25, 70)
  doc.text("• Companies with remote options see 32% lower turnover rates", 25, 80)
  doc.text("• 87% of developers report improved work-life balance", 25, 90)

  doc.setFontSize(16)
  doc.text("Hybrid Work Models", 20, 110)

  doc.setFontSize(12)
  doc.text("• 3-2 model (3 days remote, 2 in office) is the most common arrangement", 25, 120)
  doc.text("• 76% of companies have redesigned offices for collaboration spaces", 25, 130)
  doc.text("• Teams report 23% better collaboration with scheduled in-person days", 25, 140)
}

function generateGenericReport(doc: any) {
  doc.setFontSize(22)
  doc.text("Tech Industry Report", 20, 20)

  doc.setFontSize(12)
  doc.text("Comprehensive analysis of the current tech landscape", 20, 30)

  doc.setFontSize(16)
  doc.text("Key Insights", 20, 50)

  doc.setFontSize(12)
  doc.text("• The tech industry grew by 7.4% in 2023 despite economic challenges", 25, 60)
  doc.text("• Remote and hybrid work models have become the standard", 25, 70)
  doc.text("• AI integration is accelerating across all technology sectors", 25, 80)
  doc.text("• Demand for cybersecurity professionals increased by 35%", 25, 90)
}

