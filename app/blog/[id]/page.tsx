import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import { Newsletter } from "@/components/blog/newsletter"

const blogPost = {
  id: 1,
  title: "Comprendere i Macronutrienti: Una Guida Completa",
  category: "Scienza della Nutrizione",
  date: "2024-01-15",
  readTime: "8 min di lettura",
  image: "/healthy-food-macronutrients.jpg",
  content: `
    <h2>Cosa Sono i Macronutrienti?</h2>
    <p>I macronutrienti sono i nutrienti di cui il tuo corpo ha bisogno in grandi quantità per funzionare correttamente. Forniscono energia e supportano varie funzioni corporee. I tre principali macronutrienti sono proteine, carboidrati e grassi.</p>
    
    <h2>Proteine: I Mattoni della Vita</h2>
    <p>Le proteine sono essenziali per costruire e riparare i tessuti, produrre enzimi e ormoni, e supportare la funzione immunitaria. Buone fonti includono:</p>
    <ul>
      <li>Carni magre, pollame e pesce</li>
      <li>Uova e latticini</li>
      <li>Legumi e fagioli</li>
      <li>Noci e semi</li>
      <li>Tofu e tempeh</li>
    </ul>
    
    <h2>Carboidrati: La Tua Fonte Primaria di Energia</h2>
    <p>I carboidrati sono la fonte di energia preferita dal tuo corpo, specialmente per il cervello e durante l'attività fisica. Concentrati sui carboidrati complessi come:</p>
    <ul>
      <li>Cereali integrali (riso integrale, quinoa, avena)</li>
      <li>Frutta e verdura</li>
      <li>Legumi</li>
      <li>Patate dolci</li>
    </ul>
    
    <h2>Grassi: Essenziali per la Salute</h2>
    <p>I grassi sani sono cruciali per la produzione di ormoni, l'assorbimento dei nutrienti e la salute del cervello. Includi fonti come:</p>
    <ul>
      <li>Avocado</li>
      <li>Noci e semi</li>
      <li>Olio d'oliva e altri oli salutari</li>
      <li>Pesce grasso (salmone, sgombro, sardine)</li>
    </ul>
    
    <h2>Trovare il Tuo Equilibrio</h2>
    <p>Il rapporto ideale di macronutrienti varia in base a fattori individuali come il livello di attività, gli obiettivi di salute e la salute metabolica. Un punto di partenza generale per la maggior parte delle persone è:</p>
    <ul>
      <li>Proteine: 20-30% delle calorie totali</li>
      <li>Carboidrati: 45-55% delle calorie totali</li>
      <li>Grassi: 20-30% delle calorie totali</li>
    </ul>
    
    <h2>Conclusione</h2>
    <p>Comprendere i macronutrienti è fondamentale per fare scelte alimentari informate. Ricorda, la qualità conta tanto quanto la quantità. Concentrati su alimenti integrali e minimamente processati per ottenere il massimo beneficio nutrizionale da ogni macronutriente.</p>
  `,
}

export default function BlogPostPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <article>
          {/* Hero Image */}
          <div className="relative h-[400px] md:h-[500px] bg-muted">
            <img
              src={blogPost.image || "/placeholder.svg"}
              alt={blogPost.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="container mx-auto px-4 py-12">
            <div className="mx-auto max-w-3xl">
              <Button variant="ghost" className="gap-2 mb-6" asChild>
                <Link href="/blog">
                  <ArrowLeft className="h-4 w-4" />
                  Torna al Blog
                </Link>
              </Button>

              <Badge variant="secondary" className="mb-4">
                {blogPost.category}
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight text-balance md:text-5xl mb-6">{blogPost.title}</h1>

              <div className="flex items-center justify-between mb-8 pb-8 border-b">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(blogPost.date).toLocaleDateString("it-IT", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{blogPost.readTime}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Share2 className="h-4 w-4" />
                  Condividi
                </Button>
              </div>

              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: blogPost.content }} />

              <div className="mt-12 pt-8 border-t">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 overflow-hidden">
                    <img
                      src="/images/design-mode/image.png"
                      alt="Dott.ssa Federica Franchi"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Dott.ssa Federica Franchi</p>
                    <p className="text-sm text-muted-foreground">Nutrizionista Certificata & Esperta di Benessere</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
