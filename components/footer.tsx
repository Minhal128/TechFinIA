import { AnimatedLogo } from "@/components/animated-logo"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Products",
      links: [
        { label: "Financial Management System", href: "/products/financial-management-system" },
        { label: "Payment Processing Platform", href: "/products/payment-processing-platform" },
        { label: "Security & Compliance Suite", href: "/products/security-compliance-suite" },
        { label: "API Integration Platform", href: "/products/api-integration-platform" },
        { label: "Fintech Suite (FTS)", href: "/products/fintech-suite" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "Banking & Financial Services", href: "/solutions/banking-financial-services" },
        { label: "Enterprise & Corporate", href: "/solutions/enterprise-corporate" },
        { label: "Small & Medium Businesses", href: "/solutions/small-medium-businesses" },
        { label: "Insurance", href: "/solutions/insurance" },
        { label: "Custom Solutions", href: "/solutions/custom-solutions" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "/resources#documentation" },
        { label: "Blog", href: "/resources#blog" },
        { label: "Guides & Tutorials", href: "/resources#guides" },
        { label: "Events", href: "/resources#events" },
        { label: "Developer Hub", href: "/resources#developer-hub" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Pricing", href: "/pricing" },
        { label: "Careers", href: "/about#careers" },
        { label: "Contact", href: "/contact" },
        { label: "Partners", href: "/about#partners" },
      ],
    },
  ]

  return (
    <footer className="bg-gray-950 border-t border-gray-800" id="about">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <AnimatedLogo />
            <p className="mt-4 text-gray-400 text-sm">
              Revolutionizing financial technology with cutting-edge solutions for businesses of all sizes.
            </p>
            <div className="mt-6 flex space-x-4">
              {["twitter", "linkedin", "facebook", "github"].map((social) => (
                <a key={social} href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-white font-medium mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; {currentYear} TechFinIA. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <select className="bg-gray-800 text-gray-400 text-sm rounded-md border border-gray-700 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  )
}

