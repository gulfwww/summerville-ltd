"use client"

import { Linkedin } from "lucide-react"
import { Logo } from "@/components/logo"

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", id: "about" },
      { label: "Why Choose Us", id: "industries" },
      { label: "Contact", id: "contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Energy Advisory & Trading", id: "services" },
      { label: "Procurement & Logistics", id: "services" },
      { label: "Core Banking & FinTech", id: "services" },
    ],
  },
  {
    title: "Geographies",
    links: [
      { label: "Mauritius", id: "geographies" },
      { label: "United Arab Emirates", id: "geographies" },
    ],
  },
]

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72
    window.scrollTo({ top, behavior: "smooth" })
  }
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-navy-deep">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              Specialist advisory, business development and implementation across the Energy and Financial Technology
              sectors — connecting partners, closing transactions and building the systems that power business.
            </p>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white/70 transition-colors hover:border-gold/50 hover:text-gold"
              aria-label="Summerville Group on LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-white">{column.title}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="text-left text-sm text-white/55 transition-colors hover:text-gold"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/45">
            &copy; {new Date().getFullYear()} Summerville Group. All rights reserved.
          </p>
          <p className="text-sm text-white/45">Energy &amp; Financial Technology Advisory</p>
        </div>
      </div>
    </footer>
  )
}
