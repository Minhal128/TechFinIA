"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Shield, BarChart3, Zap, Globe, Lock, RefreshCw } from "lucide-react"

const features = [
  {
    icon: <BarChart3 className="h-10 w-10 text-blue-400" />,
    title: "Advanced Analytics",
    description: "Real-time financial insights with AI-powered predictive analytics and customizable dashboards.",
  },
  {
    icon: <Shield className="h-10 w-10 text-purple-400" />,
    title: "Enterprise Security",
    description: "Bank-grade encryption and multi-factor authentication to keep your financial data secure.",
  },
  {
    icon: <Zap className="h-10 w-10 text-blue-400" />,
    title: "Lightning Fast API",
    description: "High-performance API with 99.99% uptime and sub-millisecond response times.",
  },
  {
    icon: <Globe className="h-10 w-10 text-purple-400" />,
    title: "Global Compliance",
    description: "Built-in compliance with financial regulations across multiple jurisdictions.",
  },
  {
    icon: <Lock className="h-10 w-10 text-blue-400" />,
    title: "Secure Transactions",
    description: "End-to-end encrypted transaction processing with real-time fraud detection.",
  },
  {
    icon: <RefreshCw className="h-10 w-10 text-purple-400" />,
    title: "Seamless Integration",
    description: "Connect with existing financial systems through our extensive library of pre-built connectors.",
  },
]

export function FeatureSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-950" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Powerful Features
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our Fintech Suite combines cutting-edge technology with intuitive design to deliver a comprehensive
            financial management solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative p-6 rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl -z-10" />
              )}
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

