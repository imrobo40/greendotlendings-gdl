import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { LoanCalculator } from "../../components/loan-calculator"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Car, DollarSign, Clock, TrendingDown } from "lucide-react"

export default function AutoRefinancingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Auto Loan Refinancing</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lower your monthly car payment or pay off your auto loan faster with competitive refinancing rates.
            </p>
          </div>

          <div className="flex justify-center">
            <LoanCalculator />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Benefits of Auto Refinancing</h2>
            <p className="text-gray-600">Save money and improve your financial situation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <DollarSign className="w-8 h-8 text-purple-600" />,
                title: "Lower Monthly Payments",
                description: "Reduce your monthly payment with a lower interest rate",
              },
              {
                icon: <TrendingDown className="w-8 h-8 text-purple-600" />,
                title: "Better Interest Rates",
                description: "Take advantage of improved credit or market conditions",
              },
              {
                icon: <Clock className="w-8 h-8 text-purple-600" />,
                title: "Faster Payoff",
                description: "Choose a shorter term to pay off your car loan sooner",
              },
              {
                icon: <Car className="w-8 h-8 text-purple-600" />,
                title: "Keep Your Car",
                description: "Refinance without changing your current vehicle",
              },
            ].map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How Auto Refinancing Works</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Check Your Rate",
                description: "See what rate you qualify for without affecting your credit score",
              },
              {
                step: "2",
                title: "Choose Your Terms",
                description: "Select the loan amount and term that works best for your budget",
              },
              {
                step: "3",
                title: "We Pay Your Lender",
                description: "We'll pay off your existing auto loan and you start making payments to us",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500 text-white rounded-full font-bold text-lg mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Lower Your Car Payment?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            See how much you could save with auto loan refinancing from Green Dot Lending.
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Check Your Rate Now
          </Button>
          <p className="text-sm mt-4 opacity-90">Checking your rate won't affect your credit score</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
