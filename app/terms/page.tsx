import { Header } from "../../components/header"
import { Footer } from "../../components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: January 1, 2025</p>

          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using United Capital Lenders's website and services, you accept and agree to be bound
                by the terms and provision of this agreement. If you do not agree to abide by the above, please do not
                use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Loan Terms and Conditions</h2>
              <p className="text-gray-600 mb-4">
                All loans are subject to credit approval and verification of information. Loan terms, including interest
                rates, fees, and repayment schedules, will be clearly disclosed before you accept any loan offer.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Loan amounts: $2,000 to $100,000</li>
                <li>APR range: 2.49% to 19.99% with AutoPay</li>
                <li>Loan terms: 24 to 144 months</li>
                <li>No origination fees, prepayment penalties, or late fees</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Eligibility Requirements</h2>
              <p className="text-gray-600 mb-4">To be eligible for a loan, you must:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Be at least 18 years old</li>
                <li>Be a U.S. citizen or permanent resident</li>
                <li>Have a valid Social Security number</li>
                <li>Have a verifiable source of income</li>
                <li>Meet our credit and underwriting criteria</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Prohibited Uses</h2>
              <p className="text-gray-600 mb-4">You may not use our services:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>
                  To violate any international, federal, provincial, or state regulations, rules, laws, or local
                  ordinances
                </li>
                <li>
                  To infringe upon or violate our intellectual property rights or the intellectual property rights of
                  others
                </li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                United Capital Lenders shall not be liable for any indirect, incidental, special, consequential, or
                punitive damages, including without limitation, loss of profits, data, use, goodwill, or other
                intangible losses, resulting from your use of the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
                try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="text-gray-600">
                <p>Email: support@greendotlending.com</p>
                <p>Phone: ‪(000) 000-0000</p>
                <p>Mail: Green Dot Lending Legal Department, P.O. Box 6000, Charlotte, NC 28285</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
