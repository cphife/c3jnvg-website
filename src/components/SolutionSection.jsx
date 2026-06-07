import { CheckCircle, Info, ArrowRight } from 'lucide-react'

const CAPABILITIES = [
  'Drone-based data collection over rail corridors and transit assets',
  'Thermal imaging for drainage, moisture intrusion, and heat anomalies',
  '3D mapping and photogrammetric documentation of structures and sites',
  'AI-assisted defect detection and visual condition flagging',
  'Repeatable inspection records for time-based condition comparison',
  'Structured safety risk scoring across rail and transit asset types',
  'Maintenance-priority ranking to support resource allocation decisions',
  'Annotated inspection visuals and structured condition summary reports',
]

const TECH_TAGS = ['Visual Imagery', 'Thermal Data', '3D Mapping', 'AI Analysis', 'Risk Scoring', 'Priority Reports']

export default function SolutionSection() {
  return (
    <section id="platform" className="bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay" />
      <div className="absolute inset-0 rail-pattern" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left: messaging */}
          <div className="reveal">
            <div className="label-tag mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              The Platform
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight mb-5">
              Human-Led, Drone-Assisted Condition Assessment
            </h2>
            <p className="text-base text-slate-300 leading-relaxed mb-8">
              C3JNVG is developing a platform that combines drone-based data collection, thermal
              imaging, 3D mapping, and AI-assisted analysis to help infrastructure teams detect
              visible defects, document hazards, compare conditions over time, and prioritize
              maintenance decisions.
            </p>

            {/* Important statement */}
            <div className="flex gap-3 bg-sky-500/5 border border-sky-500/20 rounded-xl p-5 mb-8">
              <Info className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
              <p className="text-sm text-slate-300 leading-relaxed">
                <span className="text-sky-400 font-semibold">C3JNVG does not replace qualified human inspectors.</span>{' '}
                The platform supports inspectors, engineers, maintenance teams, and agency personnel
                with better data capture, clearer visual evidence, repeatable records, and structured
                risk scoring.
              </p>
            </div>

            <a
              href="mailto:C3logistics@c3jnvg.com?subject=Platform Inquiry"
              className="btn-primary px-6 py-3 text-sm"
            >
              Learn More About the Platform
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right: capability checklist */}
          <div className="reveal">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-5">
              Platform Capabilities — In Development
            </div>
            <div className="space-y-3 mb-6">
              {CAPABILITIES.map((cap, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-navy-800/60 border border-slate-700/50 rounded-lg px-4 py-3 hover:border-sky-500/30 transition-colors group"
                >
                  <CheckCircle className="w-4 h-4 text-sky-500 mt-0.5 shrink-0 group-hover:text-sky-400 transition-colors" />
                  <span className="text-sm text-slate-300 leading-snug">{cap}</span>
                </div>
              ))}
            </div>

            {/* Tech stack tags */}
            <div className="flex flex-wrap gap-2">
              {TECH_TAGS.map((tag) => (
                <span key={tag} className="text-[10px] font-mono text-slate-500 border border-slate-700 rounded px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
