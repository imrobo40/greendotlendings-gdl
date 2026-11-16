import { Header } from "../../components/header"
import { Footer } from "../../components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: January 1, 2025</p>

          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect information you provide directly to us, such as when you create an account, apply for a loan,
                or contact us for support. This may include:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Personal identification information (name, address, phone number, email)</li>
                <li>Financial information (income, employment, bank account details)</li>
                <li>Social Security number and date of birth</li>
                <li>Credit information from credit reporting agencies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Process and evaluate your loan application</li>
                <li>Verify your identity and prevent fraud</li>
                <li>Provide customer service and support</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Improve our services and website functionality</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information Sharing</h2>
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information
                with:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Service providers who assist us in operating our business</li>
                <li>Credit reporting agencies and other financial institutions</li>
                <li>Legal authorities when required by law</li>
                <li>Third parties with your explicit consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. This includes:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>256-bit SSL encryption for data transmission</li>
                <li>Secure servers and databases</li>
                <li>Regular security audits and updates</li>
                <li>Employee training on data protection</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Access and review your personal information</li>
                <li>Request corrections to inaccurate information</li>
                <li>Opt out of marketing communications</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="text-gray-600">
                <p>Email: support@greendotlending.com</p>
                <p>Phone: ‪(000) 000-0000</p>
                <p>Mail: Green Dot Lending Privacy Office, P.O. Box 6000, Charlotte, NC 28285</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
