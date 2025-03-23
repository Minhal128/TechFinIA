import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Shield, ChevronRight, Lock, FileText, AlertTriangle, Users } from "lucide-react"
import Link from "next/link"

export default function SecurityComplianceSuitePage() {
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
              <span className="text-gray-300">Security & Compliance Suite</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Security & Compliance Suite
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Enterprise-grade security and compliance tools to protect financial data and meet regulatory
                requirements.
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
                <h2 className="text-3xl font-bold mb-6 text-white">Protect Your Financial Data</h2>
                <p className="text-gray-300 mb-6">
                  Our Security & Compliance Suite provides comprehensive protection for your financial data and helps
                  ensure compliance with industry regulations. With advanced security features and automated compliance
                  tools, you can focus on your business while we handle the security.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Enterprise-grade data encryption",
                    "Multi-factor authentication",
                    "Comprehensive audit trails",
                    "Automated compliance reporting",
                    "Regular security assessments",
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
                  <Shield className="h-24 w-24 text-blue-400 opacity-50" />
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
                Our Security & Compliance Suite offers a comprehensive set of features designed to protect your
                financial data and ensure regulatory compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Lock className="h-10 w-10 text-blue-400" />,
                  title: "Data Encryption",
                  description: "End-to-end encryption for all financial data, both at rest and in transit.",
                },
                {
                  icon: <Users className="h-10 w-10 text-purple-400" />,
                  title: "Multi-factor Authentication",
                  description: "Secure access with multiple authentication factors to prevent unauthorized access.",
                },
                {
                  icon: <FileText className="h-10 w-10 text-blue-400" />,
                  title: "Audit Trails",
                  description:
                    "Comprehensive audit trails for all system activities to track and monitor user actions.",
                },
                {
                  icon: <AlertTriangle className="h-10 w-10 text-purple-400" />,
                  title: "Vulnerability Assessment",
                  description: "Regular security assessments to identify and address potential vulnerabilities.",
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

        {/* Compliance */}
        <section className="py-16 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-white text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Regulatory Compliance
                </span>
              </h2>

              <p className="text-gray-300 text-center mb-12">
                Our Security & Compliance Suite helps you meet the requirements of various financial regulations and
                standards.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                {["PCI DSS", "GDPR", "SOX", "HIPAA", "ISO 27001", "FINRA"].map((regulation, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
                    <div className="h-12 flex items-center justify-center mb-2">
                      <Shield className={`h-8 w-8 ${index % 2 === 0 ? "text-blue-400" : "text-purple-400"}`} />
                    </div>
                    <p className="text-gray-300 font-medium">{regulation}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button variant="outline" className="border-blue-500 text-blue-400">
                  Learn More About Compliance
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Security Process */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-white text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Our Security Process
                </span>
              </h2>

              <div className="relative">
                {/* Timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>

                {/* Timeline Items */}
                <div className="space-y-12">
                  {[
                    {
                      title: "Risk Assessment",
                      description: "Identify potential security risks and vulnerabilities in your financial systems.",
                    },
                    {
                      title: "Security Implementation",
                      description: "Implement appropriate security controls and measures to address identified risks.",
                    },
                    {
                      title: "Continuous Monitoring",
                      description: "Monitor systems and networks for security events and potential threats.",
                    },
                    {
                      title: "Regular Auditing",
                      description:
                        "Conduct regular security audits to ensure compliance and identify areas for improvement.",
                    },
                  ].map((step, index) => (
                    <div key={index} className="relative flex items-center">
                      <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 ml-auto"}`}>
                        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                          <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                          <p className="text-gray-400">{step.description}</p>
                        </div>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gray-800 border-4 border-blue-500 flex items-center justify-center">
                        <span className="text-blue-400 font-bold">{index + 1}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to Secure Your Financial Data?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our team today to learn more about our Security & Compliance Suite and how it can protect your
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

