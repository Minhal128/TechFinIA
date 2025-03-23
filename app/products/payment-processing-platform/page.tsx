import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Zap, ChevronRight, CreditCard, Globe, Shield, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function PaymentProcessingPlatformPage() {
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
              <span className="text-gray-300">Payment Processing Platform</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Payment Processing Platform
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Secure, fast, and reliable payment processing solution with support for multiple payment methods and
                currencies.
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
                <h2 className="text-3xl font-bold mb-6 text-white">Streamline Your Payment Operations</h2>
                <p className="text-gray-300 mb-6">
                  Our Payment Processing Platform provides a comprehensive solution for handling all your payment needs.
                  From credit card processing to international transfers, our platform offers secure, reliable, and
                  efficient payment processing capabilities.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Support for multiple payment methods",
                    "Global payment processing",
                    "Real-time transaction monitoring",
                    "Advanced fraud detection",
                    "Seamless integration with your existing systems",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-purple-500/20 p-1 rounded-full mr-3 mt-1">
                        <Check className="h-4 w-4 text-purple-400" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="aspect-video rounded-lg bg-gray-800 flex items-center justify-center">
                  <Zap className="h-24 w-24 text-purple-400 opacity-50" />
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
                Our Payment Processing Platform offers a comprehensive set of features designed to meet the needs of
                modern businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <CreditCard className="h-10 w-10 text-purple-400" />,
                  title: "Multiple Payment Methods",
                  description: "Support for credit cards, debit cards, digital wallets, bank transfers, and more.",
                },
                {
                  icon: <Globe className="h-10 w-10 text-blue-400" />,
                  title: "Multi-currency Support",
                  description: "Process payments in over 130 currencies with automatic exchange rate calculations.",
                },
                {
                  icon: <Shield className="h-10 w-10 text-purple-400" />,
                  title: "Advanced Security",
                  description: "PCI DSS compliant with end-to-end encryption and tokenization for maximum security.",
                },
                {
                  icon: <BarChart3 className="h-10 w-10 text-blue-400" />,
                  title: "Detailed Analytics",
                  description: "Comprehensive reporting and analytics to track payment performance and trends.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-16 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-white text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Supported Payment Methods
                </span>
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {[
                  "Visa",
                  "Mastercard",
                  "American Express",
                  "Discover",
                  "PayPal",
                  "Apple Pay",
                  "Google Pay",
                  "Bank Transfer",
                ].map((method, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
                    <div className="h-12 flex items-center justify-center mb-2">
                      <CreditCard className={`h-8 w-8 ${index % 2 === 0 ? "text-blue-400" : "text-purple-400"}`} />
                    </div>
                    <p className="text-gray-300 font-medium">{method}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-gray-400 mb-4">And many more payment methods available globally</p>
                <Button variant="outline" className="border-purple-500 text-purple-400">
                  View All Payment Methods
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Integration */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <h2 className="text-2xl font-bold mb-4 text-white">Seamless Integration</h2>
                <p className="text-gray-300 mb-6">
                  Our Payment Processing Platform integrates easily with your existing systems through our comprehensive
                  API and pre-built plugins.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {[
                    "RESTful API",
                    "SDK Support",
                    "Webhook Notifications",
                    "Pre-built Plugins",
                    "Developer Documentation",
                    "Integration Support",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div
                        className={`${index % 2 === 0 ? "bg-blue-500/20" : "bg-purple-500/20"} p-1 rounded-full mr-3`}
                      >
                        <Check className={`h-4 w-4 ${index % 2 === 0 ? "text-blue-400" : "text-purple-400"}`} />
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Explore Integration Options
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to Streamline Your Payment Processing?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our team today to learn more about our Payment Processing Platform and how it can benefit your
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

