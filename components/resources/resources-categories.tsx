"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FileText, Utensils, Calculator, BookOpen, Heart, Dumbbell } from "lucide-react"

const categories = [
  { id: "all", label: "Tutte le Risorse", icon: FileText },
  { id: "meal-plans", label: "Piani Pasto", icon: Utensils },
  { id: "calculators", label: "Calcolatori", icon: Calculator },
  { id: "guides", label: "Guide", icon: BookOpen },
  { id: "wellness", label: "Benessere", icon: Heart },
  { id: "fitness", label: "Fitness", icon: Dumbbell },
]

export function ResourcesCategories() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  return (
    <section className="py-8 border-b bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="gap-2"
              >
                <Icon className="h-4 w-4" />
                {category.label}
              </Button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
