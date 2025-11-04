"use client"

import Link from "next/link"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const { user, logout } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b-4 border-primary/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-serif font-bold text-secondary text-4xl">
            Federica Franchi
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            <Link href="/" className="text-sm font-medium hover:text-secondary transition-colors">
              Home
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-secondary transition-colors">
              Blog
            </Link>
            <Link href="/resources" className="text-sm font-medium hover:text-secondary transition-colors">
              Risorse
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-secondary transition-colors">
              Contatti
            </Link>
            {user ? (
              <>
                {user.role === "nutritionist" && (
                  <>
                    <Link href="/patients" className="text-sm font-medium hover:text-secondary transition-colors">
                      Pazienti
                    </Link>
                    <Link href="/admin" className="text-sm font-medium hover:text-secondary transition-colors">
                      Admin
                    </Link>
                  </>
                )}
                <Button
                  onClick={logout}
                  variant="outline"
                  size="sm"
                  className="rounded-full border-2 border-primary/40 bg-transparent"
                >
                  Esci
                </Button>
              </>
            ) : (
              <Button asChild size="sm" className="rounded-full">
                <Link href="/login">Accedi</Link>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm font-medium hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="text-sm font-medium hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/resources"
                className="text-sm font-medium hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Risorse
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contatti
              </Link>
              {user ? (
                <>
                  {user.role === "nutritionist" && (
                    <>
                      <Link
                        href="/patients"
                        className="text-sm font-medium hover:text-secondary transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Pazienti
                      </Link>
                      <Link
                        href="/admin"
                        className="text-sm font-medium hover:text-secondary transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Admin
                      </Link>
                    </>
                  )}
                  <Button onClick={logout} variant="outline" size="sm" className="w-full bg-transparent">
                    Esci
                  </Button>
                </>
              ) : (
                <Button asChild size="sm" className="w-full">
                  <Link href="/login">Accedi</Link>
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
