import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQsPage() {
  const faqs = [
    {
      question: "What is Green Dot Lending?",
      answer:
        "Green Dot Lending is a trusted online credit service provider offering unsecured personal loans with competitive rates and no fees to qualified borrowers.",
    },
    {
      question: "How much can I borrow?",
      answer:
        "You can borrow between $2,000 and $15,000, depending on your creditworthiness and ability to repay the loan.",
    },
    {
      question: "What are Green Dot Lending's interest rates?",
      answer:
        "Our rates range from 2.49% to 19.99% APR with AutoPay. Your actual rate depends on your credit profile, loan amount, and loan term.",
    },
    {
      question: "Are there any fees?",
      answer:
        "No! Green Dot Lending doesn't charge origination fees, prepayment penalties, late fees, or any other fees.",
    },
    {
      question: "How fast can I get my money?",
      answer:
        "If you're approved and accept your loan by 2:30 p.m. ET on a business day, you can receive your funds the same day. Otherwise, you'll typically receive funds the next business day.",
    },
    {
      question: "What can I use the loan for?",
      answer:
        "You can use your Green Dot Lending loan for virtually any purpose, including debt consolidation, home improvement, major purchases, weddings, vacations, and more.",
    },
    {
      question: "Do I need collateral?",
      answer:
        "No, Green Dot Lending personal loans are unsecured, which means you don't need to put up collateral like your home or car.",
    },
    {
      question: "What credit score do I need?",
      answer:
        "While we don't have a minimum credit score requirement, we typically approve borrowers with good to excellent credit (usually 660 or higher).",
    },
    {
      question: "Will checking my rate affect my credit score?",
      answer:
        "No, checking your rate results in a soft credit inquiry, which won't affect your credit score. Only if you proceed with the application will we perform a hard credit inquiry.",
    },
    {
      question: "Can I pay off my loan early?",
      answer:
        "Yes! You can pay off your loan early without any prepayment penalties. This can save you money on interest charges.",
    },
    {
      question: "How do I make payments?",
      answer:
        "You can make payments online, by phone, or by mail. We also offer AutoPay, which can lower your interest rate by 0.50 percentage points.",
    },
    {
      question: "What is the Rate Beat Program?",
      answer:
        "If you receive a lower rate offer from a qualifying competitor, we'll beat it by 0.10 percentage points when you bring us documentation of the competing offer.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about Green Dot Lending personal loans, our application process, and loan
            terms.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2 pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our customer service team is here to help. Contact us by phone, email, or chat.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600">(850) 270-8634</p>
              <p className="text-sm text-gray-500">Mon-Fri 8am-11pm ET</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">greendotlending1@gmail.com</p>
              <p className="text-sm text-gray-500">24/7 response</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-800 mb-2">Live Chat</h3>
              <p className="text-gray-600">Available on our website</p>
              <p className="text-sm text-gray-500">Mon-Fri 8am-11pm ET</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
