import { Activity, FileSearch, Clock, BarChart2, Shield, UserCheck, TrendingUp } from 'lucide-react'

const METRICS = [
  {
    icon:  Activity,
    color: 'sky',
    title: 'Assets Assessed',
    desc:  'Total assets documented and evaluated within the pilot scope, including rail segments, crossings, structures, and facilities.',
  },
  {
    icon:  FileSearch,
    color: 'amber',
    title: 'Defects & Hazards Documented',
    desc:  'Number of distinct defects, safety hazards, and condition indicators flagged and annotated across all pilot assets.',
  },
  {
    icon:  Clock,
    color: 'sky',
    title: 'Assessment Time',
    desc:  'Time required for preliminary condition assessment compared to traditional inspection approaches for the equivalent asset set.',
  },
  {
    icon:  BarChart2,
    color: 'cyan',
    title: 'Documentation Consistency',
    desc:  'Repeatability of condition data across inspection passes — enabling meaningful comparison across inspection periods.',
  },
  {
    icon:  TrendingUp,
    color: 'sky',
    title: 'Maintenance-Priority Usefulness',
    desc:  'Agency and partner assessment of whether priority ranking outputs are useful for real maintenance planning and resource allocation.',
  },
  {
    icon:  Shield,
    color: 'amber',
    title: 'Reduction in Field Exposure',
    desc:  'Measurement of direct field safety-exposure reduction achieved using drone-assisted collection in place of ground-level access.',
  },
  {
    icon:  UserCheck,
    color: 'cyan',
    title: 'State-of-Good-Repair Support',
    desc:  'Usefulness of outputs for safety review, asset management, and state-of-good-repair decision-making reported by agency partners.',
  },
]

const CLR = {
  sky:   'bg-sky-500/10   border-sky-500/20   text-sky-400',
  amber: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
  cyan:  'bg-cyan-500/10  border-cyan-500/20  text-cyan-400',
}

export default function MetricsSection() {
  return (
    <section className="bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-60" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <div className="flex justify-center mb-4">
            <div className="label-tag">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              Pilot Evaluation — Section 9
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight mb-4">
            Measurable Pilot Outcomes
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            C3JNVG defines clear, measurable success criteria for every pilot engagement so
            agencies and partners can evaluate the platform against practical needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {METRICS.map((m, i) => {
            const Icon = m.icon
            return (
              <div key={i} className="reveal card-dark p-6 hover:border-slate-600 hover:-translate-y-0.5 transition-all duration-200">
                <div className={`w-10 h-10 rounded-lg border flex items-center justify-center mb-4 ${CLR[m.color]}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{m.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{m.desc}</p>
              </div>
            )
          })}

          {/* Principle card */}
          <div className="reveal card-dark p-6 bg-gradient-to-br from-sky-500/10 to-navy-800 border-sky-500/20 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-widest text-sky-400 mb-3">
                Pilot Design Principle
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                Every pilot is structured to produce findings that can be evaluated honestly —
                including what worked, what needs improvement, and what the next steps should be.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-sky-500/20 text-[10px] font-mono text-slate-600 uppercase tracking-widest">
              C3JNVG Pilot Standard
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
