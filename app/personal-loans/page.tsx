import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { LoanCalculator } from "../../components/loan-calculator"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ArrowRight } from "lucide-react"

export default function PersonalLoansPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Personal Loans Made Simple</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the funds you need with competitive rates, no fees, and fast approval. Borrow $2,000 to $15,000 for
              any purpose.
            </p>
          </div>

          <div className="flex justify-center">
            <LoanCalculator />
          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Popular Loan Uses</h2>
            <p className="text-gray-600">Use your personal loan for virtually any purpose</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Debt Consolidation",
                description: "Combine multiple debts into one manageable payment",
                rate: "From 2.49% APR",
              },
              {
                title: "Home Improvement",
                description: "Renovate your home and increase its value",
                rate: "From 2.49% APR",
              },
              {
                title: "Major Purchase",
                description: "Buy what you need without depleting savings",
                rate: "From 2.49% APR",
              },
              {
                title: "Wedding",
                description: "Make your special day perfect",
                rate: "From 2.49% APR",
              },
              {
                title: "Vacation",
                description: "Create memories that last a lifetime",
                rate: "From 2.49% APR",
              },
              {
                title: "Medical Expenses",
                description: "Cover unexpected healthcare costs",
                rate: "From 2.49% APR",
              },
            ].map((loan, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{loan.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{loan.description}</p>
                  <p className="text-blue-600 font-semibold mb-4">{loan.rate}</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Why Choose Green Dot Lending Personal Loans?
              </h2>
              <div className="space-y-4">
                {[
                  "No origination fees, prepayment penalties, or late fees",
                  "Competitive rates starting as low as 2.49% APR with AutoPay",
                  "Fast funding - as soon as the same day you're approved",
                  "Loan amounts from $2,000 to $100,000",
                  "Terms from 24 to 144 months",
                  "No collateral required",
                  "Rate Beat Program - we'll beat any qualifying rate by 0.10 percentage points",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Ready to Apply?</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Loan Amount:</span>
                  <span className="font-semibold">$2,000 - $15,000</span>
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
                <Button className="w-full bg-blue-500 hover:bg-blue-600 mt-6">Check Your Rate</Button>
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
