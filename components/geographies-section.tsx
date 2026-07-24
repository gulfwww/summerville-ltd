import { MapPin } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { WorldMap } from "@/components/world-map"

const locations = [
  {
    country: "Mauritius",
    description: "Regional advisory, commercial facilitation and financial technology consulting.",
  },
  {
    country: "United Arab Emirates",
    description: "Energy advisory, business development, strategic partnerships and technology consulting.",
  },
]

export function GeographiesSection() {
  return (
    <section id="geographies" className="bg-secondary py-24 lg:py-32">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Geographies</span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl">
            Where we operate
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Strategically positioned across two international hubs, connecting markets, partners and opportunities.
          </p>
        </Reveal>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="overflow-hidden rounded-2xl border border-border bg-navy-deep p-4 shadow-xl shadow-navy/20">
              <WorldMap />
            </div>
          </Reveal>

          <div className="space-y-5 lg:col-span-2">
            {locations.map((loc, index) => (
              <Reveal key={loc.country} delay={index * 100}>
                <div className="card-hover flex gap-4 rounded-xl border border-border bg-card p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-navy">{loc.country}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{loc.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
