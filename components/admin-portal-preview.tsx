"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Users, BarChart, Settings, Bell, Shield, Database, ArrowRight } from "lucide-react"

export function AdminPortalPreview() {
  const [activeTab, setActiveTab] = useState("dashboard")

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: <BarChart className="h-5 w-5" /> },
    { id: "users", label: "Users", icon: <Users className="h-5 w-5" /> },
    { id: "security", label: "Security", icon: <Shield className="h-5 w-5" /> },
    { id: "data", label: "Data", icon: <Database className="h-5 w-5" /> },
    { id: "notifications", label: "Notifications", icon: <Bell className="h-5 w-5" /> },
    { id: "settings", label: "Settings", icon: <Settings className="h-5 w-5" /> },
  ]

  return (
    <section className="py-20 bg-gray-950" id="pricing">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Powerful Admin Portal
              </span>
            </h2>
            <p className="text-gray-400 mb-6">
              Take control of your financial operations with our comprehensive admin portal. Manage users, configure
              settings, and ensure security compliance from a single interface.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Role-based access control",
                "Detailed audit logs",
                "Customizable security policies",
                "Automated compliance reporting",
                "Drag-and-drop report builder",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-purple-500 mr-3"></span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white group">
              Explore Admin Features
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-gray-800 rounded-xl p-4 border border-gray-700 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-white">Admin Portal</h3>
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
              </div>

              <div className="flex border-b border-gray-700 mb-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`flex items-center px-4 py-2 text-sm font-medium ${
                      activeTab === tab.id
                        ? "text-blue-400 border-b-2 border-blue-400"
                        : "text-gray-400 hover:text-gray-300"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.icon}
                    <span className="ml-2">{tab.label}</span>
                  </button>
                ))}
              </div>

              <div className="bg-gray-900 rounded-lg p-4">
                {activeTab === "dashboard" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: "Active Users", value: "2,458", change: "+12%" },
                        { label: "Transactions", value: "14.5K", change: "+8%" },
                        { label: "Revenue", value: "$85.2K", change: "+15%" },
                      ].map((stat, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg p-3">
                          <p className="text-gray-400 text-xs">{stat.label}</p>
                          <p className="text-white font-semibold">{stat.value}</p>
                          <p className="text-green-400 text-xs">{stat.change}</p>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-sm font-medium text-white">Recent Activity</h4>
                        <button className="text-blue-400 text-xs">View All</button>
                      </div>
                      <div className="space-y-2">
                        {[
                          "New user registered: John Doe",
                          "Payment processed: $1,250.00",
                          "Security alert: Login attempt from new location",
                          "System update completed successfully",
                        ].map((activity, index) => (
                          <div
                            key={index}
                            className="text-xs text-gray-300 py-1 border-b border-gray-700 last:border-0"
                          >
                            {activity}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab !== "dashboard" && (
                  <div className="h-48 flex items-center justify-center">
                    <p className="text-gray-400">
                      {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} content would be displayed here
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

