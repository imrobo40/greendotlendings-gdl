import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { LoanCalculator } from "../../components/loan-calculator"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DebtConsolidationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Debt Consolidation Loans</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simplify your finances by combining multiple debts into one manageable monthly payment with a lower
              interest rate.
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Debt Consolidation?</h2>
            <p className="text-gray-600">Transform multiple payments into one simple solution</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Lower Interest Rates",
                description: "Potentially reduce your overall interest rate compared to credit cards",
                benefit: "Save money on interest",
              },
              {
                title: "One Monthly Payment",
                description: "Simplify your finances with just one payment to manage",
                benefit: "Easier budgeting",
              },
              {
                title: "Fixed Payment Schedule",
                description: "Know exactly when your debt will be paid off",
                benefit: "Predictable payments",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <p className="text-blue-600 font-semibold">{item.benefit}</p>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How Debt Consolidation Works</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "List Your Debts",
                description: "Gather information about all your current debts and monthly payments",
              },
              {
                step: "2",
                title: "Apply for Loan",
                description: "Get approved for a personal loan that covers your total debt amount",
              },
              {
                step: "3",
                title: "Pay Off Debts",
                description: "Use the loan funds to pay off all your existing debts",
              },
              {
                step: "4",
                title: "Make One Payment",
                description: "Now you have just one monthly payment at a potentially lower rate",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full font-bold text-lg mb-4">
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
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Consolidate Your Debt?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take control of your finances with a Green Dot Finance debt consolidation loan.
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
