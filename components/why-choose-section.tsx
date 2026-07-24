import { Layers, Briefcase, Wrench, Globe2, Users, Scale, Network, LifeBuoy } from "lucide-react"
import { Reveal } from "@/components/reveal"

const reasons = [
  { icon: Layers, title: "End-to-End Advisory", description: "One partner from concept and structuring through delivery." },
  { icon: Briefcase, title: "Commercial Expertise", description: "Deal facilitation, negotiation and transaction close." },
  { icon: Wrench, title: "Technical Implementation", description: "Architecture, integration and platform delivery." },
  { icon: Globe2, title: "Cross-Sector Experience", description: "Fluency across energy and financial technology." },
  { icon: Users, title: "Strategic Partnerships", description: "Connecting investors, operators and institutions." },
  { icon: Scale, title: "Regulatory Understanding", description: "Government liaison and compliance coordination." },
  { icon: Network, title: "Global Business Network", description: "Relationships spanning multiple markets and regions." },
  { icon: LifeBuoy, title: "Long-Term Client Support", description: "Post go-live support and continuous improvement." },
]

export function WhyChooseSection() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Why Summerville Group</span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl">
            Credibility, capability and continuity
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 50} className="h-full">
              <div className="group flex h-full flex-col gap-4 bg-card p-7 transition-colors hover:bg-secondary/60">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy/5 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                  <reason.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-semibold text-navy">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
