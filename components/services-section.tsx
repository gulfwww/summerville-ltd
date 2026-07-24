import Image from "next/image"
import { Zap, Truck, Landmark, Check } from "lucide-react"
import { Reveal } from "@/components/reveal"

const services = [
  {
    number: "01",
    icon: Zap,
    image: "/images/service-energy.png",
    title: "Energy Sector Consultancy, Trading & Business Development",
    intro:
      "Commercial facilitation, negotiation and strategic advisory that generates recurring value through the successful conclusion of energy agreements.",
    groups: [
      {
        heading: "Power Transmission, Generation & Trading",
        items: [
          "Commercial facilitation for power purchase agreements (PPAs)",
          "Negotiation support for energy transactions",
          "Recurring value from concluded commercial agreements",
        ],
      },
      {
        heading: "Business & Relationship Facilitation",
        items: [
          "Connecting energy companies, investors and stakeholders",
          "Establishing strategic partnerships",
          "Unlocking new project opportunities",
        ],
      },
      {
        heading: "Strategic, Regulatory & Implementation Support",
        items: [
          "Market entry strategy and project development",
          "Commercial structuring and operational advisory",
          "Regulatory & government liaison",
          "Post-agreement transition and operational continuity",
        ],
      },
    ],
  },
  {
    number: "02",
    icon: Truck,
    image: "/images/service-logistics.png",
    title: "Procurement, Supply & Logistics for Energy Operations",
    intro:
      "An end-to-end procurement and logistics capability supporting petroleum and energy operations — from sourcing to final delivery.",
    groups: [
      {
        heading: "Procurement Support",
        items: [
          "Supplier identification and strategic sourcing",
          "Supplier qualification and price negotiation",
          "End-to-end procurement management",
        ],
      },
      {
        heading: "Logistics & Delivery Coordination",
        items: [
          "International logistics, freight forwarding & shipping",
          "Customs facilitation, warehousing & inland transport",
          "Bills of lading, certificates of origin & analysis",
          "Shipment tracking and terminal coordination",
        ],
      },
      {
        heading: "Quality, Compliance & Advisory",
        items: [
          "Compliance with technical specifications and standards",
          "Supplier & stakeholder relationship management",
          "Ancillary procurement and supply chain advisory",
        ],
      },
    ],
    products: [
      "Gasoline dye markers",
      "Fuel additives",
      "Solvents",
      "Synthetic materials",
      "Petroleum consumables",
    ],
  },
  {
    number: "03",
    icon: Landmark,
    image: "/images/service-fintech.png",
    title: "Core Banking & Financial Technology Advisory",
    intro:
      "Independent assessment, vendor selection, integration and implementation for banks and financial institutions — through to post go-live support.",
    groups: [
      {
        heading: "Core Banking Assessment",
        items: [
          "Business requirement analysis — front & back office",
          "Customer channels and digital banking evaluation",
          "Platform evaluation, vendor comparison & selection",
          "Contract and negotiation support",
        ],
      },
      {
        heading: "Technology Architecture & Integration",
        items: [
          "Software architecture, hardware planning & gap analysis",
          "Domestic & international payment integrations",
          "Forex integration and card networks",
          "Security architecture & cybersecurity frameworks",
        ],
      },
      {
        heading: "Implementation & Post Go-Live",
        items: [
          "System implementation, releases & customisation",
          "Documentation, user training & knowledge transfer",
          "Maintenance and operational support",
          "Performance optimisation & continuous improvement",
        ],
      },
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-secondary py-24 lg:py-32">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Our Services</span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl">
            End-to-end advisory and execution
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Three integrated practice areas spanning commercial advisory, procurement and financial technology — engaged
            individually or as a single accountable partner.
          </p>
        </Reveal>

        <div className="mt-16 space-y-8">
          {services.map((service, index) => (
            <Reveal key={service.number} delay={index * 80}>
              <article className="card-hover overflow-hidden rounded-2xl border border-border bg-card">
                <div className="grid lg:grid-cols-2">
                  <div
                    className={`relative min-h-64 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 to-navy-deep/10" />
                    <div className="absolute left-6 top-6 flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-navy-deep">
                        <service.icon className="h-6 w-6" />
                      </span>
                      <span className="font-serif text-4xl font-semibold text-white/90">{service.number}</span>
                    </div>
                  </div>

                  <div className={`p-8 lg:p-10 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                    <h3 className="text-balance font-serif text-2xl font-semibold text-navy">{service.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{service.intro}</p>

                    <div className="mt-6 space-y-6">
                      {service.groups.map((group) => (
                        <div key={group.heading}>
                          <h4 className="text-sm font-semibold uppercase tracking-wide text-navy">{group.heading}</h4>
                          <ul className="mt-3 grid gap-2">
                            {group.items.map((item) => (
                              <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {service.products && (
                      <div className="mt-7 rounded-xl border border-border bg-secondary/60 p-5">
                        <h4 className="text-xs font-semibold uppercase tracking-wide text-navy">Industry Products</h4>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {service.products.map((product) => (
                            <span
                              key={product}
                              className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium text-navy"
                            >
                              {product}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
