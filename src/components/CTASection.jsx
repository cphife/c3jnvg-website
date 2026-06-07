import { ArrowRight, Mail } from 'lucide-react'

export default function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy-950">
      {/* Gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-600/18 via-navy-950 to-cyan-600/10" />
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />
      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 py-24 lg:py-32 text-center">

        {/* Label */}
        <div className="flex justify-center mb-6 reveal">
          <div className="label-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse-slow" />
            Now Accepting Pilot Inquiries — Section 13
          </div>
        </div>

        <h2 className="reveal text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-6">
          Explore a Rail or Transit{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">
            Infrastructure Pilot
          </span>
        </h2>

        <p className="reveal text-lg text-slate-300 leading-relaxed mb-4 max-w-2xl mx-auto">
          C3JNVG is ready to discuss pilot opportunities with transit agencies, rail stakeholders,
          engineering firms, universities, and public-sector partners.
        </p>

        <p className="reveal text-base text-slate-400 leading-relaxed mb-10 max-w-xl mx-auto">
          A pilot can be scoped to a single asset type, a small corridor segment, or a targeted
          assessment — structured to fit your operational priorities and constraints.
        </p>

        {/* CTA buttons */}
        <div className="reveal flex flex-wrap gap-4 justify-center mb-10">
          <a
            href="mailto:C3logistics@c3jnvg.com?subject=Rail Infrastructure Pilot Inquiry"
            className="btn-primary px-8 py-4 text-base"
          >
            <Mail className="w-5 h-5" />
            Contact C3JNVG
          </a>
          <a
            href="#pilot"
            onClick={(e) => { e.preventDefault(); document.querySelector('#pilot')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-secondary px-8 py-4 text-base"
          >
            View Pilot Program
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Contact info strip */}
        <div className="reveal flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
          <span className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-slate-600" />
            C3logistics@c3jnvg.com
          </span>
          <span className="text-slate-700">·</span>
          <span>Wisconsin-Based · Nationally Available</span>
          <span className="text-slate-700">·</span>
          <span>FTA-Aligned Demonstration Structure</span>
        </div>
      </div>
    </section>
  )
}
