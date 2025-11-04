import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold mb-4">Dott.ssa Federica Franchi</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Servizi nutrizionali professionali per la salute e il benessere personalizzati. Trasforma la tua vita
              attraverso la nutrizione basata sull'evidenza scientifica.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Link Rapidi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-primary transition-colors">
                  Risorse
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Servizi</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Gestione del Peso</li>
              <li className="text-muted-foreground">Nutrizione Sportiva</li>
              <li className="text-muted-foreground">Malattie Croniche</li>
              <li className="text-muted-foreground">Salute Digestiva</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Seguimi</h4>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#"
                className="rounded-full bg-primary/10 p-2 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-primary/10 p-2 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-primary/10 p-2 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-primary/10 p-2 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dott.ssa Federica Franchi. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
}
