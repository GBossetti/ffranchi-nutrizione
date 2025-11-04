import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContattiPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#f5e6d3] via-[#fef5e7] to-[#f9f3ec] py-16 md:py-24 border-b-4 border-[#e8b4a0]">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl mb-4 text-[#2c3e50]">
                Contattami
              </h1>
              <p className="text-lg text-[#5a6c7d] text-pretty leading-relaxed">
                Sono qui per aiutarti nel tuo percorso verso una vita più sana. Contattami per prenotare una consulenza
                o per qualsiasi domanda.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Contact Form */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Invia un Messaggio</CardTitle>
                  <CardDescription>Compila il modulo e ti risponderò il prima possibile</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="nome" className="text-sm font-medium">
                          Nome
                        </label>
                        <Input id="nome" placeholder="Il tuo nome" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="cognome" className="text-sm font-medium">
                          Cognome
                        </label>
                        <Input id="cognome" placeholder="Il tuo cognome" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="tua@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="telefono" className="text-sm font-medium">
                        Telefono
                      </label>
                      <Input id="telefono" type="tel" placeholder="+39 123 456 7890" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="messaggio" className="text-sm font-medium">
                        Messaggio
                      </label>
                      <Textarea
                        id="messaggio"
                        placeholder="Raccontami dei tuoi obiettivi di salute..."
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Invia Messaggio
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl">Informazioni di Contatto</CardTitle>
                    <CardDescription>Puoi raggiungermi attraverso questi canali</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">federica.franchi@nutrizione.it</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Telefono</p>
                        <p className="text-sm text-muted-foreground">+39 123 456 7890</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Studio</p>
                        <p className="text-sm text-muted-foreground">
                          Via Roma 123
                          <br />
                          20100 Milano, Italia
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Orari di Apertura</p>
                        <p className="text-sm text-muted-foreground">
                          Lun - Ven: 9:00 - 18:00
                          <br />
                          Sabato: 9:00 - 13:00
                          <br />
                          Domenica: Chiuso
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 bg-gradient-to-br from-primary/5 to-secondary/5">
                  <CardHeader>
                    <CardTitle>Prenota una Consulenza</CardTitle>
                    <CardDescription>Inizia il tuo percorso verso una vita più sana oggi stesso</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Offro consulenze personalizzate sia in studio che online. Durante la prima consulenza, valuteremo
                      insieme i tuoi obiettivi di salute e creeremo un piano nutrizionale su misura per te.
                    </p>
                    <Button className="w-full" size="lg">
                      Prenota Ora
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
