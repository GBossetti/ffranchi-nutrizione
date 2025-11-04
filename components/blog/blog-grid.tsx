"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const categories = [
  "Tutti",
  "Scienza della Nutrizione",
  "Ricette",
  "Gestione del Peso",
  "Nutrizione Sportiva",
  "Consigli Benessere",
]

const blogPosts = [
  {
    id: 1,
    title: "Comprendere i Macronutrienti: Una Guida Completa",
    excerpt:
      "Scopri come proteine, carboidrati e grassi lavorano insieme per alimentare il tuo corpo e supportare una salute ottimale.",
    category: "Scienza della Nutrizione",
    date: "2024-01-15",
    readTime: "8 min di lettura",
    image: "/healthy-food-macronutrients.jpg",
  },
  {
    id: 2,
    title: "10 Idee per Colazioni Proteiche",
    excerpt:
      "Inizia la giornata nel modo giusto con queste deliziose ricette per colazioni ricche di proteine che ti mantengono energico.",
    category: "Ricette",
    date: "2024-01-12",
    readTime: "5 min di lettura",
    image: "/protein-breakfast-bowl.jpg",
  },
  {
    id: 3,
    title: "La Verità sul Digiuno Intermittente",
    excerpt: "Separare i fatti dalla finzione sul digiuno intermittente e capire se è adatto a te.",
    category: "Gestione del Peso",
    date: "2024-01-10",
    readTime: "10 min di lettura",
    image: "/intermittent-fasting-clock.jpg",
  },
  {
    id: 4,
    title: "Nutrizione Pre e Post Allenamento per Atleti",
    excerpt: "Ottimizza le tue prestazioni e il recupero con scelte alimentari strategiche e tempistiche nutrizionali.",
    category: "Nutrizione Sportiva",
    date: "2024-01-08",
    readTime: "7 min di lettura",
    image: "/athlete-nutrition-meal.jpg",
  },
  {
    id: 5,
    title: "Costruire un Piatto Bilanciato: Il Metodo Semplice",
    excerpt:
      "Padroneggia l'arte del controllo delle porzioni e dell'alimentazione equilibrata con questa guida visiva facile da seguire.",
    category: "Consigli Benessere",
    date: "2024-01-05",
    readTime: "6 min di lettura",
    image: "/balanced-healthy-plate.jpg",
  },
  {
    id: 6,
    title: "Salute Intestinale: Perché È Più Importante di Quanto Pensi",
    excerpt:
      "Scopri la connessione tra salute intestinale e benessere generale, più gli alimenti per supportare il tuo microbioma.",
    category: "Scienza della Nutrizione",
    date: "2024-01-03",
    readTime: "9 min di lettura",
    image: "/gut-health-probiotics.jpg",
  },
  {
    id: 7,
    title: "Idee Veloci e Salutari per Meal Prep",
    excerpt: "Risparmia tempo e mangia bene con queste strategie pratiche di meal prep per professionisti impegnati.",
    category: "Ricette",
    date: "2024-01-01",
    readTime: "8 min di lettura",
    image: "/meal-prep-containers.jpg",
  },
  {
    id: 8,
    title: "Perdita di Peso Sostenibile: Un Approccio a Lungo Termine",
    excerpt: "Dimentica le diete drastiche. Impara come perdere peso in modo sostenibile e mantenerlo per sempre.",
    category: "Gestione del Peso",
    date: "2023-12-28",
    readTime: "11 min di lettura",
    image: "/sustainable-weight-loss.jpg",
  },
  {
    id: 9,
    title: "Strategie di Idratazione per Prestazioni Ottimali",
    excerpt:
      "Scopri come una corretta idratazione influisce sulle prestazioni atletiche e sui livelli di energia quotidiana.",
    category: "Nutrizione Sportiva",
    date: "2023-12-25",
    readTime: "6 min di lettura",
    image: "/hydration-water-bottle.jpg",
  },
]

export function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState("Tutti")

  const filteredPosts =
    selectedCategory === "Tutti" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="group overflow-hidden border-2 hover:border-primary/50 transition-all">
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </CardTitle>
                <CardDescription className="leading-relaxed">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(post.date).toLocaleDateString("it-IT", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Button variant="ghost" className="w-full gap-2 group/btn" asChild>
                  <Link href={`/blog/${post.id}`}>
                    Leggi di più
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
