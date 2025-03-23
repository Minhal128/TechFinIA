import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, BarChart3, Shield, Zap, RefreshCw } from "lucide-react"

export default function ProductsPage() {
  const products = [
    {
      title: "Financial Management System",
      icon: <BarChart3 className="h-12 w-12 text-blue-400" />,
      description:
        "Comprehensive financial management with advanced accounting features, real-time reporting, and seamless integration capabilities.",
      features: [
        "Chart of Accounts Management",
        "Journal Voucher Postings",
        "Cost Center Management",
        "Financial Reporting",
        "Bank Reconciliation",
      ],
      cta: "Explore Financial Management",
    },
    {
      title: "Payment Processing Platform",
      icon: <Zap className="h-12 w-12 text-purple-400" />,
      description:
        "Secure, fast, and reliable payment processing solution with support for multiple payment methods and currencies.",
      features: [
        "Multi-currency Support",
        "Payment Gateway Integration",
        "Recurring Payments",
        "Payment Analytics",
        "Fraud Detection",
      ],
      cta: "Discover Payment Solutions",
    },
    {
      title: "Security & Compliance Suite",
      icon: <Shield className="h-12 w-12 text-blue-400" />,
      description:
        "Enterprise-grade security and compliance tools to protect financial data and meet regulatory requirements.",
      features: [
        "Data Encryption",
        "Multi-factor Authentication",
        "Audit Trails",
        "Regulatory Compliance",
        "Vulnerability Assessment",
      ],
      cta: "Enhance Your Security",
    },
    {
      title: "API Integration Platform",
      icon: <RefreshCw className="h-12 w-12 text-purple-400" />,
      description: "Seamless integration with existing systems through our comprehensive API platform.",
      features: [
        "RESTful APIs",
        "Webhook Support",
        "Developer Documentation",
        "Integration Templates",
        "API Analytics",
      ],
      cta: "Integrate Now",
    },
  ]

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
                  Our Products
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Cutting-edge financial technology solutions designed for the modern enterprise
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-xl p-8 border border-gray-800 shadow-xl hover:border-blue-500/50 transition-all duration-300"
                  id={
                    index === 0
                      ? "financial-management"
                      : index === 1
                        ? "payment-processing"
                        : index === 2
                          ? "security-compliance"
                          : "api-integration"
                  }
                >
                  <div className="mb-6">{product.icon}</div>
                  <h2 className="text-2xl font-bold mb-4 text-white">{product.title}</h2>
                  <p className="text-gray-400 mb-6">{product.description}</p>

                  <h3 className="text-lg font-medium mb-4 text-blue-400">Key Features</h3>
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div
                          className={`${i % 2 === 0 ? "bg-blue-500/20" : "bg-purple-500/20"} p-1 rounded-full mr-3 mt-1`}
                        >
                          <Check className={`h-4 w-4 ${i % 2 === 0 ? "text-blue-400" : "text-purple-400"}`} />
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group">
                    {product.cta}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              ))}
            </div>

            {/* Fintech Suite Overview */}
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 shadow-xl" id="fintech-suite">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                      Fintech Suite (FTS)
                    </span>
                  </h2>
                  <p className="text-gray-300 mb-6">
                    Our flagship product, the Fintech Suite (FTS), combines all our solutions into a comprehensive
                    financial management platform. Get everything you need to manage your finances in one place.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {[
                      "Financial Management",
                      "Payment Processing",
                      "Security & Compliance",
                      "API Integration",
                      "Reporting & Analytics",
                      "User Management",
                      "Mobile Access",
                      "24/7 Support",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div
                          className={`${index % 2 === 0 ? "bg-blue-500/20" : "bg-purple-500/20"} p-1 rounded-full mr-3`}
                        >
                          <Check className={`h-4 w-4 ${index % 2 === 0 ? "text-blue-400" : "text-purple-400"}`} />
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg group">
                    Explore Fintech Suite
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <div className="md:w-1/2 bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <div className="aspect-video rounded-lg bg-gray-900 flex items-center justify-center">
                    <div className="text-center p-8">
                      <h3 className="text-xl font-bold mb-2 text-white">Fintech Suite Demo</h3>
                      <p className="text-gray-400 mb-4">Watch our product demo to see the Fintech Suite in action</p>
                      <Button variant="outline" className="border-blue-500 text-blue-400">
                        Watch Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Financial Operations?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our team today to learn more about our products and how they can benefit your business.
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

