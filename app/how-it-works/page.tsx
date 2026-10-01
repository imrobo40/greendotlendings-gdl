import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, DollarSign, FileText } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">How Green Dot Finance Works</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting a personal loan with Green Dot Finance is simple, fast, and transparent. Here's how our process
            works from start to finish.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <FileText className="w-12 h-12 text-blue-500" />,
                step: "Step 1",
                title: "Apply Online",
                description: "Complete our simple online application in just a few minutes. No paperwork required.",
              },
              {
                icon: <CheckCircle className="w-12 h-12 text-blue-500" />,
                step: "Step 2",
                title: "Get Approved",
                description: "Receive an instant decision. If approved, review and accept your loan terms.",
              },
              {
                icon: <Clock className="w-12 h-12 text-blue-500" />,
                step: "Step 3",
                title: "Fast Funding",
                description: "Get your funds as soon as the same day you're approved, often within hours.",
              },
              {
                icon: <DollarSign className="w-12 h-12 text-blue-500" />,
                step: "Step 4",
                title: "Use Your Funds",
                description:
                  "Use your loan for any purpose - debt consolidation, home improvement, or major purchases.",
              },
            ].map((step, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">{step.icon}</div>
                  <div className="text-sm text-blue-500 font-semibold mb-2">{step.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Qualification Requirements</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span className="text-gray-700">Be at least 18 years old</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span className="text-gray-700">Be a U.S. citizen or permanent resident</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span className="text-gray-700">Have steady income and employment history</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span className="text-gray-700">Meet our debt-to-income requirements</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">What You'll Need</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                  <span className="text-gray-700">Social Security number</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                  <span className="text-gray-700">Government-issued ID</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                  <span className="text-gray-700">Proof of income (pay stubs, tax returns)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                  <span className="text-gray-700">Bank account information</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                  <span className="text-gray-700">Employment information</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of thousands of satisfied customers who chose Green Dot Finance for their personal loan needs.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Check Your Rate Now
          </Button>
          <p className="text-sm mt-4 opacity-90">Checking your rate won't affect your credit score</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
