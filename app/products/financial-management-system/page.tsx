import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, BarChart3, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function FinancialManagementSystemPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <Navbar />

      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-gray-900 border-b border-gray-800">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center text-sm text-gray-400">
              <Link href="/" className="hover:text-blue-400 transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <Link href="/products" className="hover:text-blue-400 transition-colors">
                Products
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-gray-300">Financial Management System</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Financial Management System
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Comprehensive financial management with advanced accounting features, real-time reporting, and seamless
                integration capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group">
                  Request a Demo
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="border-blue-500 text-blue-400">
                  View Pricing
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-white">Streamline Your Financial Operations</h2>
                <p className="text-gray-300 mb-6">
                  Our Financial Management System provides a comprehensive solution for managing your organization's
                  financial operations. From chart of accounts to financial reporting, our system offers everything you
                  need to maintain accurate financial records and make informed business decisions.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Centralized financial data management",
                    "Automated accounting processes",
                    "Real-time financial insights",
                    "Customizable reporting",
                    "Seamless integration with other systems",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-blue-500/20 p-1 rounded-full mr-3 mt-1">
                        <Check className="h-4 w-4 text-blue-400" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="aspect-video rounded-lg bg-gray-800 flex items-center justify-center">
                  <BarChart3 className="h-24 w-24 text-blue-400 opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Key Features
                </span>
              </h2>
              <p className="text-gray-300">
                Our Financial Management System offers a comprehensive set of features designed to meet the needs of
                modern businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Chart of Accounts Management",
                  description: "Create and manage a flexible chart of accounts tailored to your business needs.",
                },
                {
                  title: "Journal Voucher Postings",
                  description: "Record and manage all financial transactions with automated and manual JV postings.",
                },
                {
                  title: "Cost Center Management",
                  description: "Allocate expenses and revenues across multiple cost centers for detailed tracking.",
                },
                {
                  title: "Financial Reporting",
                  description:
                    "Generate comprehensive financial reports including balance sheets, P&L statements, and more.",
                },
                {
                  title: "Bank Reconciliation",
                  description: "Automatically reconcile bank statements with your financial records.",
                },
                {
                  title: "Multi-currency Support",
                  description: "Handle transactions in multiple currencies with automatic exchange rate calculations.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="h-12 w-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-blue-400 text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Benefits
                </span>
              </h2>

              <div className="space-y-8">
                {[
                  {
                    title: "Improved Financial Accuracy",
                    description:
                      "Reduce errors and ensure financial data accuracy with automated processes and validation checks.",
                  },
                  {
                    title: "Enhanced Decision Making",
                    description: "Access real-time financial insights to make informed business decisions quickly.",
                  },
                  {
                    title: "Increased Efficiency",
                    description: "Automate routine financial tasks to save time and reduce manual effort.",
                  },
                  {
                    title: "Better Compliance",
                    description: "Ensure compliance with financial regulations and standards with built-in controls.",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-500/20 p-3 rounded-full mr-4">
                      <Check className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">{benefit.title}</h3>
                      <p className="text-gray-400">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Financial Management?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our team today to learn more about our Financial Management System and how it can benefit your
                business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg">
                  Request a Demo
                </Button>
                <Button variant="outline" className="border-blue-500 text-blue-400 px-8 py-6 text-lg">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

