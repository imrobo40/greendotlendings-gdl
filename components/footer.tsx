import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/logo.png"
              alt="greendot Lending - Personal Loans"
              width={200}
              height={50}
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-gray-400 text-sm">
              America's trusted online personal finance service, providing fixed-rate loans with competitive terms.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/personal-loans" className="hover:text-white">
                  Personal Loans
                </Link>
              </li>
              <li>
                <Link href="/debt-consolidation" className="hover:text-white">
                  Debt Consolidation
                </Link>
              </li>
              <li>
                <Link href="/home-improvement" className="hover:text-white">
                  Home Improvement
                </Link>
              </li>
              <li>
                <Link href="/auto-refinancing" className="hover:text-white">
                  Auto Refinancing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white">
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/faqs" className="hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/customer-service" className="hover:text-white">
                  Customer Service
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2026 Green Dot Lending. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
