import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, AlertTriangle, CheckCircle, X } from "lucide-react"

export default function PPIPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Payment Protection Insurance (PPI)</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about Payment Protection Insurance and how it can help protect your loan payments in case of
            unexpected life events.
          </p>
        </div>
      </section>

      {/* What is PPI */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">What is Payment Protection Insurance?</h2>
              <p className="text-gray-600 mb-4">
                Payment Protection Insurance (PPI) is optional coverage that can help make your loan payments if you're
                unable to work due to covered involuntary unemployment, disability, or death.
              </p>
              <p className="text-gray-600 mb-6">
                While United Capital Lenders doesn't require PPI, we want you to understand what it is and how it works
                so you can make an informed decision about whether it's right for you.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-blue-500 mt-0.5" />
                  <span className="text-gray-700">Optional coverage - never required</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-blue-500 mt-0.5" />
                  <span className="text-gray-700">Helps protect your credit rating</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-blue-500 mt-0.5" />
                  <span className="text-gray-700">Peace of mind for unexpected events</span>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="text-center">
                <Shield className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Protection When You Need It Most</h3>
                <p className="text-gray-600">
                  PPI can provide financial security during difficult times, helping ensure your loan payments are made
                  even when you can't work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Types of Coverage</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              PPI typically covers three main scenarios that could affect your ability to make loan payments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <X className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Involuntary Unemployment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Coverage if you lose your job through no fault of your own, such as layoffs or company closures.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Disability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Coverage if you become disabled and unable to work due to illness or injury.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-gray-600" />
                </div>
                <CardTitle>Life Insurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Coverage that pays off your remaining loan balance in the event of your death.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Important Information About PPI</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-green-200">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <CardTitle className="text-green-800">Benefits of PPI</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Helps maintain your credit rating</li>
                    <li>• Reduces financial stress during difficult times</li>
                    <li>• Optional - you choose if you want it</li>
                    <li>• Can be canceled at any time</li>
                    <li>• Premiums may be tax-deductible</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                    <CardTitle className="text-red-800">Things to Consider</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Adds to your monthly payment amount</li>
                    <li>• May have waiting periods and exclusions</li>
                    <li>• Coverage limits and time restrictions apply</li>
                    <li>• You may have other insurance that covers these risks</li>
                    <li>• Not all situations are covered</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* United Capital Lenders's Position */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              United Capital Lenders's Commitment to You
            </h2>
            <p className="text-gray-600 mb-6">
              At United Capital Lenders, we believe in transparency and putting our customers first. That's why we want
              you to know:
            </p>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>PPI is never required</strong> - We will never require you to purchase PPI to get a loan
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>No pressure sales</strong> - We provide information so you can make your own decision
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Your choice</strong> - You can add, modify, or cancel PPI at any time
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Clear terms</strong> - All PPI terms and costs are clearly disclosed upfront
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Apply for Your Loan?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Remember, PPI is always optional. Focus on getting the loan you need first, then decide if additional
            protection makes sense for your situation.
          </p>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
            Check Your Rate Now
          </Button>
          <p className="text-sm text-gray-500 mt-4">Checking your rate won't affect your credit score</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
