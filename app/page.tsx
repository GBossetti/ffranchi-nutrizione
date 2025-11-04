import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/landing/hero"
import { About } from "@/components/landing/about"
import { Services } from "@/components/landing/services"
import { Testimonials } from "@/components/landing/testimonials"
import { CTA } from "@/components/landing/cta"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
