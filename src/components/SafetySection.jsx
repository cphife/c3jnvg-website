import { ShieldCheck, FileCheck, Users, AlertCircle } from 'lucide-react'

const COMMITMENTS = [
  {
    icon:  ShieldCheck,
    title: 'Flight Planning & Site Safety',
    desc:  'All flight operations are planned in coordination with partner safety, access, and operational requirements to avoid service disruption and protect public safety.',
  },
  {
    icon:  FileCheck,
    title: 'Regulatory Compliance',
    desc:  'Drone operations comply with applicable FAA regulations, site-access requirements, and agency-specific operational constraints agreed upon during pilot planning.',
  },
  {
    icon:  Users,
    title: 'Agency Coordination',
    desc:  'Data collection, reporting, and pilot activities are structured to align with partner agency priorities, schedules, and communication requirements.',
  },
  {
    icon:  AlertCircle,
    title: 'Professional Judgment Preserved',
    desc:  'All maintenance decisions remain the responsibility of qualified professionals and agency personnel. C3JNVG outputs are analytical support tools, not engineering certifications.',
  },
]

export default function SafetySection() {
  return (
    <section className="bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: copy */}
          <div className="reveal">
            <div className="label-tag mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              Safety &amp; Compliance — Section 11
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight mb-5">
              Coordinated, Safety-Conscious Deployment
            </h2>
            <p className="text-base text-slate-300 leading-relaxed mb-6">
              C3JNVG would conduct pilot activities in coordination with partner safety, access,
              and operational requirements. Flight planning, site access, data collection, and
              reporting would be designed to avoid service disruption, protect public safety,
              and comply with applicable drone, site-access, and agency requirements.
            </p>

            {/* Reinforce box */}
            <div className="bg-navy-800 border border-slate-700 rounded-xl p-5">
              <div className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-3">
                Important — Human Responsibility Preserved
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Human inspectors and agency personnel remain responsible for professional review,
                maintenance decisions, and final engineering judgment. C3JNVG platform outputs
                are analytical support tools, not engineering certifications or compliance documents.
              </p>
            </div>
          </div>

          {/* Right: commitment cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {COMMITMENTS.map((c, i) => {
              const Icon = c.icon
              return (
                <div key={i} className="reveal card-dark p-5 hover:border-slate-600 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4 text-sky-400" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2 leading-snug">{c.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{c.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
