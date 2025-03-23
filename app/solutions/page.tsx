import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Building, Building2, Landmark, Store, Briefcase } from "lucide-react"

export default function SolutionsPage() {
  const industries = [
    {
      name: "Banking & Financial Services",
      icon: <Landmark className="h-12 w-12 text-blue-400" />,
      description:
        "Streamline operations, enhance security, and improve customer experience with our tailored solutions for banks and financial institutions.",
      benefits: [
        "Regulatory compliance automation",
        "Fraud detection and prevention",
        "Customer onboarding optimization",
        "Real-time transaction monitoring",
        "Seamless integration with core banking systems",
      ],
    },
    {
      name: "Enterprise & Corporate",
      icon: <Building className="h-12 w-12 text-purple-400" />,
      description:
        "Optimize financial processes, improve reporting, and enhance decision-making for large enterprises and corporations.",
      benefits: [
        "Centralized financial management",
        "Multi-entity consolidation",
        "Advanced financial analytics",
        "Automated reconciliation",
        "Custom reporting solutions",
      ],
    },
    {
      name: "Small & Medium Businesses",
      icon: <Store className="h-12 w-12 text-blue-400" />,
      description:
        "Affordable and scalable financial management solutions designed specifically for the needs of small and medium-sized businesses.",
      benefits: [
        "Cost-effective deployment options",
        "Easy-to-use interface",
        "Growth-ready scalability",
        "Integrated accounting and payments",
        "Simplified compliance",
      ],
    },
    {
      name: "Insurance",
      icon: <Briefcase className="h-12 w-12 text-purple-400" />,
      description:
        "Modernize insurance operations with our specialized financial management and claims processing solutions.",
      benefits: [
        "Claims processing automation",
        "Policy management integration",
        "Risk assessment tools",
        "Regulatory reporting",
        "Customer portal solutions",
      ],
    },
  ]

  const useCases = [
    {
      title: "Financial Process Automation",
      description: "Automate manual financial processes to reduce errors, save time, and improve efficiency.",
      benefits: [
        "Reduce manual data entry by up to 80%",
        "Decrease processing time by up to 70%",
        "Improve accuracy and reduce errors",
        "Free up staff for higher-value activities",
        "Enhance audit trails and compliance",
      ],
    },
    {
      title: "Multi-Entity Management",
      description: "Manage finances across multiple entities, subsidiaries, or branches from a single platform.",
      benefits: [
        "Consolidated financial reporting",
        "Standardized processes across entities",
        "Simplified intercompany transactions",
        "Multi-currency support",
        "Entity-specific compliance",
      ],
    },
    {
      title: "Financial Data Integration",
      description: "Connect financial data across your organization for a single source of truth.",
      benefits: [
        "Eliminate data silos",
        "Real-time financial insights",
        "Improved decision-making",
        "Reduced reconciliation efforts",
        "Enhanced data governance",
      ],
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
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Tailored financial technology solutions for your industry and specific business needs
              </p>
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-16 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Industry Solutions
                </span>
              </h2>
              <p className="text-gray-300">
                Our financial technology solutions are tailored to meet the specific needs of different industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-xl p-8 border border-gray-800 shadow-xl hover:border-blue-500/50 transition-all duration-300"
                  id={index === 0 ? "banking" : index === 1 ? "enterprise" : index === 2 ? "smb" : "insurance"}
                >
                  <div className="mb-6">{industry.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{industry.name}</h3>
                  <p className="text-gray-400 mb-6">{industry.description}</p>

                  <h4 className="text-lg font-medium mb-4 text-blue-400">Key Benefits</h4>
                  <ul className="space-y-3 mb-8">
                    {industry.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <div
                          className={`${i % 2 === 0 ? "bg-blue-500/20" : "bg-purple-500/20"} p-1 rounded-full mr-3 mt-1`}
                        >
                          <Check className={`h-4 w-4 ${i % 2 === 0 ? "text-blue-400" : "text-purple-400"}`} />
                        </div>
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group">
                    Learn More
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Use Cases
                </span>
              </h2>
              <p className="text-gray-300">
                Discover how our solutions can address specific financial challenges and opportunities in your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-xl p-8 border border-gray-800 shadow-xl hover:border-blue-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-4 text-white">{useCase.title}</h3>
                  <p className="text-gray-400 mb-6">{useCase.description}</p>

                  <h4 className="text-lg font-medium mb-4 text-blue-400">Benefits</h4>
                  <ul className="space-y-3 mb-8">
                    {useCase.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <div
                          className={`${i % 2 === 0 ? "bg-blue-500/20" : "bg-purple-500/20"} p-1 rounded-full mr-3 mt-1`}
                        >
                          <Check className={`h-4 w-4 ${i % 2 === 0 ? "text-blue-400" : "text-purple-400"}`} />
                        </div>
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Custom Solutions */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 shadow-xl" id="custom">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4 text-white">Need a Custom Solution?</h3>
                  <p className="text-gray-300 mb-6">
                    Our team of experts can work with you to develop a custom solution tailored to your specific
                    business needs. We understand that every business is unique, and we're committed to delivering
                    solutions that address your specific challenges and opportunities.
                  </p>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group">
                    Contact Our Solutions Team
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <div className="md:w-1/3 bg-gray-900 rounded-lg p-6 border border-gray-800">
                  <div className="text-center">
                    <Building2 className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                    <h4 className="text-lg font-medium mb-2 text-white">Custom Development</h4>
                    <p className="text-gray-400">
                      From requirements gathering to implementation and support, we'll work with you every step of the
                      way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Success Stories
                </span>
              </h2>
              <p className="text-gray-300">
                See how our solutions have helped businesses like yours achieve their financial goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  company: "Global Bank Corp",
                  industry: "Banking",
                  challenge: "Manual reconciliation processes causing delays and errors",
                  solution: "Implemented automated reconciliation with real-time monitoring",
                  result: "Reduced reconciliation time by 85% and eliminated manual errors",
                },
                {
                  company: "Tech Innovations Inc",
                  industry: "Technology",
                  challenge: "Managing finances across multiple subsidiaries and countries",
                  solution: "Deployed multi-entity management solution with consolidated reporting",
                  result: "Streamlined month-end close by 60% and improved financial visibility",
                },
                {
                  company: "Retail Solutions Co",
                  industry: "Retail",
                  challenge: "Integrating payment systems with financial management",
                  solution: "Implemented integrated payment processing and financial management",
                  result: "Eliminated manual data entry and improved cash flow visibility",
                },
              ].map((story, index) => (
                <div key={index} className="bg-gray-900 rounded-xl p-8 border border-gray-800 shadow-xl">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400">
                      {story.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{story.company}</h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-400">Challenge</h4>
                      <p className="text-gray-300">{story.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400">Solution</h4>
                      <p className="text-gray-300">{story.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400">Result</h4>
                      <p className="text-gray-300">{story.result}</p>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full border-blue-500 text-blue-400">
                    Read Full Case Study
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to Find Your Solution?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our team today to discuss how our solutions can address your specific financial challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg">
                  Schedule a Consultation
                </Button>
                <Button variant="outline" className="border-blue-500 text-blue-400 px-8 py-6 text-lg">
                  View All Solutions
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

