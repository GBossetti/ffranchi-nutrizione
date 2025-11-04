import { Award, BookOpen, Heart, Users } from "lucide-react"

export function About() {
  const credentials = [
    {
      icon: Award,
      title: "Nutrizionista Certificata",
      description: "Certificata con oltre 10 anni di esperienza",
    },
    {
      icon: BookOpen,
      title: "Basato sull'Evidenza",
      description: "Approccio fondato sulla scienza nutrizionale più recente",
    },
    {
      icon: Heart,
      title: "Cura Olistica",
      description: "Affrontando mente, corpo e fattori dello stile di vita",
    },
    {
      icon: Users,
      title: "Piani Personalizzati",
      description: "Strategie su misura per le tue esigenze uniche",
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl mb-4">
            Chi Sono - Dott.ssa Federica Franchi
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Con oltre un decennio di esperienza in nutrizione clinica e coaching del benessere, sono appassionata di
            dare alle persone il potere di prendere il controllo della loro salute attraverso strategie nutrizionali
            sostenibili e basate sulla scienza.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {credentials.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl bg-accent/50 hover:bg-accent transition-colors"
            >
              <div className="rounded-full bg-primary/10 p-3">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">La Mia Filosofia</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Credo che la nutrizione non sia uguale per tutti. Ogni persona ha esigenze, preferenze e obiettivi
                unici. Il mio approccio combina la scienza nutrizionale basata sull'evidenza con cambiamenti pratici e
                sostenibili dello stile di vita che si integrano perfettamente nella tua routine quotidiana.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Che tu stia gestendo una condizione cronica, ottimizzando le prestazioni atletiche o semplicemente
                cercando di sentirti al meglio, sono qui per guidarti in ogni fase del percorso con compassione,
                competenza e supporto personalizzato.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Formazione</h4>
                  <p className="text-sm text-muted-foreground">
                    Laurea Magistrale in Scienze della Nutrizione, Dietista Nutrizionista Iscritta all'Albo
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Specializzazioni</h4>
                  <p className="text-sm text-muted-foreground">
                    Gestione del Peso, Nutrizione Sportiva, Salute Digestiva, Gestione delle Malattie Croniche
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2 mt-1">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Associazioni</h4>
                  <p className="text-sm text-muted-foreground">
                    Ordine Nazionale dei Biologi, Associazione Italiana di Dietetica e Nutrizione Clinica
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
