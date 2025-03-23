import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  About TechFinIA
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">Innovating Financial Solutions for the Digital Age</p>
            </div>
          </div>
        </section>

        {/* About Us Content */}
        <section className="py-16 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 shadow-xl mb-12">
                <h2 className="text-2xl font-bold mb-6 text-blue-400">Our Story</h2>
                <p className="text-gray-300 mb-6">
                  Founded in 2025, TechFinIA is a leading provider of cutting-edge Fintech solutions, delivering a
                  comprehensive Fintech Suite (FTS) designed to streamline financial operations for businesses of all
                  sizes. Our mission is to empower enterprises with seamless financial management, automation, and
                  integration capabilities, ensuring efficiency and accuracy at every step.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                    <h3 className="text-xl font-semibold mb-4 text-white">Our Mission</h3>
                    <p className="text-gray-400">
                      To revolutionize financial technology by providing innovative, secure, and user-friendly solutions
                      that empower businesses to achieve their financial goals.
                    </p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                    <h3 className="text-xl font-semibold mb-4 text-white">Our Vision</h3>
                    <p className="text-gray-400">
                      To be the global leader in fintech innovation, setting new standards for financial management
                      technology and driving digital transformation across industries.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 shadow-xl mb-12">
                <h2 className="text-2xl font-bold mb-6 text-blue-400">Our Fintech Suite (FTS)</h2>
                <p className="text-gray-300 mb-6">
                  Our Fintech Suite (FTS) is an end-to-end financial management solution equipped with a full-fledged
                  Chart of Accounts (COA) management system, JV postings, cost center management, and powerful reporting
                  tools.
                </p>

                <h3 className="text-xl font-semibold mb-4 text-white">Flexible Deployment Options</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="bg-blue-500/20 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-blue-400" />
                    </div>
                    <div>
                      <span className="font-medium text-white">On-Premise Deployment</span>
                      <p className="text-gray-400">Secure and fully managed within your own infrastructure.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-500/20 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4 text-purple-400" />
                    </div>
                    <div>
                      <span className="font-medium text-white">Cloud Deployment</span>
                      <p className="text-gray-400">Scalable, flexible, and accessible from anywhere.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 shadow-xl mb-12">
                <h2 className="text-2xl font-bold mb-6 text-blue-400">Key Features</h2>

                <div className="space-y-8">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      Comprehensive Chart of Accounts (COA) Management
                    </h3>
                    <p className="text-gray-400">
                      Our FTS solution ensures seamless COA management, allowing businesses to effectively organize and
                      control financial accounts.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">JV (Journal Voucher) Postings</h3>
                    <p className="text-gray-400">
                      Record and manage all financial transactions with automated and manual JV postings, ensuring
                      accuracy and compliance.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">Cost Centre Management</h3>
                    <p className="text-gray-400">
                      Efficiently allocate expenses and revenues across multiple cost centers for detailed financial
                      tracking and reporting.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">Advanced Financial Reporting</h3>
                    <p className="text-gray-400 mb-4">Generate real-time, detailed financial reports, including:</p>
                    <ul className="space-y-2 text-gray-400 ml-6">
                      <li className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-blue-500 mr-3"></span>
                        <span>Balance Sheet – Get an overview of assets, liabilities, and equity.</span>
                      </li>
                      <li className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-purple-500 mr-3"></span>
                        <span>
                          Trial Balance – Validate financial accuracy with a complete summary of ledger balances.
                        </span>
                      </li>
                      <li className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-blue-500 mr-3"></span>
                        <span>Profit & Loss (P&L) Statement – Assess your company's financial performance.</span>
                      </li>
                      <li className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-purple-500 mr-3"></span>
                        <span>Cash Flow Statement – Monitor cash movement and financial liquidity.</span>
                      </li>
                      <li className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-blue-500 mr-3"></span>
                        <span>
                          Custom Reports – Up to three customized reports based on your specific business requirements.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 shadow-xl mb-12">
                <h2 className="text-2xl font-bold mb-6 text-blue-400">Seamless API Integrations</h2>
                <p className="text-gray-300 mb-6">
                  Our RESTful APIs ensure smooth integration with your existing operational systems, enabling real-time
                  financial data exchange.
                </p>

                <h3 className="text-xl font-semibold mb-4 text-white">Available APIs:</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-blue-500 mr-3"></span>
                    <span className="text-gray-300">Authentication API – Secure authentication for accessing FTS.</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-purple-500 mr-3"></span>
                    <span className="text-gray-300">
                      JV Posting API – Automate journal voucher postings with external systems.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 shadow-xl mb-12">
                <h2 className="text-2xl font-bold mb-6 text-blue-400">
                  Admin Portal – Complete Control at Your Fingertips
                </h2>
                <p className="text-gray-300 mb-6">
                  The FTS Admin Portal is designed for authenticated users, providing full control over financial
                  activities and user roles.
                </p>

                <h3 className="text-xl font-semibold mb-4 text-white">Admin Features:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "User Management & Role-Based Access Control",
                    "COA Management – Define and structure financial accounts",
                    "Cost Centre Management – Track and manage financial allocations",
                    "JV Posting Screen – Manage and approve journal entries",
                    "User Posting & Authorization Limits – Define limits for financial transactions",
                    "Bank Reconciliation – Ensure financial accuracy and compliance",
                    "Fiscal Year Closure – Automate year-end financial closing activities",
                    "General Ledger Budgeting – Set financial budgets and track expenditures",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div
                        className={`${index % 2 === 0 ? "bg-blue-500/20" : "bg-purple-500/20"} p-1 rounded-full mr-3 mt-1`}
                      >
                        <Check className={`h-4 w-4 ${index % 2 === 0 ? "text-blue-400" : "text-purple-400"}`} />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 shadow-xl mb-12">
                <h2 className="text-2xl font-bold mb-6 text-blue-400">Why Choose TechFinIA?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "End-to-End Financial Management – From COA to financial reporting, we cover it all.",
                    "Seamless API Integration – Integrate with your existing systems effortlessly.",
                    "Flexible Deployment – Choose between on-premise or cloud solutions.",
                    "Secure & Scalable – Enterprise-grade security with unlimited scalability.",
                    "User-Friendly Interface – Intuitive design for ease of use and efficiency.",
                  ].map((reason, index) => (
                    <div key={index} className="flex items-start">
                      <div
                        className={`${index % 2 === 0 ? "bg-blue-500/20" : "bg-purple-500/20"} p-1 rounded-full mr-3 mt-1`}
                      >
                        <Check className={`h-4 w-4 ${index % 2 === 0 ? "text-blue-400" : "text-purple-400"}`} />
                      </div>
                      <span className="text-gray-300">{reason}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 text-center">
                  <h3 className="text-xl font-semibold mb-4 text-white">Get Started Today!</h3>
                  <p className="text-gray-300 mb-6">
                    Join leading businesses that trust TechFinIA for their financial management needs.
                  </p>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg group">
                    Contact Us for a Demo
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 shadow-xl mb-12" id="careers">
                <h2 className="text-2xl font-bold mb-6 text-blue-400">Join Our Team</h2>
                <p className="text-gray-300 mb-6">
                  We're always looking for talented individuals to join our team. Check out our current openings and
                  apply today.
                </p>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  View Open Positions
                </Button>
              </div>

              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 shadow-xl mb-12" id="partners">
                <h2 className="text-2xl font-bold mb-6 text-blue-400">Our Partners</h2>
                <p className="text-gray-300 mb-6">
                  We work with leading companies in the financial and technology sectors to deliver the best solutions
                  to our customers.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                  {[1, 2, 3, 4].map((partner) => (
                    <div key={partner} className="bg-gray-800 rounded-lg p-4 h-24 flex items-center justify-center">
                      <div className="text-gray-500 font-medium">Partner Logo</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 shadow-xl" id="contact">
                <h2 className="text-2xl font-bold mb-6 text-blue-400">Contact Us</h2>
                <p className="text-gray-300 mb-6">
                  Have questions or want to learn more about our solutions? Get in touch with our team.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4 text-white">Contact Information</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-blue-500/20 p-1 rounded-full mr-3 mt-1">
                          <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-300">contact@techfinia.com</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-purple-500/20 p-1 rounded-full mr-3 mt-1">
                          <svg
                            className="h-4 w-4 text-purple-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-300">+1 (555) 123-4567</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

