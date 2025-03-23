"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function DashboardPreview() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 600
    canvas.height = 300

    // Mock financial data for the chart
    const data = [65, 59, 80, 81, 56, 55, 40, 45, 60, 75, 85, 90]

    // Chart configuration
    const chartConfig = {
      padding: 40,
      gridLines: 5,
      pointRadius: 4,
      lineWidth: 3,
      animationSpeed: 0.05,
      animationProgress: 0,
      targetAnimationProgress: 1,
    }

    // Animation loop
    let animationFrameId: number

    const drawChart = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update animation progress
      if (chartConfig.animationProgress < chartConfig.targetAnimationProgress) {
        chartConfig.animationProgress += chartConfig.animationSpeed
      }

      // Draw grid lines
      ctx.strokeStyle = "rgba(100, 150, 255, 0.1)"
      ctx.lineWidth = 1

      for (let i = 0; i <= chartConfig.gridLines; i++) {
        const y = chartConfig.padding + (canvas.height - chartConfig.padding * 2) * (i / chartConfig.gridLines)

        ctx.beginPath()
        ctx.moveTo(chartConfig.padding, y)
        ctx.lineTo(canvas.width - chartConfig.padding, y)
        ctx.stroke()
      }

      // Draw x-axis labels (months)
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
      ctx.font = "10px Arial"
      ctx.textAlign = "center"

      const xStep = (canvas.width - chartConfig.padding * 2) / (months.length - 1)
      months.forEach((month, i) => {
        const x = chartConfig.padding + xStep * i
        ctx.fillText(month, x, canvas.height - chartConfig.padding / 2)
      })

      // Draw line chart
      ctx.strokeStyle = "rgba(59, 130, 246, 0.8)"
      ctx.lineWidth = chartConfig.lineWidth
      ctx.lineJoin = "round"

      ctx.beginPath()

      const maxValue = Math.max(...data)
      const animatedData = data.map((value) => value * chartConfig.animationProgress)

      animatedData.forEach((value, i) => {
        const x = chartConfig.padding + xStep * i
        const y = chartConfig.padding + (canvas.height - chartConfig.padding * 2) * (1 - value / maxValue)

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      })

      ctx.stroke()

      // Draw gradient under the line
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.3)")
      gradient.addColorStop(1, "rgba(59, 130, 246, 0)")

      ctx.fillStyle = gradient
      ctx.beginPath()

      // Start from bottom left
      ctx.moveTo(chartConfig.padding, canvas.height - chartConfig.padding)

      // Draw the line path again
      animatedData.forEach((value, i) => {
        const x = chartConfig.padding + xStep * i
        const y = chartConfig.padding + (canvas.height - chartConfig.padding * 2) * (1 - value / maxValue)

        if (i === 0) {
          ctx.lineTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      })

      // Close the path to bottom right
      ctx.lineTo(canvas.width - chartConfig.padding, canvas.height - chartConfig.padding)
      ctx.closePath()
      ctx.fill()

      // Draw points
      ctx.fillStyle = "#3b82f6"

      animatedData.forEach((value, i) => {
        const x = chartConfig.padding + xStep * i
        const y = chartConfig.padding + (canvas.height - chartConfig.padding * 2) * (1 - value / maxValue)

        ctx.beginPath()
        ctx.arc(x, y, chartConfig.pointRadius, 0, Math.PI * 2)
        ctx.fill()

        // Draw point glow
        ctx.beginPath()
        ctx.arc(x, y, chartConfig.pointRadius + 2, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(59, 130, 246, 0.3)"
        ctx.fill()

        // Reset fill style
        ctx.fillStyle = "#3b82f6"
      })

      // Continue animation if needed
      if (chartConfig.animationProgress < chartConfig.targetAnimationProgress) {
        animationFrameId = requestAnimationFrame(drawChart)
      }
    }

    // Start animation
    drawChart()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 bg-gray-900" id="solutions">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Real-time Financial Dashboard
              </span>
            </h2>
            <p className="text-gray-400 mb-6">
              Monitor your financial performance with our intuitive dashboard. Get real-time insights, track key
              metrics, and make data-driven decisions with confidence.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Interactive data visualization",
                "Customizable widgets and reports",
                "AI-powered financial forecasting",
                "Automated anomaly detection",
                "Multi-currency support",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-blue-500 mr-3"></span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group">
              Explore Dashboard
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-gray-800 rounded-xl p-4 border border-gray-700 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-white">Financial Performance</h3>
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <canvas ref={canvasRef} className="w-full h-auto"></canvas>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Revenue", value: "$1.2M", change: "+12.5%" },
                  { label: "Expenses", value: "$450K", change: "-3.2%" },
                  { label: "Profit", value: "$750K", change: "+18.7%" },
                ].map((stat, index) => (
                  <div key={index} className="bg-gray-900 rounded-lg p-3">
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                    <p className="text-white font-semibold text-lg">{stat.value}</p>
                    <p className={`text-sm ${stat.change.startsWith("+") ? "text-green-400" : "text-red-400"}`}>
                      {stat.change}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

