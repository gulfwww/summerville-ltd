
import type React from "react"
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
    lines: ["Phone: +230 466 7070", "Fax: +230 465 0077"],
  },
  {
    icon: MapPin,
    label: "Offices",
    lines: ["Mauritius", "Level 4, SBI Tower, Cybercity, Ebene, Republic of Mauritius"],
  },
]

export function ContactSection() {


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
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.346942491893!2d55.28512762935531!3d25.225236919820105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42e912bc6305%3A0x1e486da5f44c6a2b!2sDubai%20World%20Trade%20Centre!5e0!3m2!1sen!2sae!4v1727807531292!5m2!1sen!2sae" width="100%" height="100%" className="min-h-[384px] border-0 rounded-lg" loading="lazy" title="Empowering businesses with comprehensive IT solutions"></iframe>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
