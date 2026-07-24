"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Industries", id: "industries" },
  { label: "Geographies", id: "geographies" },
  { label: "Contact", id: "contact" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-navy-deep/95 shadow-lg shadow-navy-deep/20 backdrop-blur" : "bg-transparent",
      )}
    >
      <div className="container flex h-[72px] items-center justify-between py-3">
        <button onClick={() => scrollTo("home")} aria-label="Summerville Group home">
          <Logo variant="light" />
        </button>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium text-white/80 transition-colors hover:text-gold"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep transition-all hover:bg-gold-soft hover:shadow-lg hover:shadow-gold/20"
          >
            Schedule a Consultation
          </button>
        </div>

        <button
          className="text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-white/10 bg-navy-deep/98 backdrop-blur transition-all duration-300 lg:hidden",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <nav className="container flex flex-col gap-1 py-4" aria-label="Mobile">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="rounded-md px-3 py-2.5 text-left text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-gold"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="mt-2 inline-flex items-center justify-center rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-soft"
          >
            Schedule a Consultation
          </button>
        </nav>
      </div>
    </header>
  )
}
