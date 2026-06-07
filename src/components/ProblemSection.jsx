import { EyeOff, ShieldAlert, FileX, Zap, BarChart2 } from 'lucide-react'

const PROBLEMS = [
  {
    icon: EyeOff,
    title: 'Limited Visual Coverage',
    desc:  'Hard-to-access areas along rail corridors, elevated structures, and drainage channels are difficult to inspect consistently from ground level.',
  },
  {
    icon: ShieldAlert,
    title: 'Field Safety Exposure',
    desc:  'Inspection near active tracks, traffic corridors, water crossings, unstable ground, or elevated structures creates real safety risk for field personnel.',
  },
  {
    icon: FileX,
    title: 'Inconsistent Documentation',
    desc:  'Inspection records may vary across inspectors, visits, and time periods — making condition tracking and baseline comparisons difficult.',
  },
  {
    icon: Zap,
    title: 'Slower Post-Storm Assessment',
    desc:  'After flooding, erosion, or severe weather events, speed of condition assessment directly affects safety decisions and service restoration timelines.',
  },
  {
    icon: BarChart2,
    title: 'Difficult Maintenance Prioritization',
    desc:  'With limited resources and large asset inventories, determining which defects to address first requires structured, comparable condition data.',
  },
]

export default function ProblemSection() {
  return (
    <section id="problem" className="bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-55" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">

        {/* Header */}
        <div className="max-w-2xl mb-14 reveal">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            The Challenge
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-5">
            Infrastructure Teams Need Faster, Safer, More Repeatable Condition Data
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Rail and transit infrastructure is exposed to weather, aging, corrosion, drainage problems,
            vegetation growth, erosion, pavement deterioration, and operational safety hazards.
            Traditional visual inspections remain essential, but field access, line-of-sight
            limitations, inconsistent documentation, and hazardous locations can make frequent
            condition assessment difficult.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROBLEMS.map((p, i) => {
            const Icon = p.icon
            return (
              <div
                key={i}
                className="reveal card-light p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center mb-4 group-hover:border-amber-200 transition-colors">
                  <Icon className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-2">{p.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            )
          })}

          {/* Pull-quote card */}
          <div className="reveal card-light p-6 bg-gradient-to-br from-slate-900 to-navy-800 border-slate-700 sm:col-span-2 lg:col-span-1 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-widest text-sky-400 mb-3">Key Insight</div>
              <p className="text-sm text-slate-200 leading-relaxed font-medium">
                "More frequent, consistent, and safely collected condition data directly supports
                better maintenance decisions and state-of-good-repair outcomes."
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700 text-[10px] text-slate-500 uppercase tracking-widest">
              C3JNVG Platform Objective
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
