import { Apple, Dumbbell, Heart, Salad, Scale, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Services() {
  const services = [
    {
      icon: Scale,
      title: "Gestione del Peso",
      description:
        "Strategie sostenibili per una sana perdita o aumento di peso, su misura per il tuo metabolismo e stile di vita.",
    },
    {
      icon: Dumbbell,
      title: "Nutrizione Sportiva",
      description:
        "Ottimizza le prestazioni e il recupero con piani nutrizionali personalizzati per atleti di tutti i livelli.",
    },
    {
      icon: Heart,
      title: "Gestione Malattie Croniche",
      description:
        "Terapia nutrizionale basata sull'evidenza per diabete, malattie cardiache e altre condizioni croniche.",
    },
    {
      icon: Salad,
      title: "Salute Digestiva",
      description:
        "Affronta IBS, sensibilità alimentari e salute intestinale attraverso interventi nutrizionali mirati.",
    },
    {
      icon: Apple,
      title: "Benessere Generale",
      description:
        "Costruisci abitudini alimentari sane e migliora il benessere generale con una guida personalizzata.",
    },
    {
      icon: Sparkles,
      title: "Pianificazione Pasti",
      description: "Piani pasto personalizzati che si adattano ai tuoi orari, preferenze e esigenze nutrizionali.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-accent/20 via-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl mb-4">
            Servizi e Specializzazioni
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Servizi nutrizionali completi progettati per aiutarti a raggiungere i tuoi obiettivi di salute
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="border-2 hover:border-primary/50 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-scale-in bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="rounded-full bg-primary/20 p-3 w-fit mb-2">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
