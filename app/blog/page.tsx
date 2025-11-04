import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BlogGrid } from "@/components/blog/blog-grid"
import { BlogHero } from "@/components/blog/blog-hero"
import { Newsletter } from "@/components/blog/newsletter"

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <BlogHero />
        <BlogGrid />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
