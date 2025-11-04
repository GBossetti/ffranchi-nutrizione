import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, File } from "lucide-react"

const resources = [
  {
    id: 1,
    title: "Modello Pianificatore Pasti Settimanale",
    description:
      "Pianifica i tuoi pasti per la settimana con questo modello facile da usare. Include sezione lista della spesa.",
    category: "Piani Pasto",
    type: "PDF",
    size: "2.4 MB",
    downloads: 1243,
  },
  {
    id: 2,
    title: "Guida Calcolatore Macronutrienti",
    description:
      "Impara a calcolare il tuo fabbisogno giornaliero di proteine, carboidrati e grassi in base ai tuoi obiettivi.",
    category: "Calcolatori",
    type: "PDF",
    size: "1.8 MB",
    downloads: 892,
  },
  {
    id: 3,
    title: "Lista della Spesa Salutare",
    description: "Una lista completa di alimenti nutrienti organizzati per categoria per una spesa facile.",
    category: "Guide",
    type: "PDF",
    size: "1.2 MB",
    downloads: 2156,
  },
  {
    id: 4,
    title: "Guida Visiva Controllo Porzioni",
    description: "Riferimento visivo per porzioni corrette usando oggetti quotidiani e misure della mano.",
    category: "Guide",
    type: "PDF",
    size: "3.1 MB",
    downloads: 1567,
  },
  {
    id: 5,
    title: "Sfida Benessere 30 Giorni",
    description: "Abitudini e attività quotidiane per migliorare la tua salute e benessere generale.",
    category: "Benessere",
    type: "PDF",
    size: "2.7 MB",
    downloads: 1834,
  },
  {
    id: 6,
    title: "Nutrizione Pre e Post Allenamento",
    description: "Ottimizza le tue prestazioni con scelte alimentari e tempistiche nutrizionali corrette.",
    category: "Fitness",
    type: "PDF",
    size: "2.2 MB",
    downloads: 1098,
  },
  {
    id: 7,
    title: "Guida Contenitori Meal Prep",
    description:
      "Impara le migliori pratiche per la preparazione dei pasti e la conservazione degli alimenti per la settimana.",
    category: "Piani Pasto",
    type: "PDF",
    size: "1.9 MB",
    downloads: 1445,
  },
  {
    id: 8,
    title: "Tracker Idratazione",
    description: "Monitora il tuo consumo giornaliero di acqua e rimani correttamente idratato durante il giorno.",
    category: "Benessere",
    type: "PDF",
    size: "0.8 MB",
    downloads: 2341,
  },
  {
    id: 9,
    title: "Leggere le Etichette Nutrizionali",
    description: "Guida completa per comprendere e interpretare le etichette nutrizionali degli alimenti.",
    category: "Guide",
    type: "PDF",
    size: "2.5 MB",
    downloads: 1723,
  },
  {
    id: 10,
    title: "Fonti Proteiche Vegetali",
    description: "Lista completa di fonti proteiche vegetariane e vegane con informazioni nutrizionali.",
    category: "Guide",
    type: "PDF",
    size: "1.6 MB",
    downloads: 1289,
  },
  {
    id: 11,
    title: "Calcolatore BMI e Composizione Corporea",
    description: "Calcola il tuo BMI e comprendi le metriche di composizione corporea per la valutazione della salute.",
    category: "Calcolatori",
    type: "PDF",
    size: "1.4 MB",
    downloads: 967,
  },
  {
    id: 12,
    title: "Pratiche di Alimentazione Consapevole",
    description: "Tecniche ed esercizi per sviluppare una relazione più sana con il cibo.",
    category: "Benessere",
    type: "PDF",
    size: "2.0 MB",
    downloads: 1512,
  },
]

export function ResourcesGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <Card key={resource.id} className="group border-2 hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="rounded-full bg-primary/10 p-3">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary">{resource.category}</Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{resource.title}</CardTitle>
                <CardDescription className="leading-relaxed">{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <File className="h-4 w-4" />
                      <span>{resource.type}</span>
                    </div>
                    <span>{resource.size}</span>
                  </div>
                  <span>{resource.downloads.toLocaleString()} download</span>
                </div>
                <Button className="w-full gap-2">
                  <Download className="h-4 w-4" />
                  Scarica
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Hai Bisogno di una Guida Più Personalizzata?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Queste risorse sono un ottimo punto di partenza, ma una consulenza nutrizionale personalizzata può aiutarti
            a raggiungere i tuoi obiettivi di salute specifici più velocemente ed efficacemente.
          </p>
          <Button size="lg" asChild>
            <a href="/contatti">Prenota una Consulenza</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
