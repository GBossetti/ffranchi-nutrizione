import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ResourcesHero } from "@/components/resources/resources-hero"
import { ResourcesGrid } from "@/components/resources/resources-grid"
import { ResourcesCategories } from "@/components/resources/resources-categories"

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <ResourcesHero />
        <ResourcesCategories />
        <ResourcesGrid />
      </main>
      <Footer />
    </div>
  )
}
