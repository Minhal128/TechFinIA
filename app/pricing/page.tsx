import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, X } from "lucide-react"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses just getting started with financial management.",
      price: "$499",
      period: "per month",
      features: [
        { included: true, text: "Chart of Accounts Management" },
        { included: true, text: "Basic JV Postings" },
        { included: true, text: "Up to 3 Cost Centers" },
        { included: true, text: "Standard Financial Reports" },
        { included: true, text: "Email Support" },
        { included: false, text: "API Access" },
        { included: false, text: "Custom Reports" },
        { included: false, text: "Multi-entity Support" },
        { included: false, text: "Advanced Security Features" },
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses with more complex financial needs.",
      price: "$999",
      period: "per month",
      features: [
        { included: true, text: "Chart of Accounts Management" },
        { included: true, text: "Advanced JV Postings" },
        { included: true, text: "Up to 10 Cost Centers" },
        { included: true, text: "Advanced Financial Reports" },
        { included: true, text: "Priority Email & Phone Support" },
        { included: true, text: "Basic API Access" },
        { included: true, text: "1 Custom Report" },
        { included: false, text: "Multi-entity Support" },
        { included: false, text: "Advanced Security Features" },
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Comprehensive solution for large organizations with complex requirements.",
      price: "Custom",
      period: "contact for pricing",
      features: [
        { included: true, text: "Chart of Accounts Management" },
        { included: true, text: "Advanced JV Postings" },
        { included: true, text: "Unlimited Cost Centers" },
        { included: true, text: "Comprehensive Financial Reports" },
        { included: true, text: "24/7 Dedicated Support" },
        { included: true, text: "Full API Access" },
        { included: true, text: "Up to 3 Custom Reports" },
        { included: true, text: "Multi-entity Support" },
        { included: true, text: "Advanced Security Features" },
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  const faqs = [
    {
      question: "How does the pricing work?",
      answer:
        "Our pricing is based on a monthly subscription model. We offer three main plans: Starter, Professional, and Enterprise. Each plan includes different features and capabilities to meet the needs of businesses of different sizes and complexities.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. When upgrading, the new features will be immediately available. When downgrading, the changes will take effect at the start of your next billing cycle.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial for our Starter and Professional plans. This allows you to explore the features and functionality before committing to a subscription.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. For Enterprise plans, we also offer invoice-based payment options.",
    },
    {
      question: "Are there any long-term contracts?",
      answer:
        "Our Starter and Professional plans are available on a month-to-month basis with no long-term commitment. Enterprise plans typically involve an annual contract, but we can customize this based on your needs.",
    },
    {
      question: "Do you offer discounts for annual payments?",
      answer:
        "Yes, we offer a 10% discount for annual payments on our Starter and Professional plans. This can result in significant savings over the course of a year.",
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
                  Pricing
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Transparent pricing plans designed to scale with your business
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gray-900 rounded-xl p-8 border ${
                    plan.popular ? "border-blue-500" : "border-gray-800"
                  } shadow-xl`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <span className="inline-block px-4 py-1 rounded-full text-xs font-medium bg-blue-500 text-white">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <h2 className="text-2xl font-bold mb-2 text-white">{plan.name}</h2>
                  <p className="text-gray-400 mb-6 h-12">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        {feature.included ? (
                          <div className="bg-blue-500/20 p-1 rounded-full mr-3 mt-1">
                            <Check className="h-4 w-4 text-blue-400" />
                          </div>
                        ) : (
                          <div className="bg-gray-800 p-1 rounded-full mr-3 mt-1">
                            <X className="h-4 w-4 text-gray-600" />
                          </div>
                        )}
                        <span className={feature.included ? "text-gray-300" : "text-gray-500"}>{feature.text}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        : "bg-gray-800 hover:bg-gray-700"
                    } text-white group`}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              ))}
            </div>

            {/* Enterprise Custom Pricing */}
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 shadow-xl mb-16">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold mb-4 text-white">Need a Custom Solution?</h2>
                  <p className="text-gray-300 mb-6">
                    Our Enterprise plan can be customized to meet your specific needs. Contact our sales team to discuss
                    your requirements and get a custom quote.
                  </p>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group">
                    Contact Sales
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <div className="md:w-1/3 bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <div className="text-center">
                    <h3 className="text-lg font-medium mb-2 text-white">Enterprise Features</h3>
                    <ul className="space-y-2 text-left">
                      {[
                        "Dedicated account manager",
                        "Custom implementation",
                        "Advanced security features",
                        "Custom integrations",
                        "SLA guarantees",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <div className="bg-blue-500/20 p-1 rounded-full mr-3">
                            <Check className="h-3 w-3 text-blue-400" />
                          </div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Frequently Asked Questions
                </span>
              </h2>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                    <h3 className="text-lg font-medium mb-2 text-white">{faq.question}</h3>
                    <p className="text-gray-400">{faq.answer}</p>
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
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Choose the plan that's right for your business and start transforming your financial operations today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg">
                  Start Free Trial
                </Button>
                <Button variant="outline" className="border-blue-500 text-blue-400 px-8 py-6 text-lg">
                  Schedule a Demo
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

