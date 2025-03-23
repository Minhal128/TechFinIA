import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Video, BookOpen, Download, Calendar, Users } from "lucide-react"

export default function ResourcesPage() {
  const resources = [
    {
      title: "Getting Started with TechFinIA's Fintech Suite",
      type: "Guide",
      icon: <FileText className="h-6 w-6 text-blue-400" />,
      description: "A comprehensive guide to help you get started with our Fintech Suite.",
      cta: "Read Guide",
    },
    {
      title: "Financial Management Best Practices",
      type: "Whitepaper",
      icon: <BookOpen className="h-6 w-6 text-purple-400" />,
      description: "Learn best practices for financial management in the digital age.",
      cta: "Download Whitepaper",
    },
    {
      title: "API Integration Tutorial",
      type: "Video",
      icon: <Video className="h-6 w-6 text-blue-400" />,
      description: "Step-by-step tutorial on integrating our APIs with your existing systems.",
      cta: "Watch Video",
    },
    {
      title: "Financial Reporting Templates",
      type: "Templates",
      icon: <Download className="h-6 w-6 text-purple-400" />,
      description: "Ready-to-use templates for financial reporting and analysis.",
      cta: "Download Templates",
    },
    {
      title: "Security and Compliance Guide",
      type: "Guide",
      icon: <FileText className="h-6 w-6 text-blue-400" />,
      description: "Ensure your financial operations meet security and compliance standards.",
      cta: "Read Guide",
    },
    {
      title: "Cost Center Management Tutorial",
      type: "Video",
      icon: <Video className="h-6 w-6 text-purple-400" />,
      description: "Learn how to effectively manage cost centers in our Fintech Suite.",
      cta: "Watch Video",
    },
  ]

  const events = [
    {
      title: "Fintech Innovation Summit",
      date: "June 15-16, 2025",
      location: "Virtual Event",
      description:
        "Join us for our annual Fintech Innovation Summit, where we'll showcase the latest features and innovations in our Fintech Suite.",
      cta: "Register Now",
    },
    {
      title: "Financial Management Webinar",
      date: "July 8, 2025",
      location: "Online",
      description:
        "Learn how to optimize your financial management processes with our Fintech Suite in this interactive webinar.",
      cta: "Save Your Seat",
    },
    {
      title: "TechFinIA User Conference",
      date: "September 22-24, 2025",
      location: "San Francisco, CA",
      description:
        "Connect with other TechFinIA users, learn from experts, and get hands-on training at our annual user conference.",
      cta: "Learn More",
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
                  Resources
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Explore our library of resources to help you get the most out of our Fintech Suite
              </p>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12" id="guides">
              <h2 className="text-3xl font-bold mb-4 text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Knowledge Center
                </span>
              </h2>
              <p className="text-gray-300">
                Access guides, tutorials, whitepapers, and more to help you succeed with our Fintech Suite.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-xl p-6 border border-gray-800 shadow-xl hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {resource.icon}
                    <span className="ml-2 text-sm font-medium text-gray-400">{resource.type}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{resource.title}</h3>
                  <p className="text-gray-400 mb-6">{resource.description}</p>
                  <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white group">
                    {resource.cta}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              ))}
            </div>

            {/* Documentation */}
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 shadow-xl mb-16" id="documentation">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold mb-4 text-white">Documentation</h2>
                  <p className="text-gray-300 mb-6">
                    Comprehensive documentation for our Fintech Suite, including user guides, API references, and more.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {[
                      "User Guides",
                      "API Reference",
                      "Integration Guides",
                      "Release Notes",
                      "FAQs",
                      "Troubleshooting",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div
                          className={`${index % 2 === 0 ? "bg-blue-500/20" : "bg-purple-500/20"} p-1 rounded-full mr-3`}
                        >
                          <FileText className={`h-4 w-4 ${index % 2 === 0 ? "text-blue-400" : "text-purple-400"}`} />
                        </div>
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group">
                    Browse Documentation
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <div className="md:w-1/3 bg-gray-800 rounded-lg p-6 border border-gray-700" id="developer-hub">
                  <div className="text-center">
                    <BookOpen className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2 text-white">Developer Hub</h3>
                    <p className="text-gray-400 mb-4">
                      Access developer resources, including API documentation, SDKs, and code samples.
                    </p>
                    <Button variant="outline" className="border-blue-500 text-blue-400">
                      Visit Developer Hub
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Events */}
            <div className="max-w-4xl mx-auto" id="events">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Upcoming Events
                </span>
              </h2>

              <div className="space-y-6">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/4">
                        <div className="bg-gray-800 rounded-lg p-4 text-center">
                          <Calendar className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                          <p className="text-white font-medium">{event.date}</p>
                          <p className="text-gray-400 text-sm">{event.location}</p>
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
                        <p className="text-gray-400 mb-4">{event.description}</p>
                        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group">
                          {event.cta}
                          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12" id="blog">
              <h2 className="text-3xl font-bold mb-4 text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  From Our Blog
                </span>
              </h2>
              <p className="text-gray-300">
                Stay up-to-date with the latest news, insights, and best practices in financial technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: "The Future of Financial Management",
                  date: "May 15, 2025",
                  category: "Industry Trends",
                  excerpt:
                    "Explore the emerging trends and technologies that are shaping the future of financial management.",
                },
                {
                  title: "Optimizing Your Chart of Accounts",
                  date: "April 28, 2025",
                  category: "Best Practices",
                  excerpt: "Learn how to structure your chart of accounts for maximum efficiency and insight.",
                },
                {
                  title: "Securing Your Financial Data",
                  date: "April 10, 2025",
                  category: "Security",
                  excerpt: "Best practices for protecting your financial data from threats and breaches.",
                },
              ].map((post, index) => (
                <div key={index} className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl">
                  <div className="h-48 bg-gray-800"></div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-sm font-medium text-gray-400">{post.date}</span>
                      <span className="mx-2 text-gray-600">•</span>
                      <span className="text-sm font-medium text-blue-400">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{post.title}</h3>
                    <p className="text-gray-400 mb-6">{post.excerpt}</p>
                    <Button variant="outline" className="border-blue-500 text-blue-400 group">
                      Read More
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg">
                View All Blog Posts
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gray-900 rounded-xl p-8 border border-gray-800 shadow-xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold mb-4 text-white">Subscribe to Our Newsletter</h2>
                  <p className="text-gray-300 mb-6">
                    Stay up-to-date with the latest news, product updates, and insights from TechFinIA.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3">
                      Subscribe
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <Users className="h-24 w-24 text-blue-400" />
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

