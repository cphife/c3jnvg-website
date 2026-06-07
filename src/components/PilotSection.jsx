import { MapPin, CheckCircle, ChevronRight, ArrowRight } from 'lucide-react'

const PILOT_OPTIONS = [
  'One rail or transit corridor segment',
  'Three to five grade crossings',
  'One transit yard or maintenance facility',
  'A small group of bridges or elevated structures',
  'A post-storm infrastructure assessment route',
]

const PILOT_OUTPUTS = [
  'Site inspection imagery',
  'Defect and hazard documentation',
  'Annotated inspection visuals',
  'Asset condition summaries',
  'Safety risk scoring',
  'Maintenance-priority ranking',
  'Before-and-after comparison framework',
  'Final pilot report',
  'Recommendations for larger deployment',
]

export default function PilotSection() {
  return (
    <section id="pilot" className="bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">

        {/* Header */}
        <div className="max-w-2xl mb-14 reveal">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-sky-700 bg-sky-50 border border-sky-200 px-3 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
            Pilot Demonstration — Section 8
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-5">
            Designed for Practical Pilot Deployment
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            A first pilot can focus on a limited set of assets so the project can be completed,
            evaluated, and improved before larger deployment. C3JNVG is structured to start
            small and demonstrate real value before scaling.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Pilot scope */}
          <div className="reveal card-light p-8">
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="w-4 h-4 text-sky-600" />
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Pilot Scope Options</h3>
            </div>
            <div className="space-y-4">
              {PILOT_OPTIONS.map((opt, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[10px] font-bold text-sky-600">{i + 1}</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-snug">{opt}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-slate-50 border border-slate-200 rounded-lg">
              <p className="text-xs text-slate-500 leading-relaxed">
                Pilot scope is agreed upon in coordination with partner agency requirements,
                site access, and operational constraints. Scope can be adjusted to match
                partner priorities.
              </p>
            </div>
          </div>

          {/* Pilot outputs */}
          <div className="reveal card-light p-8">
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle className="w-4 h-4 text-sky-600" />
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Expected Pilot Outputs</h3>
            </div>
            <div className="space-y-0">
              {PILOT_OUTPUTS.map((out, i) => (
                <div key={i} className="flex items-center gap-3 py-2.5 border-b border-slate-100 last:border-0">
                  <ChevronRight className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                  <span className="text-sm text-slate-600">{out}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA row */}
        <div className="mt-10 flex flex-wrap gap-4 items-center reveal">
          <a
            href="mailto:C3logistics@c3jnvg.com?subject=Pilot Discussion"
            className="btn-primary px-7 py-3.5 text-sm"
          >
            Discuss a Pilot
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-sm text-slate-500">
            Ready to discuss a pilot aligned to your infrastructure assets and priorities.
          </p>
        </div>
      </div>
    </section>
  )
}
