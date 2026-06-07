import { ArrowRight, ChevronRight, Activity, Layers } from 'lucide-react'

/* ─── Mock dashboard sub-components ──────────────────────────────── */

function RailScanSVG() {
  return (
    <svg viewBox="0 0 320 80" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      {/* Rail bed fill */}
      <rect x="0" y="33" width="320" height="14" fill="rgba(14,165,233,0.04)" />
      {/* Rails */}
      <line x1="0" y1="36" x2="320" y2="36" stroke="rgba(148,163,184,0.5)" strokeWidth="1.5" />
      <line x1="0" y1="44" x2="320" y2="44" stroke="rgba(148,163,184,0.5)" strokeWidth="1.5" />
      {/* Ties */}
      {[...Array(17)].map((_, i) => (
        <rect key={i} x={i * 20 - 1} y="32" width="7" height="16" fill="rgba(100,116,139,0.32)" rx="0.5" />
      ))}
      {/* Active scan zone */}
      <rect x="58" y="18" width="124" height="44" fill="rgba(14,165,233,0.05)" rx="2" />
      <rect x="58" y="18" width="124" height="44" fill="none" stroke="rgba(14,165,233,0.28)" strokeWidth="0.75" strokeDasharray="4 2" rx="2" />
      {/* Defect markers */}
      <circle cx="108" cy="36" r="4.5" fill="rgba(239,68,68,0.14)" stroke="#ef4444" strokeWidth="1" />
      <circle cx="108" cy="36" r="1.5"  fill="#ef4444" />
      <circle cx="148" cy="44" r="4"   fill="rgba(245,158,11,0.14)" stroke="#f59e0b" strokeWidth="1" />
      <circle cx="148" cy="44" r="1.5"  fill="#f59e0b" />
      <circle cx="170" cy="40" r="3.5" fill="rgba(14,165,233,0.14)" stroke="#0ea5e9" strokeWidth="1" />
      <circle cx="170" cy="40" r="1.5"  fill="#0ea5e9" />
      {/* MP labels */}
      <text x="103" y="14" fontSize="6" fill="rgba(239,68,68,0.75)"  fontFamily="monospace">MP 23.4</text>
      <text x="142" y="14" fontSize="6" fill="rgba(245,158,11,0.75)" fontFamily="monospace">MP 18.9</text>
      <text x="163" y="14" fontSize="6" fill="rgba(14,165,233,0.75)" fontFamily="monospace">MP 31.2</text>
      {/* Drone path */}
      <path d="M 58 40 Q 118 24 182 40" fill="none" stroke="rgba(14,165,233,0.18)" strokeWidth="0.75" strokeDasharray="3 2" />
      <circle cx="58" cy="40" r="3" fill="rgba(14,165,233,0.22)" stroke="#0ea5e9" strokeWidth="0.75" />
      <circle cx="58" cy="40" r="1" fill="#0ea5e9" />
      {/* Subtle grid */}
      {[12,30,50,68].map((y) => (
        <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="rgba(14,165,233,0.035)" strokeWidth="0.5" />
      ))}
      {[40,80,120,160,200,240,280].map((x) => (
        <line key={x} x1={x} y1="0" x2={x} y2="80" stroke="rgba(14,165,233,0.035)" strokeWidth="0.5" />
      ))}
    </svg>
  )
}

function RiskGauge({ score = 72 }) {
  const r     = 27
  const circ  = 2 * Math.PI * r
  const sweep = circ * 0.75
  return (
    <div className="relative flex items-center justify-center w-20 h-20">
      <svg width="80" height="80" viewBox="0 0 80 80">
        <defs>
          <linearGradient id="rg" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#22d3ee" />
            <stop offset="55%"  stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>
        {/* Track */}
        <circle cx="40" cy="40" r={r} fill="none" stroke="rgba(51,65,85,0.9)" strokeWidth="5"
          strokeDasharray={`${sweep} ${circ - sweep}`}
          strokeLinecap="round"
          transform="rotate(135 40 40)"
        />
        {/* Value arc */}
        <circle cx="40" cy="40" r={r} fill="none" stroke="url(#rg)" strokeWidth="5"
          strokeDasharray={`${sweep * (score / 100)} ${circ}`}
          strokeLinecap="round"
          transform="rotate(135 40 40)"
        />
      </svg>
      <div className="absolute text-center leading-none">
        <div className="text-xl font-black text-amber-400">{score}</div>
        <div className="text-[9px] text-slate-500 uppercase tracking-wide">/100</div>
      </div>
    </div>
  )
}

const DEFECT_FLAGS = [
  { label: 'Vegetation Encroachment', level: 'HIGH', cls: 'text-red-400   bg-red-500/10   border-red-500/20'   },
  { label: 'Drainage Obstruction',    level: 'MED',  cls: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
  { label: 'Surface Deterioration',   level: 'LOW',  cls: 'text-sky-400   bg-sky-500/10   border-sky-500/20'   },
]

const PRIORITY_QUEUE = [
  { rank: 1, mp: 'MP 23.4', desc: 'Vegetation — Critical Encroachment', level: 'CRITICAL', cls: 'text-red-400'   },
  { rank: 2, mp: 'MP 18.9', desc: 'Drainage — Obstruction Risk',        level: 'HIGH',     cls: 'text-amber-400' },
  { rank: 3, mp: 'MP 31.2', desc: 'Surface — Monitoring Required',       level: 'MEDIUM',   cls: 'text-sky-400'   },
]

function MockDashboard() {
  return (
    <div className="relative bg-navy-900 border border-slate-700/70 rounded-2xl overflow-hidden shadow-2xl shadow-black/70">
      {/* Header bar */}
      <div className="bg-navy-800 border-b border-slate-700/60 px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
          <span className="text-[11px] font-mono text-slate-300 uppercase tracking-widest">
            Inspection Session Active
          </span>
        </div>
        <span className="text-[11px] font-mono text-slate-500">WI Rail · Segment A-7</span>
      </div>

      {/* Corridor scan */}
      <div className="px-5 pt-4 pb-2">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
            Corridor Scan — Visual Overlay
          </span>
          <span className="text-[10px] font-mono text-slate-600">3 flags active</span>
        </div>
        <div className="h-20 bg-navy-950 rounded-lg border border-slate-800 overflow-hidden">
          <RailScanSVG />
        </div>
      </div>

      {/* Risk score + defect flags */}
      <div className="px-5 pb-3 grid grid-cols-2 gap-3">
        {/* Risk gauge */}
        <div className="bg-navy-950 rounded-lg p-3 border border-slate-800">
          <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-2">
            Overall Risk Score
          </div>
          <div className="flex items-center gap-2">
            <RiskGauge score={72} />
            <div>
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wide">Elevated</div>
              <div className="mt-2 h-1 w-16 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full w-[72%] bg-gradient-to-r from-sky-500 via-amber-400 to-red-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Defect flags */}
        <div className="bg-navy-950 rounded-lg p-3 border border-slate-800">
          <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-2">Defect Flags</div>
          <div className="space-y-1.5">
            {DEFECT_FLAGS.map((f) => (
              <div key={f.label} className={`flex items-center justify-between px-2 py-1 rounded border text-[10px] ${f.cls}`}>
                <span className="text-slate-300 truncate">{f.label}</span>
                <span className="font-mono font-bold ml-1 shrink-0">{f.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Data layer toggles */}
      <div className="px-5 pb-3">
        <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
          <Layers className="w-3 h-3" /> Data Layers
        </div>
        <div className="flex gap-2">
          {[
            { label: 'Visual',   active: true,  cls: 'bg-sky-500/15 border-sky-500/40 text-sky-400'        },
            { label: 'Thermal',  active: true,  cls: 'bg-orange-500/10 border-orange-500/25 text-orange-400' },
            { label: '3D Map',   active: false, cls: 'border-slate-700 text-slate-500'                      },
          ].map((l) => (
            <button
              key={l.label}
              className={`text-[11px] font-medium px-3 py-1.5 rounded-md border transition-colors ${l.cls}`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      {/* Maintenance priority queue */}
      <div className="px-5 pb-5">
        <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
          <Activity className="w-3 h-3" /> Maintenance Priority Queue
        </div>
        <div className="space-y-1.5">
          {PRIORITY_QUEUE.map((item) => (
            <div
              key={item.rank}
              className="flex items-center gap-3 bg-navy-950 rounded-lg px-3 py-2 border border-slate-800"
            >
              <span className="text-[10px] font-mono text-slate-600 w-3 shrink-0">{item.rank}</span>
              <span className="text-[10px] font-mono text-sky-500 shrink-0">{item.mp}</span>
              <span className="text-[10px] text-slate-400 flex-1 truncate">{item.desc}</span>
              <span className={`text-[9px] font-mono font-bold shrink-0 ${item.cls}`}>{item.level}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Status bar */}
      <div className="bg-navy-800/60 border-t border-slate-800 px-5 py-2 flex items-center justify-between">
        <span className="text-[10px] font-mono text-slate-600">c3jnvg.com · Pilot Preview Interface</span>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
          <span className="text-[10px] text-slate-600">Session Active</span>
        </div>
      </div>
    </div>
  )
}

/* ─── Hero section ────────────────────────────────────────────────── */

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 bg-navy-950 overflow-hidden">
      {/* Background textures */}
      <div className="absolute inset-0 grid-overlay" />
      <div className="absolute inset-0 rail-pattern" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />

      {/* Radial glows */}
      <div className="absolute top-1/3 left-1/4  w-[640px] h-[640px] rounded-full bg-sky-500/4  blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] rounded-full bg-cyan-500/3 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: copy ── */}
          <div className="reveal">
            {/* Section label */}
            <div className="label-tag mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse-slow" />
              Rail &amp; Transit Infrastructure Intelligence
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-white leading-[1.07] tracking-tight mb-6">
              Rail &amp; Transit{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">
                Infrastructure
              </span>{' '}
              Intelligence
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed mb-4 max-w-xl">
              AI-assisted drone, thermal, and 3D mapping workflows for condition assessment,
              safety risk scoring, and maintenance-priority reporting.
            </p>

            <p className="text-base text-slate-400 leading-relaxed mb-10 max-w-xl">
              C3JNVG helps agencies and infrastructure partners improve visibility into rail
              corridors, grade crossings, bridges, elevated structures, transit yards, and
              post-storm risk areas through a human-led, drone-assisted inspection model.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:C3logistics@c3jnvg.com?subject=Pilot Discussion Request"
                className="btn-primary px-7 py-3.5 text-sm"
              >
                Discuss a Pilot
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#use-cases"
                onClick={(e) => { e.preventDefault(); document.querySelector('#use-cases')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-secondary px-7 py-3.5 text-sm"
              >
                View Use Cases
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Quick pillars */}
            <div className="mt-12 flex flex-wrap gap-6">
              {[
                { val: 'Human-Led',    sub: 'Inspection Model'  },
                { val: 'AI-Assisted',  sub: 'Defect Review'     },
                { val: 'Rail-First',   sub: 'Use Cases'         },
              ].map((s) => (
                <div key={s.val} className="border-l-2 border-sky-500/40 pl-3">
                  <div className="text-sm font-bold text-white">{s.val}</div>
                  <div className="text-xs text-slate-500">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: mock dashboard ── */}
          <div className="reveal relative">
            <div className="absolute -inset-4 bg-sky-500/4 rounded-2xl blur-2xl" />
            <MockDashboard />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-950 to-transparent pointer-events-none" />
    </section>
  )
}
