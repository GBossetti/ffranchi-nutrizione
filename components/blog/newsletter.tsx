"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail("")
    }, 3000)
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3 mb-6">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl mb-4">
            Rimani Aggiornato con Consigli Nutrizionali
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed mb-8">
            Ricevi settimanalmente consigli nutrizionali basati su evidenze scientifiche, ricette salutari e
            suggerimenti per il benessere direttamente nella tua casella di posta
          </p>

          {isSubmitted ? (
            <div className="rounded-lg bg-primary/10 p-4 text-primary font-medium">
              Grazie per l'iscrizione! Controlla la tua email per confermare.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Inserisci la tua email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" className="gap-2">
                <Mail className="h-4 w-4" />
                Iscriviti
              </Button>
            </form>
          )}

          <p className="text-xs text-muted-foreground mt-4">
            Nessuno spam, cancellati in qualsiasi momento. La tua privacy è importante per noi.
          </p>
        </div>
      </div>
    </section>
  )
}
