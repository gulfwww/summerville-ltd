"use client"

import Image from "next/image"
import { ArrowRight, PhoneCall } from "lucide-react"

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72
    window.scrollTo({ top, behavior: "smooth" })
  }
}

const stats = [
  { value: "2", label: "Global hubs" },
  { value: "End-to-end", label: "Advisory & delivery" },
  { value: "2 Sectors", label: "Energy & FinTech" },
]

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-energy-fintech.png"
          alt="Energy transmission infrastructure merging with digital banking networks"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/30" />
      </div>

      <div className="container relative z-10 pt-28 pb-16">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Energy &amp; Financial Technology
          </span>

          <h1 className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Driving Growth in Energy and Financial Technology
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/75">
            From power purchase agreements and energy project facilitation to core banking assessments, system
            integration, implementation and post go-live support, we deliver end-to-end advisory and execution
            services.
          </p>

          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-white/60">
            We connect partners, close transactions and build the systems that power business.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => scrollTo("contact")}
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-gold px-7 py-3.5 text-base font-semibold text-navy-deep transition-all hover:bg-gold-soft hover:shadow-xl hover:shadow-gold/20"
            >
              Talk to Our Team
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-gold/50 hover:bg-white/10"
            >
              <PhoneCall className="h-5 w-5" />
              Our Services
            </button>
          </div>

          <dl className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-serif text-2xl font-semibold text-gold sm:text-3xl">{stat.value}</dt>
                <dd className="mt-1 text-sm text-white/60">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
