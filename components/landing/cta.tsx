import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Mail, Phone } from "lucide-react"

export function CTA() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl mb-4">
            Pronta a Iniziare il Tuo Percorso?
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Prenota una consulenza gratuita di 15 minuti per discutere i tuoi obiettivi e scoprire come posso aiutarti
          </p>
        </div>

        <div className="grid gap-6 lg:gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
          <Card className="border-2">
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" placeholder="Inserisci il tuo nome" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="tua@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Numero di Telefono</Label>
                  <Input id="phone" type="tel" placeholder="+39 123 456 7890" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Parlami dei tuoi obiettivi</Label>
                  <Textarea id="message" placeholder="Cosa vorresti raggiungere?" rows={4} />
                </div>
                <Button type="submit" className="w-full gap-2">
                  <Calendar className="h-5 w-5" />
                  Richiedi Consulenza
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground break-all">federica.franchi@nutrizione.it</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefono</h3>
                    <p className="text-sm text-muted-foreground">+39 123 456 7890</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Orari di Apertura</h3>
                    <p className="text-sm text-muted-foreground">
                      Lunedì - Venerdì: 9:00 - 18:00
                      <br />
                      Sabato: 10:00 - 14:00
                      <br />
                      Domenica: Chiuso
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="rounded-xl bg-gradient-to-br from-primary to-secondary p-6 text-primary-foreground">
              <h3 className="text-xl font-bold mb-2">Prima Consulenza Gratuita</h3>
              <p className="text-sm opacity-90">
                Conosci il mio approccio e discuti i tuoi obiettivi in una sessione gratuita di 15 minuti
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
