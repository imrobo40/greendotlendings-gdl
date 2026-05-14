import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LoanCalculator } from "@/components/loan-calculator"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Shield, DollarSign, Users, Star } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
                No Hidden Fees • Fast Approval
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Personal Loans Up to <span className="text-blue-600">$15,000 </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Get the funds you need with competitive rates, no origination fees, and fast funding. Apply online in
                minutes with Green Dot Lending.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/personal-loans">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                    Verify Now
                  </Button>
                </Link>
                <Link href="/how-it-works">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
                    How It Works
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-6 mt-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>No prepayment penalty</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Fixed rates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Fast funding</span>
                </div>
              </div>
            </div>
            <div>
              <LoanCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Green Dot Lending?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make personal loans simple, transparent, and accessible for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>No Hidden Fees</CardTitle>
                <CardDescription>
                  No origination fees, no prepayment penalties, and no hidden charges. What you see is what you get.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Fast Approval</CardTitle>
                <CardDescription>
                  Get approved in minutes and receive funds as soon as the next business day.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Secure & Safe</CardTitle>
                <CardDescription>
                  Bank-level security and encryption to protect your personal and financial information.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Expert Support</CardTitle>
                <CardDescription>
                  Our dedicated customer service team is here to help you every step of the way.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Flexible Terms</CardTitle>
                <CardDescription>
                  Choose repayment terms from 2 to 7 years that fit your budget and lifestyle.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>Fixed Rates</CardTitle>
                <CardDescription>
                  Your rate stays the same for the life of your loan - no surprises or rate increases.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Loan Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Personal Loans for Every Need</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're consolidating debt, improving your home, or covering unexpected expenses, we have the right
              loan for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/debt-consolidation">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <DollarSign className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="group-hover:text-blue-600 transition-colors">Debt Consolidation</CardTitle>
                  <CardDescription>
                    Combine multiple debts into one easy monthly payment with a lower rate.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/home-improvement">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="group-hover:text-green-600 transition-colors">Home Improvement</CardTitle>
                  <CardDescription>Fund your dream renovation project and increase your home's value.</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/auto-refinancing">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                    <Clock className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="group-hover:text-purple-600 transition-colors">Auto Refinancing</CardTitle>
                  <CardDescription>Lower your monthly car payment with better rates and terms.</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/personal-loans">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                    <Users className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle className="group-hover:text-orange-600 transition-colors">Personal Expenses</CardTitle>
                  <CardDescription>Cover unexpected expenses, medical bills, or major purchases.</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who chose Green Dot Lending for their personal loan needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/personal-loans">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Apply Now
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 border-white text-black hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
