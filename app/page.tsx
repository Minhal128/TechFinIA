import { HeroSection } from "@/components/hero-section"
import { Navbar } from "@/components/navbar"
import { FeatureSection } from "@/components/feature-section"
import { DashboardPreview } from "@/components/dashboard-preview"
import { AdminPortalPreview } from "@/components/admin-portal-preview"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <DashboardPreview />
      <AdminPortalPreview />
      <ContactSection />
      <Footer />
    </div>
  )
}

