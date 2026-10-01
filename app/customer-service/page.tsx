import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MessageCircle, Clock, HelpCircle, FileText } from 'lucide-react'

export default function CustomerServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Customer Service</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help! Our dedicated customer service team is available to assist you with any questions about your loan or account.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <Phone className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <CardTitle>Phone Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-blue-600 mb-2">‪(619) 356-8731</p>
                <p className="text-gray-600 mb-2">Monday - Friday: 8:00 AM - 11:00 PM ET</p>
                <p className="text-gray-600">Saturday - Sunday: 8:00 AM - 8:00 PM ET</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Mail className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <CardTitle>Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold text-blue-600 mb-2">info@greendotfinance.com	</p>
                <p className="text-gray-600 mb-2">24/7 Email Support</p>
                <p className="text-gray-600">Typically respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <MessageCircle className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <CardTitle>Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold text-blue-600 mb-2">Available on Website</p>
                <p className="text-gray-600 mb-2">Monday - Friday: 8:00 AM - 11:00 PM ET</p>
                <p className="text-gray-600">Instant response</p>
              </CardContent>
            </Card>
          </div>

          {/* Common Topics */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Common Support Topics</h2>
            <p className="text-gray-600">Quick answers to frequently asked questions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <HelpCircle className="w-6 h-6 text-blue-500" />,
                title: "Application Status",
                description: "Check the status of your loan application or get updates on processing"
              },
              {
                icon: <FileText className="w-6 h-6 text-blue-500" />,
                title: "Account Management",
                description: "Update your personal information, change payment methods, or view statements"
              },
              {
                icon: <Clock className="w-6 h-6 text-blue-500" />,
                title: "Payment Questions",
                description: "Make payments, set up AutoPay, or get help with payment schedules"
              },
              {
                icon: <Phone className="w-6 h-6 text-blue-500" />,
                title: "Technical Support",
                description: "Get help with website issues, login problems, or mobile app questions"
              },
              {
                icon: <Mail className="w-6 h-6 text-blue-500" />,
                title: "Document Requests",
                description: "Submit required documents or get help with verification processes"
              },
              {
                icon: <MessageCircle className="w-6 h-6 text-blue-500" />,
                title: "General Inquiries",
                description: "Any other questions about AdvanceAmericausaeft services or policies"
              }
            ].map((topic, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    {topic.icon}
                    <h3 className="font-semibold">{topic.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{topic.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center flex items-center justify-center space-x-2">
                  <Clock className="w-6 h-6" />
                  <span>Customer Service Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Phone Support</span>
                    <div className="text-right">
                      <p className="text-sm">Mon-Fri: 8:00 AM - 11:00 PM ET</p>
                      <p className="text-sm">Sat-Sun: 8:00 AM - 8:00 PM ET</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Live Chat</span>
                    <div className="text-right">
                      <p className="text-sm">Mon-Fri: 8:00 AM - 11:00 PM ET</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Email Support</span>
                    <div className="text-right">
                      <p className="text-sm">24/7 - Response within 24 hours</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
