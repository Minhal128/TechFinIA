import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Landmark, ChevronRight, Shield, Users, BarChart3, Globe } from "lucide-react"
import Link from "next/link"

export default function BankingFinancialServicesPage() {
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
              <Link href="/solutions" className="hover:text-blue-400 transition-colors">
                Solutions
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-gray-300">Banking & Financial Services</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Banking & Financial Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Streamline operations, enhance security, and improve customer experience with our tailored solutions for
                banks and financial institutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group">
                  Request a Demo
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="border-blue-500 text-blue-400">
                  View Solutions
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
                <h2 className="text-3xl font-bold mb-6 text-white">Transforming Banking & Financial Services</h2>
                <p className="text-gray-300 mb-6">
                  In today's rapidly evolving financial landscape, banks and financial institutions face numerous
                  challenges, from regulatory compliance to digital transformation and customer expectations. Our
                  tailored solutions help you navigate these challenges and stay ahead of the competition.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Streamline financial operations with automated processes",
                    "Enhance security and compliance with advanced tools",
                    "Improve customer experience with digital solutions",
                    "Gain real-time insights with comprehensive analytics",
                    "Integrate seamlessly with existing systems",
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
                  <Landmark className="h-24 w-24 text-blue-400 opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Solutions */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Key Solutions
                </span>
              </h2>
              <p className="text-gray-300">
                Our comprehensive suite of solutions for banking and financial services addresses your specific needs
                and challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Shield className="h-10 w-10 text-blue-400" />,
                  title: "Regulatory Compliance",
                  description:
                    "Automate compliance processes and stay up-to-date with changing regulations with our comprehensive compliance tools.",
                },
                {
                  icon: <Users className="h-10 w-10 text-purple-400" />,
                  title: "Customer Onboarding",
                  description:
                    "Streamline customer onboarding with digital solutions that enhance the customer experience and reduce processing time.",
                },
                {
                  icon: <BarChart3 className="h-10 w-10 text-blue-400" />,
                  title: "Financial Analytics",
                  description:
                    "Gain real-time insights into your financial performance with comprehensive analytics and reporting tools.",
                },
                {
                  icon: <Globe className="h-10 w-10 text-purple-400" />,
                  title: "Digital Banking",
                  description:
                    "Enhance your digital banking capabilities with secure, user-friendly solutions that meet customer expectations.",
                },
              ].map((solution, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{solution.title}</h3>
                  <p className="text-gray-400">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-16 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-white text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Case Study
                </span>
              </h2>

              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="bg-gray-800 rounded-lg p-4 h-full flex flex-col justify-center items-center">
                      <Landmark className="h-16 w-16 text-blue-400 mb-4" />
                      <h3 className="text-xl font-bold text-white text-center">Global Bank Corp</h3>
                      <p className="text-gray-400 text-center">Leading international bank</p>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-4 text-white">Transforming Compliance Processes</h3>
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-lg font-medium text-blue-400">Challenge</h4>
                        <p className="text-gray-300">
                          Global Bank Corp was struggling with manual compliance processes that were time-consuming,
                          error-prone, and costly. They needed a solution to automate these processes and ensure
                          compliance with changing regulations.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-blue-400">Solution</h4>
                        <p className="text-gray-300">
                          We implemented our Regulatory Compliance solution, which automated compliance processes,
                          provided real-time monitoring, and generated comprehensive reports for regulatory submissions.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-blue-400">Results</h4>
                        <ul className="space-y-2">
                          {[
                            "85% reduction in compliance processing time",
                            "99.9% accuracy in regulatory reporting",
                            "50% reduction in compliance-related costs",
                            "Improved regulatory relationships",
                          ].map((result, index) => (
                            <li key={index} className="flex items-start">
                              <div className="bg-blue-500/20 p-1 rounded-full mr-3 mt-1">
                                <Check className="h-3 w-3 text-blue-400" />
                              </div>
                              <span className="text-gray-300">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Button variant="outline" className="border-blue-500 text-blue-400">
                      Read Full Case Study
                    </Button>
                  </div>
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
                  Benefits
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Improved Operational Efficiency",
                    description:
                      "Streamline operations with automated processes and integrated systems, reducing manual effort and improving efficiency.",
                  },
                  {
                    title: "Enhanced Compliance",
                    description:
                      "Stay compliant with changing regulations with automated compliance processes and real-time monitoring.",
                  },
                  {
                    title: "Better Customer Experience",
                    description:
                      "Improve customer satisfaction with digital solutions that enhance the customer experience and reduce processing time.",
                  },
                  {
                    title: "Data-Driven Insights",
                    description:
                      "Make informed decisions with real-time insights into your financial performance and customer behavior.",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <h3 className="text-xl font-bold mb-2 text-white">{benefit.title}</h3>
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
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Banking Operations?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our team today to learn more about our solutions for banking and financial services.
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

