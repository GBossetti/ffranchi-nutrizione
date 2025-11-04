import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Giulia Rossi",
      role: "Maratoneta",
      content:
        "La Dott.ssa Franchi ha completamente trasformato il mio approccio alla nutrizione. Il suo piano nutrizionale sportivo mi ha aiutato a raggiungere il mio record personale nell'ultima maratona. Comprende davvero le esigenze uniche degli atleti.",
      rating: 5,
    },
    {
      name: "Marco Bianchi",
      role: "Paziente con Diabete di Tipo 2",
      content:
        "Dopo aver lavorato con la Dott.ssa Franchi per 6 mesi, i miei livelli di emoglobina glicata sono migliorati notevolmente. Il suo approccio pratico e sostenibile ha reso la gestione del diabete attraverso la dieta davvero piacevole.",
      rating: 5,
    },
    {
      name: "Laura Conti",
      role: "Professionista Impegnata",
      content:
        "Ero scettica riguardo alla pianificazione dei pasti, ma la Dott.ssa Franchi l'ha resa così semplice e adattata al mio programma frenetico. Ho più energia, dormo meglio e finalmente mi sento in controllo della mia salute.",
      rating: 5,
    },
    {
      name: "Alessandro Ferrari",
      role: "Percorso di Perdita di Peso",
      content:
        "Ho perso 20 kg e li ho mantenuti per oltre un anno grazie alla guida della Dott.ssa Franchi. Mi ha insegnato a costruire un rapporto sano con il cibo piuttosto che seguire un'altra dieta restrittiva.",
      rating: 5,
    },
    {
      name: "Chiara Romano",
      role: "Gestione della Sindrome dell'Intestino Irritabile",
      content:
        "Dopo anni di problemi digestivi, la Dott.ssa Franchi mi ha aiutato a identificare gli alimenti scatenanti e a creare un piano alimentare sostenibile. La mia qualità di vita è migliorata enormemente.",
      rating: 5,
    },
    {
      name: "Stefano Marino",
      role: "Neo Genitore",
      content:
        "La Dott.ssa Franchi mi ha aiutato a gestire la nutrizione durante la gravidanza di mia moglie e nel periodo post-parto. I suoi consigli basati sull'evidenza scientifica e il supporto compassionevole sono stati inestimabili.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl mb-4">
            Storie di Successo dei Clienti
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Risultati reali da persone reali che hanno trasformato la loro salute attraverso la nutrizione
            personalizzata
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-2">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4 text-muted-foreground">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
