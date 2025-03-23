"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Check,
  ChevronDown,
  ChevronRight,
  Linkedin,
  Twitter,
  Facebook,
  Github,
} from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState("general")
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      // Scroll to top of form
      window.scrollTo({
        top: document.getElementById("contact-form")?.offsetTop || 0,
        behavior: "smooth",
      })
    }, 1000)
  }

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "What are your business hours?",
      answer:
        "Our support team is available Monday through Friday from 9:00 AM to 6:00 PM EST. For urgent matters outside of these hours, please use our emergency contact form.",
    },
    {
      question: "How quickly can I expect a response?",
      answer:
        "We strive to respond to all inquiries within 24 business hours. For urgent matters, our premium support customers receive priority response times.",
    },
    {
      question: "Do you offer on-site support?",
      answer:
        "Yes, we offer on-site support for enterprise customers. Please contact our sales team to discuss your specific requirements and arrange for on-site support.",
    },
    {
      question: "How can I schedule a product demo?",
      answer:
        "You can schedule a product demo by filling out the contact form on this page and selecting 'Request a Demo' from the inquiry type dropdown. One of our product specialists will contact you to arrange a convenient time.",
    },
    {
      question: "Do you have international offices?",
      answer:
        "Yes, we have offices in North America, Europe, and Asia. Please see our office locations section for specific addresses and contact information.",
    },
  ]

  const offices = [
    {
      name: "Headquarters",
      address: "123 Fintech Avenue, Suite 500",
      city: "San Francisco, CA 94103",
      country: "United States",
      phone: "+1 (555) 123-4567",
      email: "hq@techfinia.com",
      hours: "9:00 AM - 6:00 PM PST",
    },
    {
      name: "European Office",
      address: "45 Financial Street",
      city: "London, EC2V 8AE",
      country: "United Kingdom",
      phone: "+44 20 7123 4567",
      email: "europe@techfinia.com",
      hours: "9:00 AM - 6:00 PM GMT",
    },
    {
      name: "Asia Pacific Office",
      address: "888 Finance Tower, Level 32",
      city: "Singapore, 018983",
      country: "Singapore",
      phone: "+65 6123 4567",
      email: "apac@techfinia.com",
      hours: "9:00 AM - 6:00 PM SGT",
    },
  ]

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
              <span className="text-gray-300">Contact Us</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Contact Us
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Have questions or need assistance? Our team is here to help you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="py-16 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Contact Form */}
              <div className="lg:w-2/3" id="contact-form">
                <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 shadow-xl">
                  <h2 className="text-2xl font-bold mb-6 text-white">Get in Touch</h2>

                  {/* Contact Form Tabs */}
                  <div className="flex border-b border-gray-800 mb-6">
                    {[
                      { id: "general", label: "General Inquiry" },
                      { id: "sales", label: "Sales" },
                      { id: "support", label: "Technical Support" },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        className={`px-4 py-2 text-sm font-medium ${
                          activeTab === tab.id
                            ? "text-blue-400 border-b-2 border-blue-400"
                            : "text-gray-400 hover:text-gray-300"
                        }`}
                        onClick={() => setActiveTab(tab.id)}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-12">
                      <div className="bg-green-500/20 p-4 rounded-full mb-4">
                        <Check className="h-8 w-8 text-green-400" />
                      </div>
                      <h3 className="text-xl font-medium text-white mb-2">Message Sent!</h3>
                      <p className="text-gray-400 text-center mb-6">
                        Thank you for reaching out. Our team will get back to you shortly.
                      </p>
                      <Button
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                            Name
                          </label>
                          <Input
                            id="name"
                            placeholder="Your name"
                            className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                            Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-1">
                          Company (Optional)
                        </label>
                        <Input
                          id="company"
                          placeholder="Your company name"
                          className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          placeholder="How can we help you?"
                          className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Your message..."
                          className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 min-h-[150px]"
                          required
                        />
                      </div>

                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="privacy"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-700 rounded bg-gray-800 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <label htmlFor="privacy" className="ml-2 text-sm text-gray-400">
                          I agree to the{" "}
                          <Link href="/privacy-policy" className="text-blue-400 hover:underline">
                            Privacy Policy
                          </Link>{" "}
                          and consent to being contacted regarding my inquiry.
                        </label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                      >
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  )}
                </div>
              </div>

              {/* Contact Information */}
              <div className="lg:w-1/3">
                <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 shadow-xl mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
                        <Mail className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Email</p>
                        <a
                          href="mailto:contact@techfinia.com"
                          className="text-white hover:text-blue-400 transition-colors"
                        >
                          contact@techfinia.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
                        <Phone className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Phone</p>
                        <a href="tel:+15551234567" className="text-white hover:text-blue-400 transition-colors">
                          +1 (555) 123-4567
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
                        <MapPin className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Headquarters</p>
                        <p className="text-white">123 Fintech Avenue, Suite 500</p>
                        <p className="text-white">San Francisco, CA 94103</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
                        <Clock className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Business Hours</p>
                        <p className="text-white">Monday - Friday</p>
                        <p className="text-white">9:00 AM - 6:00 PM EST</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 shadow-xl">
                  <h2 className="text-xl font-bold mb-4 text-white">Connect With Us</h2>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-gray-800 hover:bg-blue-500/20 p-3 rounded-full transition-colors">
                      <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400" />
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a href="#" className="bg-gray-800 hover:bg-blue-500/20 p-3 rounded-full transition-colors">
                      <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-400" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href="#" className="bg-gray-800 hover:bg-blue-500/20 p-3 rounded-full transition-colors">
                      <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400" />
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a href="#" className="bg-gray-800 hover:bg-blue-500/20 p-3 rounded-full transition-colors">
                      <Github className="h-5 w-5 text-gray-400 hover:text-blue-400" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-white text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Our Offices
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold mb-4 text-white">{office.name}</h3>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-gray-300">{office.address}</p>
                          <p className="text-gray-300">{office.city}</p>
                          <p className="text-gray-300">{office.country}</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Phone className="h-5 w-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                        <a
                          href={`tel:${office.phone.replace(/\D/g, "")}`}
                          className="text-gray-300 hover:text-blue-400 transition-colors"
                        >
                          {office.phone}
                        </a>
                      </div>

                      <div className="flex items-start">
                        <Mail className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                        <a
                          href={`mailto:${office.email}`}
                          className="text-gray-300 hover:text-blue-400 transition-colors"
                        >
                          {office.email}
                        </a>
                      </div>

                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-gray-300">{office.hours}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 shadow-xl">
                <h2 className="text-2xl font-bold mb-6 text-white">Find Us</h2>

                {/* Map Placeholder - In a real implementation, you would integrate with Google Maps or another mapping service */}
                <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                    <p className="text-gray-400 mb-4">Interactive map would be displayed here</p>
                    <Button variant="outline" className="border-blue-500 text-blue-400">
                      Get Directions
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-white text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Frequently Asked Questions
                </span>
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
                    <button
                      className="flex justify-between items-center w-full p-6 text-left"
                      onClick={() => toggleFaq(index)}
                    >
                      <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                      <ChevronDown
                        className={`h-5 w-5 text-blue-400 transition-transform ${
                          expandedFaq === index ? "transform rotate-180" : ""
                        }`}
                      />
                    </button>

                    {expandedFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-300">{faq.answer}</p>
                      </div>
                    )}
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
                Contact our team today to learn more about our solutions and how they can benefit your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg">
                  Schedule a Demo
                </Button>
                <Button variant="outline" className="border-blue-500 text-blue-400 px-8 py-6 text-lg">
                  View Solutions
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

