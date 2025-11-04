import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Sparkles } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-accent/30 to-primary/10 py-24 md:py-32 lg:py-40 border-8 border-primary/40 rounded-[3rem] mx-4 my-8">
      <div className="absolute top-8 left-8 w-32 h-32 opacity-40 animate-float">
        <img src="/watercolor-lemon-with-green-leaves.jpg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-8 right-8 w-40 h-40 opacity-40 animate-float delay-300">
        <img src="/watercolor-pomegranate-and-berries.jpg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-1/2 right-12 w-24 h-24 opacity-30 animate-float delay-500">
        <img src="/watercolor-tomato.jpg" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.8),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.6),transparent_50%)]" />

      <div className="container relative mx-auto px-4">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-tertiary/20 px-6 py-3 text-sm font-medium text-foreground border-2 border-tertiary/40 animate-scale-in delay-200">
              <Sparkles className="h-4 w-4" />
              Nutrizionista Certificata & Esperta di Benessere
            </div>

            <h1 className="text-5xl font-serif font-bold leading-[1.15] tracking-wide text-balance md:text-6xl lg:text-7xl">
              <span className="text-foreground">Trasforma la Tua</span> <span className="text-primary">Salute</span>{" "}
              <span className="text-foreground">Attraverso la Nutrizione Personalizzata</span>
            </h1>

            <p className="text-xl text-foreground/70 text-pretty leading-relaxed max-w-xl">
              Consulenza esperta su misura per le tue esigenze uniche. Che tu stia gestendo una condizione di salute,
              ottimizzando le prestazioni atletiche o semplicemente cercando uno stile di vita più sano, sono qui per
              aiutarti a raggiungere i tuoi obiettivi di benessere.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row pt-4">
              <Button
                size="lg"
                className="gap-2 h-12 px-8 text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-full"
                asChild
              >
                <Link href="#contact">
                  <Calendar className="h-5 w-5" />
                  Prenota una Consulenza
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 h-12 px-8 text-base bg-transparent hover:bg-accent hover:scale-105 transition-all duration-300 border-2 border-primary/40 text-foreground rounded-full"
                asChild
              >
                <Link href="#about">
                  Scopri di Più
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-[2.5rem] shadow-2xl animate-float border-4 border-tertiary/40">
              <img
                src="/images/design-mode/image.png"
                alt="Dottoressa Federica Franchi"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tertiary/10 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-8 -left-8 bg-background/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl animate-scale-in delay-400 border-4 border-tertiary/40">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="h-12 w-12 rounded-full border-2 border-background bg-gradient-to-br from-primary/60 to-primary/40" />
                  <div className="h-12 w-12 rounded-full border-2 border-background bg-gradient-to-br from-secondary/60 to-secondary/40" />
                  <div className="h-12 w-12 rounded-full border-2 border-background bg-gradient-to-br from-tertiary/60 to-tertiary/40" />
                </div>
                <div>
                  <p className="text-3xl font-serif font-bold text-secondary">500+</p>
                  <p className="text-sm text-foreground/60">Clienti Soddisfatti</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
