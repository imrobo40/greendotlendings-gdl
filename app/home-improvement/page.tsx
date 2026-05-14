import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { LoanCalculator } from "../../components/loan-calculator"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Wrench, PaintBucket, Zap } from 'lucide-react'

export default function HomeImprovementPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Home Improvement Loans</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your home with a personal loan. No collateral required, competitive rates, and fast funding.
            </p>
          </div>

          <div className="flex justify-center">
            <LoanCalculator />
          </div>
        </div>
      </section>

      {/* Popular Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Popular Home Improvement Projects</h2>
            <p className="text-gray-600">Finance any home improvement project with competitive rates</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Home className="w-8 h-8 text-green-600" />,
                title: "Kitchen Remodel",
                description: "Update your kitchen with new appliances, countertops, and cabinets",
                avgCost: "$15,000 - $50,000"
              },
              {
                icon: <PaintBucket className="w-8 h-8 text-green-600" />,
                title: "Bathroom Renovation",
                description: "Modernize your bathroom with new fixtures and finishes",
                avgCost: "$10,000 - $30,000"
              },
              {
                icon: <Wrench className="w-8 h-8 text-green-600" />,
                title: "HVAC System",
                description: "Install or upgrade your heating and cooling system",
                avgCost: "$5,000 - $15,000"
              },
              {
                icon: <Zap className="w-8 h-8 text-green-600" />,
                title: "Electrical Work",
                description: "Upgrade wiring, add outlets, or install new lighting",
                avgCost: "$2,000 - $10,000"
              }
            ].map((project, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">{project.icon}</div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <p className="text-green-600 font-semibold">{project.avgCost}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Use a Personal Loan for Home Improvements?</h2>
              <div className="space-y-4">
                {[
                  "No collateral required - your home isn't at risk",
                  "Fixed interest rates and predictable monthly payments",
                  "Fast funding - get your money in as little as one day",
                  "Use funds for any home improvement project",
                  "No restrictions on contractors or materials",
                  "Potentially increase your home's value"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Loan Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Loan Amount:</span>
                  <span className="font-semibold">$2,000 - $100,000</span>
                </div>
                <div className="flex justify-between">
                  <span>APR Range:</span>
                  <span className="font-semibold">2.49% - 19.99%</span>
                </div>
                <div className="flex justify-between">
                  <span>Loan Terms:</span>
                  <span className="font-semibold">24 - 144 months</span>
                </div>
                <div className="flex justify-between">
                  <span>Funding Time:</span>
                  <span className="font-semibold">Same day</span>
                </div>
                <Button className="w-full bg-green-500 hover:bg-green-600 mt-6">Check Your Rate</Button>
                <p className="text-xs text-gray-500 text-center">Checking your rate won't affect your credit score</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
