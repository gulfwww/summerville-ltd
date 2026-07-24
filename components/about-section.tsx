import Image from "next/image"
import { Handshake, Cpu, Workflow } from "lucide-react"
import { Reveal } from "@/components/reveal"

const pillars = [
  {
    icon: Handshake,
    title: "Commercial Advisory",
    description: "Market entry, deal structuring and negotiation support that turns opportunity into agreement.",
  },
  {
    icon: Cpu,
    title: "Technical Consulting",
    description: "Architecture, integration and platform expertise across banking and energy technology.",
  },
  {
    icon: Workflow,
    title: "Operational Execution",
    description: "Hands-on delivery from concept through implementation and post go-live support.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-24 lg:py-32">
      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">About Summerville Group</span>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl">
              A single trusted partner across the entire project lifecycle
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Summerville Group provides specialist advisory, business development and implementation services across
              the Energy and Financial Technology sectors. We help organisations navigate complex commercial
              environments, facilitate strategic partnerships, manage technology transformation, and deliver successful
              projects from concept through implementation.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our expertise combines commercial advisory, technical consulting and operational execution — allowing
              clients to engage one accountable partner throughout the entire project lifecycle.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {pillars.map((pillar) => (
                <div key={pillar.title}>
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy/5 text-navy">
                    <pillar.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-navy">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-navy/20">
              <Image
                src="/images/about-corporate.png"
                alt="Summerville Group advisors reviewing energy and financial strategy"
                width={720}
                height={720}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-border bg-card p-6 shadow-xl sm:block">
              <p className="font-serif text-3xl font-semibold text-navy">Concept → Go-Live</p>
              <p className="mt-1 text-sm text-muted-foreground">Advisory, integration and support under one roof</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
