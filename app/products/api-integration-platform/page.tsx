import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, RefreshCw, ChevronRight, Code, Layers, Zap, FileText } from "lucide-react"
import Link from "next/link"

export default function ApiIntegrationPlatformPage() {
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
              <span className="text-gray-300">API Integration Platform</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  API Integration Platform
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Seamless integration with existing systems through our comprehensive API platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group">
                  Request a Demo
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="border-blue-500 text-blue-400">
                  View Documentation
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
                <h2 className="text-3xl font-bold mb-6 text-white">Connect Your Systems Seamlessly</h2>
                <p className="text-gray-300 mb-6">
                  Our API Integration Platform provides a comprehensive solution for connecting your existing systems
                  with our financial services. With our RESTful APIs, SDKs, and webhooks, you can easily integrate our
                  services into your applications and workflows.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "RESTful API architecture",
                    "Comprehensive SDK support",
                    "Webhook notifications",
                    "Detailed documentation",
                    "Developer support",
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
                  <RefreshCw className="h-24 w-24 text-purple-400 opacity-50" />
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
                Our API Integration Platform offers a comprehensive set of features designed to make integration easy
                and efficient.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Code className="h-10 w-10 text-purple-400" />,
                  title: "RESTful APIs",
                  description: "Well-designed RESTful APIs for all our financial services with JSON response format.",
                },
                {
                  icon: <Layers className="h-10 w-10 text-blue-400" />,
                  title: "SDK Support",
                  description: "SDKs for popular programming languages including JavaScript, Python, Java, and more.",
                },
                {
                  icon: <Zap className="h-10 w-10 text-purple-400" />,
                  title: "Webhook Notifications",
                  description:
                    "Real-time notifications for important events via webhooks to keep your systems in sync.",
                },
                {
                  icon: <FileText className="h-10 w-10 text-blue-400" />,
                  title: "Comprehensive Documentation",
                  description:
                    "Detailed documentation with examples, guides, and API reference to help you integrate quickly.",
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

        {/* API Example */}
        <section className="py-16 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-white text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  API Example
                </span>
              </h2>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mb-8">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-500/20 p-2 rounded-full mr-3">
                    <Code className="h-5 w-5 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-medium text-white">Request Example</h3>
                </div>
                <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm text-gray-300">
                  {`// JavaScript Example
fetch('https://api.techfinia.com/v1/transactions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    amount: 100.00,
    currency: 'USD',
    description: 'Payment for services',
    customer_id: 'cus_123456789'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`}
                </pre>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500/20 p-2 rounded-full mr-3">
                    <Code className="h-5 w-5 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-medium text-white">Response Example</h3>
                </div>
                <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm text-gray-300">
                  {`{
  "id": "txn_987654321",
  "object": "transaction",
  "amount": 100.00,
  "currency": "USD",
  "description": "Payment for services",
  "customer_id": "cus_123456789",
  "status": "succeeded",
  "created": 1625097600,
  "metadata": {}
}`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Process */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-white text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Integration Process
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  {
                    step: "1",
                    title: "Register for API Access",
                    description: "Sign up for an account and request API access credentials.",
                  },
                  {
                    step: "2",
                    title: "Explore Documentation",
                    description: "Review our comprehensive documentation and API reference.",
                  },
                  {
                    step: "3",
                    title: "Develop & Test",
                    description: "Develop your integration and test it in our sandbox environment.",
                  },
                  {
                    step: "4",
                    title: "Implement Webhooks",
                    description: "Set up webhook endpoints to receive real-time notifications.",
                  },
                  {
                    step: "5",
                    title: "Security Review",
                    description: "Complete a security review to ensure your integration is secure.",
                  },
                  {
                    step: "6",
                    title: "Go Live",
                    description: "Move your integration to production and start processing real transactions.",
                  },
                ].map((step, index) => (
                  <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                      <span className="text-white font-bold">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
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
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to Integrate?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our team today to learn more about our API Integration Platform and how it can help you connect
                your systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg">
                  Request API Access
                </Button>
                <Button variant="outline" className="border-blue-500 text-blue-400 px-8 py-6 text-lg">
                  View Documentation
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

