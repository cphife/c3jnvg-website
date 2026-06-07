import { Train, Building, GraduationCap, Briefcase, Globe, Handshake, ArrowRight } from 'lucide-react'

const CONTRIBUTIONS = [
  'Identify a suitable pilot site within your network or service area',
  'Provide access to relevant infrastructure or communicate maintenance priorities',
  'Participate in pilot planning and scope definition',
  'Review inspection outputs and annotated condition reports',
  'Provide feedback on usefulness for maintenance, safety, asset management, or state-of-good-repair planning',
]

const PARTNER_TYPES = [
  { icon: Train,         label: 'Transit Agencies',                    desc: 'FTA-eligible transit authorities and transit operators' },
  { icon: Building,      label: 'Rail Infrastructure Stakeholders',    desc: 'Class I, regional, and short-line rail operators and owners' },
  { icon: Briefcase,     label: 'Engineering Firms',                   desc: 'Civil, structural, and transportation engineering organizations' },
  { icon: GraduationCap, label: 'Universities & Technical Colleges',   desc: 'Research institutions with transportation and infrastructure programs' },
  { icon: Globe,         label: 'Public Works Departments',            desc: 'State, county, and municipal infrastructure owners' },
  { icon: Handshake,     label: 'Transportation Planning Organizations', desc: 'MPOs, RTPOs, and regional transportation planning entities' },
]

export default function PartnerSection() {
  return (
    <section id="partners" className="bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">

        {/* Header */}
        <div className="max-w-3xl mb-14 reveal">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-sky-700 bg-sky-50 border border-sky-200 px-3 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
            Partnership Opportunities — Section 10
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-5">
            Built for Transit, Rail, Engineering, and Research Partners
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            C3JNVG is seeking eligible transit agencies, rail and infrastructure stakeholders,
            universities, engineering firms, and public-sector partners interested in exploring
            an FTA-aligned demonstration project focused on real-time infrastructure condition
            assessment and safety risk scoring.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* Partner type cards */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">Partner Types</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {PARTNER_TYPES.map((pt, i) => {
                const Icon = pt.icon
                return (
                  <div key={i} className="reveal card-light p-4 hover:shadow-sm transition-all group">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0 group-hover:border-sky-200 transition-colors">
                        <Icon className="w-4 h-4 text-sky-600" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-800 mb-0.5">{pt.label}</div>
                        <div className="text-xs text-slate-500 leading-snug">{pt.desc}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Contributions sidebar */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">Ideal Partner Contribution</h3>
            <div className="reveal card-light p-6">
              <div className="space-y-4 mb-6">
                {CONTRIBUTIONS.map((c, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[9px] font-bold text-sky-600">{i + 1}</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-snug">{c}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-slate-100 pt-5">
                <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                  Partner organizations are not required to fund platform development. Pilot
                  coordination can be structured around FTA demonstration grant frameworks.
                </p>
                <a
                  href="mailto:C3logistics@c3jnvg.com?subject=Partnership Inquiry"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors"
                >
                  Discuss a Partnership
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
