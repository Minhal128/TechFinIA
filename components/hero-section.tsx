"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle system
    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
    }[] = []

    const createParticles = () => {
      const particleCount = Math.floor(window.innerWidth / 10)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: i % 2 === 0 ? "#3b82f6" : "#a855f7", // Blue and purple
        })
      }
    }

    createParticles()

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      })

      // Draw connections between nearby particles
      particles.forEach((particle, i) => {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particle.x - particles[j].x
          const dy = particle.y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(100, 150, 255, ${0.2 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-text-shadow">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Next-Gen Financial Technology
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Revolutionize your financial operations with TechFinIA's cutting-edge Fintech Suite
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg group"
              asChild
            >
              <Link href="/pricing">
                Request a Demo
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button variant="outline" className="border-blue-500 text-blue-400 px-8 py-6 text-lg" asChild>
              <Link href="/solutions">Explore Solutions</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-blue-400 h-8 w-8" />
      </div>
    </section>
  )
}

