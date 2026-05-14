"use client"

import type React from "react"

import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help! Reach out to us with any questions about our personal loans, application process, or
            existing accounts.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Phone className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-600 mb-2">(850) 270-8634</p>
                <p className="text-sm text-gray-500">Mon-Fri 8am-11pm ET</p>
                <p className="text-sm text-gray-500">Sat-Sun 8am-8pm ET</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Mail className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600 mb-2">greendotlending1@gmail.com</p>
                <p className="text-sm text-gray-500">24/7 response</p>
                <p className="text-sm text-gray-500">Typically within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <MessageCircle className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-2">Available on website</p>
                <p className="text-sm text-gray-500">Mon-Fri 8am-11pm ET</p>
                <p className="text-sm text-gray-500">Instant response</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <MapPin className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Mail</h3>
                <p className="text-gray-600 mb-2">Green Dot Lending</p>
                <p className="text-sm text-gray-500">3201 Parkway Center Ct</p>
                <p className="text-sm text-gray-500">Orlando, FL 32808</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <Input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <Select onValueChange={(value) => setFormData({ ...formData, subject: value })}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="application">Application Question</SelectItem>
                      <SelectItem value="existing">Existing Loan</SelectItem>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="complaint">Complaint</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <Textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                <Button type="submit" className="w-full h-12 bg-blue-500 hover:bg-blue-600">
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Business Hours</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="font-semibold">Customer Service</p>
                        <p className="text-sm text-gray-600">Monday - Friday: 8:00 AM - 11:00 PM ET</p>
                        <p className="text-sm text-gray-600">Saturday - Sunday: 8:00 AM - 8:00 PM ET</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="font-semibold">Live Chat</p>
                        <p className="text-sm text-gray-600">Monday - Friday: 8:00 AM - 11:00 PM ET</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="font-semibold">Email Support</p>
                        <p className="text-sm text-gray-600">24/7 - We respond within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <a href="/faqs" className="block text-blue-600 hover:text-blue-800">
                    Frequently Asked Questions
                  </a>
                  <a href="/how-it-works" className="block text-blue-600 hover:text-blue-800">
                    How Green Dot Lending Works
                  </a>
                  <a href="/personal-loans" className="block text-blue-600 hover:text-blue-800">
                    Personal Loan Information
                  </a>
                  <a href="/login" className="block text-blue-600 hover:text-blue-800">
                    Account Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
