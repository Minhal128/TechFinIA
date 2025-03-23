"use client"

import { useState, useEffect } from "react"
import { AnimatedLogo } from "@/components/animated-logo"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/80 backdrop-blur-md border-b border-blue-500/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <AnimatedLogo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Products", "Solutions", "Pricing", "Resources", "About"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-gray-300 hover:text-blue-400 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Buttons */}
          <div className="hidden md:flex items-center">
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              asChild
            >
              <Link href="/pricing">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-b border-blue-500/20 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              {["Products", "Solutions", "Pricing", "Resources", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-blue-400 transition-colors py-2 border-b border-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4">
                <Button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-full"
                  asChild
                >
                  <Link href="/pricing">Get Started</Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

