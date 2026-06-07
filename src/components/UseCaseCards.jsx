import { GitBranch, AlertTriangle, Building2, Warehouse, CloudRain, FileText } from 'lucide-react'

const CASES = [
  {
    icon:   GitBranch,
    color:  'sky',
    tag:    'Rail Corridor',
    title:  'Rail Corridor Inspection',
    desc:   'Detect vegetation encroachment, obstructions, drainage issues, erosion, and washout risk along rail corridors with drone-assisted data collection and repeatable inspection records.',
    points: ['Vegetation encroachment detection', 'Drainage and erosion assessment', 'Obstruction documentation', 'Washout risk identification'],
  },
  {
    icon:   AlertTriangle,
    color:  'amber',
    tag:    'Grade Crossings',
    title:  'Grade Crossing Safety Assessment',
    desc:   'Document blocked sightlines, pavement damage, access hazards, vegetation, and crossing-area risk to support safety review and maintenance planning.',
    points: ['Sightline obstruction assessment', 'Pavement condition documentation', 'Access hazard identification', 'Vegetation risk flagging'],
  },
  {
    icon:   Building2,
    color:  'sky',
    tag:    'Bridges & Structures',
    title:  'Bridge & Elevated Structure Documentation',
    desc:   'Capture visual indicators of cracking, corrosion, spalling, water intrusion, and structural deterioration on bridges, culverts, and elevated transit infrastructure.',
    points: ['Cracking and spalling detection', 'Corrosion documentation', 'Water intrusion indicators', 'Underside and hard-to-reach coverage'],
  },
  {
    icon:   Warehouse,
    color:  'cyan',
    tag:    'Transit Facilities',
    title:  'Transit Yard & Facility Assessment',
    desc:   'Identify pavement damage, standing water, access hazards, asset condition issues, and maintenance priorities across transit yards, maintenance facilities, and operational sites.',
    points: ['Pavement condition mapping', 'Standing water and drainage', 'Asset condition documentation', 'Access hazard identification'],
  },
  {
    icon:   CloudRain,
    color:  'amber',
    tag:    'Post-Storm',
    title:  'Post-Storm Infrastructure Assessment',
    desc:   'Support faster preliminary condition assessment after flooding, wind events, erosion, heavy rain, or disruptive weather to help prioritize inspection and restoration resources.',
    points: ['Post-flood corridor assessment', 'Erosion and washout documentation', 'Drainage and debris identification', 'Emergency priority reporting'],
  },
  {
    icon:   FileText,
    color:  'sky',
    tag:    'Reporting',
    title:  'Maintenance-Priority Reporting',
    desc:   'Convert inspection data into risk-ranked reports and structured condition summaries for maintenance, safety, asset management, and state-of-good-repair planning teams.',
    points: ['Risk-ranked defect summaries', 'Annotated inspection visuals', 'Condition trend comparison', 'Asset management decision support'],
  },
]

const COLOR = {
  sky: {
    tag:   'text-sky-700 bg-sky-50 border-sky-100',
    icon:  'text-sky-600 bg-sky-50 border-sky-100',
    dot:   'bg-sky-500',
    hover: 'hover:border-sky-200',
  },
  amber: {
    tag:   'text-amber-700 bg-amber-50 border-amber-100',
    icon:  'text-amber-700 bg-amber-50 border-amber-100',
    dot:   'bg-amber-500',
    hover: 'hover:border-amber-200',
  },
  cyan: {
    tag:   'text-cyan-700 bg-cyan-50 border-cyan-100',
    icon:  'text-cyan-700 bg-cyan-50 border-cyan-100',
    dot:   'bg-cyan-500',
    hover: 'hover:border-cyan-200',
  },
}

export default function UseCaseCards() {
  return (
    <section id="use-cases" className="bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-45" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-sky-700 bg-sky-50 border border-sky-200 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              Rail-First Use Cases
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4">
            Rail-First Use Cases
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            C3JNVG's platform is designed for practical application across the core asset types
            that define rail and transit infrastructure condition assessment.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASES.map((c, i) => {
            const Icon   = c.icon
            const colors = COLOR[c.color]
            return (
              <div
                key={i}
                className={`reveal card-light p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group ${colors.hover}`}
              >
                <div className="flex items-center justify-between mb-5">
                  <span className={`text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full border ${colors.tag}`}>
                    {c.tag}
                  </span>
                  <div className={`w-9 h-9 rounded-lg border flex items-center justify-center ${colors.icon}`}>
                    <Icon className="w-[18px] h-[18px]" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-3 leading-snug">{c.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{c.desc}</p>
                <div className="space-y-1.5 border-t border-slate-100 pt-4">
                  {c.points.map((pt, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${colors.dot}`} />
                      <span className="text-xs text-slate-500">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
