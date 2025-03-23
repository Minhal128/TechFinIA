"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

export function AnimatedLogo() {
  const iaRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const iaElement = iaRef.current
    if (!iaElement) return

    // Animation for the "IA" part
    const animateIA = () => {
      // Glitch effect animation
      iaElement.classList.add("animate-glitch")

      setTimeout(() => {
        iaElement.classList.remove("animate-glitch")

        // Wait before starting the next animation cycle
        setTimeout(animateIA, 5000)
      }, 1000)
    }

    animateIA()

    return () => {
      iaElement.classList.remove("animate-glitch")
    }
  }, [])

  return (
    <Link href="/" className="flex items-center">
      <div className="relative h-10 flex items-center">
        <span className="text-blue-500 font-bold text-2xl">TechFin</span>
        <span ref={iaRef} className="text-red-500 font-bold text-2xl relative">
          IA
        </span>
      </div>
    </Link>
  )
}

