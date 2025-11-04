import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, Share2 } from "lucide-react"
import Link from "next/link"

// Mock resource data
const resource = {
  id: 1,
  title: "Weekly Meal Planner Template",
  description:
    "Plan your meals for the week with this easy-to-use template. Includes grocery list section and space for tracking your nutrition goals.",
  category: "Meal Plans",
  type: "PDF",
  size: "2.4 MB",
  downloads: 1243,
  image: "/placeholder.svg?key=meal-planner",
  features: [
    "Weekly meal planning grid",
    "Integrated grocery shopping list",
    "Nutrition goals tracker",
    "Recipe notes section",
    "Printable format",
  ],
  howToUse: [
    "Download and print the template or use it digitally",
    "Fill in your planned meals for each day of the week",
    "Add ingredients to the grocery list as you plan",
    "Track your nutrition goals and progress",
    "Adjust and refine your plan as needed",
  ],
}

export default function ResourceDetailPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Button variant="ghost" className="gap-2 mb-6" asChild>
              <Link href="/resources">
                <ArrowLeft className="h-4 w-4" />
                Back to Resources
              </Link>
            </Button>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Resource Preview */}
              <div>
                <div className="aspect-[3/4] rounded-xl bg-muted overflow-hidden border-2 mb-4">
                  <img
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1 gap-2">
                    <Download className="h-4 w-4" />
                    Download Resource
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Resource Details */}
              <div className="space-y-6">
                <div>
                  <Badge variant="secondary" className="mb-4">
                    {resource.category}
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tight text-balance mb-4">{resource.title}</h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">{resource.description}</p>
                </div>

                <Card>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold">{resource.type}</div>
                        <div className="text-sm text-muted-foreground">Format</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{resource.size}</div>
                        <div className="text-sm text-muted-foreground">File Size</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{resource.downloads.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">Downloads</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div>
                  <h2 className="text-2xl font-bold mb-4">What's Included</h2>
                  <ul className="space-y-2">
                    {resource.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">How to Use</h2>
                  <ol className="space-y-3">
                    {resource.howToUse.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
