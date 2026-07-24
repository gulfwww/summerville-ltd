"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react"
import { Reveal } from "@/components/reveal"

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    lines: ["info@summervillegroup.com", "summerville@gulfwww.com"],
  },
  {
    icon: Phone,
    label: "Phone & Fax",
    lines: ["+971 4 3464500", "Fax: +971 4 3464200"],
  },
  {
    icon: MapPin,
    label: "Offices",
    lines: ["Mauritius", "P.O. Box 9546, Dubai, U.A.E."],
  },
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-navy-deep py-24 lg:py-32">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Contact</span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Let&apos;s build the future together
          </h2>
          <p className="mt-5 leading-relaxed text-white/60">
            Whether you&apos;re developing an energy project, implementing a core banking platform or seeking strategic
            advisory services, our team is ready to help.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          {/* Contact details */}
          <div className="space-y-5 lg:col-span-2">
            {contactDetails.map((detail, index) => (
              <Reveal key={detail.label} delay={index * 80}>
                <div className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold text-navy-deep">
                    <detail.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{detail.label}</h3>
                    {detail.lines.map((line) => (
                      <p key={line} className="mt-1 text-sm text-white/60">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Form */}
          <Reveal delay={120} className="lg:col-span-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 lg:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle2 className="h-14 w-14 text-gold" />
                  <h3 className="mt-5 font-serif text-2xl font-semibold text-white">Thank you</h3>
                  <p className="mt-2 max-w-sm text-white/60">
                    Your message has been received. A member of our team will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <label htmlFor="name" className="text-sm font-medium text-white/80">
                        Full name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        className="rounded-md border border-white/15 bg-navy-deep/60 px-4 py-2.5 text-white placeholder:text-white/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="email" className="text-sm font-medium text-white/80">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="rounded-md border border-white/15 bg-navy-deep/60 px-4 py-2.5 text-white placeholder:text-white/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="company" className="text-sm font-medium text-white/80">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      className="rounded-md border border-white/15 bg-navy-deep/60 px-4 py-2.5 text-white placeholder:text-white/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      placeholder="Company name"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-white/80">
                      How can we help?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="resize-none rounded-md border border-white/15 bg-navy-deep/60 px-4 py-2.5 text-white placeholder:text-white/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      placeholder="Tell us about your project or requirement..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 rounded-md bg-gold px-7 py-3.5 text-base font-semibold text-navy-deep transition-all hover:bg-gold-soft hover:shadow-lg hover:shadow-gold/20"
                  >
                    Send Message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
