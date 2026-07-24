import { Factory, Cable, TrendingUp, Fuel, Building2, Smartphone, CircuitBoard, CreditCard } from "lucide-react"
import { Reveal } from "@/components/reveal"

const industries = [
  { icon: Factory, label: "Power Generation" },
  { icon: Cable, label: "Power Transmission" },
  { icon: TrendingUp, label: "Energy Trading" },
  { icon: Fuel, label: "Petroleum Operations" },
  { icon: Building2, label: "Financial Institutions" },
  { icon: Smartphone, label: "Digital Banks" },
  { icon: CircuitBoard, label: "FinTech Companies" },
  { icon: CreditCard, label: "Payment Providers" },
]

export function IndustriesSection() {
  return (
    <section id="industries" className="relative overflow-hidden bg-navy-deep py-24 lg:py-32">
      <div className="container relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Industries</span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Sectors we serve
          </h2>
          <p className="mt-5 leading-relaxed text-white/60">
            Deep, cross-sector experience spanning the full energy value chain and the modern financial services
            landscape.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {industries.map((industry, index) => (
            <Reveal key={industry.label} delay={index * 60}>
              <div className="card-hover group flex h-full flex-col items-start gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-gold/40">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-navy-deep">
                  <industry.icon className="h-6 w-6" />
                </span>
                <span className="font-semibold text-white">{industry.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
