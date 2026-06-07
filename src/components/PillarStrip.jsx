import { Users, Radio, Cpu, FileBarChart } from 'lucide-react'

const PILLARS = [
  {
    icon: Users,
    title: 'Human-Led Inspection Support',
    desc:  'Designed to support qualified inspectors and agency personnel — not to replace professional engineering judgment.',
  },
  {
    icon: Radio,
    title: 'Drone + Thermal Data Capture',
    desc:  'Visual, thermal, and 3D mapping data collected through coordinated drone-assisted field workflows.',
  },
  {
    icon: Cpu,
    title: 'AI-Assisted Defect Review',
    desc:  'AI-assisted flagging of visible defects, hazards, and condition indicators across inspection imagery and data.',
  },
  {
    icon: FileBarChart,
    title: 'Maintenance-Priority Reporting',
    desc:  'Structured risk scoring and priority outputs for safety, planning, asset management, and state-of-good-repair teams.',
  },
]

export default function PillarStrip() {
  return (
    <section className="bg-navy-800 border-y border-slate-700/50 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-700/30 rounded-xl overflow-hidden">
          {PILLARS.map((p, i) => {
            const Icon = p.icon
            return (
              <div key={i} className="bg-navy-800 hover:bg-navy-700/80 transition-colors p-6 lg:p-8 group">
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4 group-hover:border-sky-500/40 transition-colors">
                  <Icon className="w-5 h-5 text-sky-400" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2 leading-snug">{p.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
