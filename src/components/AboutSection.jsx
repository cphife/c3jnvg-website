import { MapPin, Target, Award } from 'lucide-react'

const VALUES = [
  {
    icon:  Target,
    title: 'Infrastructure Intelligence',
    desc:  'Focused on developing practical tools that help agencies and partners make better decisions about rail and transit infrastructure condition and maintenance priorities.',
  },
  {
    icon:  Award,
    title: 'Safety-Focused Workflows',
    desc:  'Every platform component is designed with rail safety, field personnel protection, and operational constraints as primary considerations — not afterthoughts.',
  },
  {
    icon:  MapPin,
    title: 'Wisconsin-Based, Nationally Relevant',
    desc:  'Rooted in the Midwest with a mission to serve transit agencies, rail operators, engineering firms, and public-sector partners across the country.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: text */}
          <div className="reveal">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-sky-700 bg-sky-50 border border-sky-200 px-3 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              About the Company — Section 12
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-6">
              About C3JNVG Infrastructure &amp; Intelligence LLC
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-5">
              C3JNVG Infrastructure &amp; Intelligence LLC is a Wisconsin-based small business focused
              on infrastructure intelligence, safety-focused inspection workflows, and practical
              technology solutions for public-sector and transportation partners.
            </p>
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              The company's mission is to help agencies identify risks earlier, improve inspection
              documentation, and prioritize maintenance decisions with better visual data and
              structured reporting — developed through practical demonstration and real partner
              collaboration.
            </p>

            {/* Founder card */}
            <div className="flex items-start gap-4 bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-600 flex items-center justify-center shrink-0 shadow-md">
                <span className="text-white font-black text-sm">CP</span>
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800">Christopher Phifer</div>
                <div className="text-xs text-slate-500 mb-2">
                  Owner, C3JNVG Infrastructure &amp; Intelligence LLC
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin className="w-3 h-3" />
                  Wisconsin
                </div>
              </div>
            </div>
          </div>

          {/* Right: values */}
          <div className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
              Company Focus Areas
            </div>
            {VALUES.map((v, i) => {
              const Icon = v.icon
              return (
                <div key={i} className="reveal card-light p-5 hover:shadow-md transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0 group-hover:border-sky-200 transition-colors">
                      <Icon className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-800 mb-1.5">{v.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Mission statement */}
            <div className="reveal p-5 bg-slate-900 rounded-xl border border-slate-700">
              <div className="text-[10px] font-semibold uppercase tracking-widest text-sky-400 mb-2">Mission</div>
              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                Help agencies identify risks earlier, improve inspection documentation, and
                prioritize maintenance decisions with better visual data and structured reporting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
