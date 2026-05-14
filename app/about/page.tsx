import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Shield, Award, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">About Green Dot Lending</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            America's trusted online credit service, helping people achieve their financial goals with competitive
            personal loans and exceptional customer service.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              At Green Dot Lending, we believe everyone deserves access to fair, transparent, and affordable credit.
              We're committed to providing personal loans that help our customers consolidate debt, make major
              purchases, improve their homes, and achieve their financial dreams.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-blue-600" />,
                number: "500K+",
                label: "Satisfied Customers",
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
                number: "$2B+",
                label: "Loans Funded",
              },
              {
                icon: <Award className="w-8 h-8 text-blue-600" />,
                number: "4.8/5",
                label: "Customer Rating",
              },
              {
                icon: <Shield className="w-8 h-8 text-blue-600" />,
                number: "10+",
                label: "Years of Trust",
              },
            ].map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Transparency",
                description:
                  "No hidden fees, no surprises. We believe in clear, honest communication about all loan terms and conditions.",
              },
              {
                title: "Customer First",
                description:
                  "Our customers are at the heart of everything we do. We're committed to providing exceptional service and support.",
              },
              {
                title: "Innovation",
                description:
                  "We continuously improve our technology and processes to make borrowing faster, easier, and more convenient.",
              },
            ].map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
