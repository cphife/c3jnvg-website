import { Target, Radio, Cpu, BarChart3, FileText } from 'lucide-react'

const STEPS = [
  {
    num:   '01',
    icon:  Target,
    label: 'Plan',
    title: 'Define Scope & Objectives',
    desc:  'Define assets, access requirements, safety constraints, and inspection objectives in coordination with agency and partner stakeholders.',
    tags:  'Site assessment · Safety planning · Access coordination · Data requirements',
  },
  {
    num:   '02',
    icon:  Radio,
    label: 'Capture',
    title: 'Drone-Assisted Data Collection',
    desc:  'Collect visual, thermal, and mapping data through coordinated drone-assisted workflows designed for rail, crossing, structure, and facility environments.',
    tags:  'Visual imagery · Thermal data · 3D mapping · Flight coordination',
  },
  {
    num:   '03',
    icon:  Cpu,
    label: 'Analyze',
    title: 'AI-Assisted Defect Review',
    desc:  'Use AI-assisted review to flag visible defects, hazards, and condition indicators across collected imagery and data layers.',
    tags:  'Defect flagging · Hazard detection · Condition comparison · Annotation',
  },
  {
    num:   '04',
    icon:  BarChart3,
    label: 'Score',
    title: 'Risk & Priority Ranking',
    desc:  'Assign structured safety risk scores and maintenance-priority rankings based on defect type, observed severity, and asset criticality.',
    tags:  'Risk scoring · Priority ranking · Severity classification · Asset indexing',
  },
  {
    num:   '05',
    icon:  FileText,
    label: 'Report',
    title: 'Deliver Actionable Findings',
    desc:  'Deliver annotated visuals, condition summaries, risk-ranked defect reports, and pilot findings for agency and partner review.',
    tags:  'Annotated imagery · Condition summaries · Priority reports · Pilot findings',
  },
]

export default function WorkflowSection() {
  return (
    <section className="bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay" />
      <div className="absolute inset-0 rail-pattern" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="flex justify-center mb-4">
            <div className="label-tag">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              Platform Workflow
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight mb-4">
            From Field Data to Maintenance Decisions
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            A structured five-step workflow built for practical deployment with transit agencies,
            rail stakeholders, and infrastructure partners.
          </p>
        </div>

        {/* Desktop: horizontal */}
        <div className="hidden lg:flex items-start gap-0 reveal">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={i} className="flex-1 relative">
                {/* Connector */}
                {i < STEPS.length - 1 && (
                  <div className="absolute top-[54px] left-[calc(50%+34px)] right-0 h-px border-t border-dashed border-sky-500/20" />
                )}
                <div className="flex flex-col items-center text-center px-4">
                  {/* Icon badge */}
                  <div className="relative mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-navy-800 border border-slate-700 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-sky-400" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-navy-950 border border-slate-700 flex items-center justify-center">
                      <span className="text-[9px] font-mono font-bold text-sky-500">{step.num}</span>
                    </div>
                  </div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-sky-400 mb-1">{step.label}</div>
                  <h3 className="text-sm font-bold text-white mb-2 leading-snug">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">{step.desc}</p>
                  <div className="text-[10px] font-mono text-slate-600">{step.tags}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden space-y-4">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={i} className="reveal flex gap-4 card-dark p-5">
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-navy-950 border border-slate-700 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-sky-400" />
                  </div>
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-navy-950 border border-slate-700 flex items-center justify-center">
                    <span className="text-[8px] font-mono font-bold text-sky-500">{step.num}</span>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-sky-400 mb-0.5">{step.label}</div>
                  <h3 className="text-sm font-bold text-white mb-1.5">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
