import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, ChevronRight, BarChart3, Shield, Zap, RefreshCw, Globe, Users } from "lucide-react"
import Link from "next/link"

export default function FintechSuitePage() {
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
              <span className="text-gray-300">Fintech Suite (FTS)</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Fintech Suite (FTS)
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Our flagship product, the Fintech Suite (FTS), combines all our solutions into a comprehensive financial
                management platform.
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
                <h2 className="text-3xl font-bold mb-6 text-white">Complete Financial Management Solution</h2>
                <p className="text-gray-300 mb-6">
                  The Fintech Suite (FTS) is our comprehensive financial management solution that combines all our
                  products into a single, integrated platform. From financial management to payment processing,
                  security, and API integration, FTS provides everything you need to manage your financial operations
                  efficiently.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "End-to-end financial management",
                    "Integrated payment processing",
                    "Enterprise-grade security",
                    "Comprehensive API integration",
                    "Flexible deployment options",
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
                  <div className="grid grid-cols-2 gap-4 p-4">
                    <BarChart3 className="h-16 w-16 text-blue-400 opacity-50" />
                    <Shield className="h-16 w-16 text-purple-400 opacity-50" />
                    <Zap className="h-16 w-16 text-purple-400 opacity-50" />
                    <RefreshCw className="h-16 w-16 text-blue-400 opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integrated Products */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Integrated Products
                </span>
              </h2>
              <p className="text-gray-300">
                The Fintech Suite (FTS) integrates all our products into a single, cohesive platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <BarChart3 className="h-10 w-10 text-blue-400" />,
                  title: "Financial Management System",
                  description:
                    "Comprehensive financial management with advanced accounting features and real-time reporting.",
                  link: "/products/financial-management-system",
                },
                {
                  icon: <Zap className="h-10 w-10 text-purple-400" />,
                  title: "Payment Processing Platform",
                  description:
                    "Secure, fast, and reliable payment processing with support for multiple payment methods and currencies.",
                  link: "/products/payment-processing-platform",
                },
                {
                  icon: <Shield className="h-10 w-10 text-blue-400" />,
                  title: "Security & Compliance Suite",
                  description:
                    "Enterprise-grade security and compliance tools to protect financial data and meet regulatory requirements.",
                  link: "/products/security-compliance-suite",
                },
                {
                  icon: <RefreshCw className="h-10 w-10 text-purple-400" />,
                  title: "API Integration Platform",
                  description: "Seamless integration with existing systems through our comprehensive API platform.",
                  link: "/products/api-integration-platform",
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="mb-4">{product.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{product.title}</h3>
                  <p className="text-gray-400 mb-4">{product.description}</p>
                  <Button
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400"
                    asChild
                  >
                    <Link href={product.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deployment Options */}
        <section className="py-16 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-white text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Flexible Deployment Options
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="mb-4">
                    <div className="h-12 w-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">On-Premise Deployment</h3>
                  <p className="text-gray-400 mb-4">
                    Deploy the Fintech Suite (FTS) on your own infrastructure for maximum control and security.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Complete control over your data",
                      "Customizable to your specific needs",
                      "Integration with your existing systems",
                      "Enhanced security and compliance",
                      "Dedicated support and maintenance",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-blue-500/20 p-1 rounded-full mr-3 mt-1">
                          <Check className="h-3 w-3 text-blue-400" />
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="mb-4">
                    <div className="h-12 w-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <Globe className="h-6 w-6 text-purple-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Cloud Deployment</h3>
                  <p className="text-gray-400 mb-4">
                    Access the Fintech Suite (FTS) from anywhere with our secure cloud deployment option.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Quick and easy setup",
                      "Automatic updates and maintenance",
                      "Scalable to your business needs",
                      "Accessible from anywhere",
                      "Reduced IT infrastructure costs",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-purple-500/20 p-1 rounded-full mr-3 mt-1">
                          <Check className="h-3 w-3 text-purple-400" />
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-white text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Benefits of the Fintech Suite
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  {
                    title: "Increased Efficiency",
                    description:
                      "Streamline your financial operations with integrated systems and automated processes.",
                  },
                  {
                    title: "Enhanced Security",
                    description:
                      "Protect your financial data with enterprise-grade security features and compliance tools.",
                  },
                  {
                    title: "Improved Decision Making",
                    description:
                      "Make informed decisions with real-time financial insights and comprehensive reporting.",
                  },
                  {
                    title: "Reduced Costs",
                    description: "Lower your operational costs with automated processes and integrated systems.",
                  },
                  {
                    title: "Scalable Solution",
                    description: "Grow your business with a scalable solution that adapts to your changing needs.",
                  },
                  {
                    title: "Seamless Integration",
                    description: "Integrate with your existing systems through our comprehensive API platform.",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <h3 className="text-lg font-bold mb-2 text-white">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Financial Operations?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our team today to learn more about our Fintech Suite (FTS) and how it can benefit your business.
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

