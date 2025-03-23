"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Check } from "lucide-react"

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  return (
    <section className="py-20 bg-gray-900" id="resources">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Get in Touch
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions about our Fintech Suite? Our team is ready to help you transform your financial operations.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 h-full">
              <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">contact@techfinia.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Address</p>
                    <p className="text-white">123 Fintech Avenue, Suite 500</p>
                    <p className="text-white">San Francisco, CA 94103</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-lg font-medium mb-4 text-white">Follow Us</h4>
                <div className="flex space-x-4">
                  {["twitter", "linkedin", "facebook", "github"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition-colors"
                    >
                      <span className="sr-only">{social}</span>
                      <div className="h-5 w-5 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 text-white">Send a Message</h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="bg-green-500/20 p-4 rounded-full mb-4">
                    <Check className="h-8 w-8 text-green-400" />
                  </div>
                  <h4 className="text-xl font-medium text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-400 text-center">
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                  <Button
                    className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
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
                        className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-500"
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
                        className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="How can we help you?"
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-500"
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
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-500 min-h-[120px]"
                      required
                    />
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}

