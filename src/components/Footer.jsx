import { Mail, MapPin } from 'lucide-react'

const NAV_GROUPS = [
  {
    label: 'Platform',
    links: [
      { label: 'Platform Overview', href: '#platform'  },
      { label: 'Workflow',          href: '#platform'  },
      { label: 'Use Cases',         href: '#use-cases' },
    ],
  },
  {
    label: 'Programs',
    links: [
      { label: 'Pilot Program',    href: '#pilot'    },
      { label: 'Pilot Outcomes',   href: '#pilot'    },
      { label: 'Partners',         href: '#partners' },
    ],
  },
  {
    label: 'Company',
    links: [
      { label: 'About C3JNVG',   href: '#about'                                     },
      { label: 'Contact',         href: '#contact'                                   },
      { label: 'Discuss a Pilot', href: 'mailto:C3logistics@c3jnvg.com'              },
    ],
  },
]

const FUTURE_PAGES = ['Services', 'Pilot Program', 'Partners', 'Grants & Demonstrations', 'Contact']

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Footer() {
  const handleLink = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      scrollTo(href)
    }
  }

  return (
    <footer className="bg-[#04080f] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Main grid ── */}
        <div className="py-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand / contact column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-sky-500/10 border border-sky-500/30 rounded-lg flex items-center justify-center">
                <span className="font-mono font-black text-sky-400 text-sm tracking-tight">C3</span>
              </div>
              <div>
                <div className="font-black text-white tracking-tight leading-none text-[15px]">C3JNVG</div>
                <div className="text-[9px] font-semibold text-sky-400/80 tracking-[0.18em] uppercase leading-none mt-0.5">
                  Infrastructure Intelligence
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
              AI-assisted drone inspection, condition assessment, safety risk scoring, and
              maintenance-priority reporting for rail and transit infrastructure.
            </p>

            {/* Official contact block */}
            <div className="space-y-2.5">
              <div className="text-xs font-semibold text-slate-200 tracking-tight">
                C3JNVG Infrastructure &amp; Intelligence LLC
              </div>
              <div className="text-[11px] font-medium text-sky-400/70 uppercase tracking-[0.15em]">
                Infrastructure Intelligence
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-500">
                <MapPin className="w-4 h-4 text-slate-600 shrink-0" />
                Wisconsin
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-500">
                <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center shrink-0">
                  <span className="text-[9px] font-bold text-slate-400">CP</span>
                </div>
                Christopher Phifer, Owner
              </div>
              <a
                href="mailto:C3logistics@c3jnvg.com"
                className="flex items-center gap-2.5 text-sm text-slate-500 hover:text-sky-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-600 shrink-0" />
                C3logistics@c3jnvg.com
              </a>
            </div>
          </div>

          {/* Nav groups */}
          {NAV_GROUPS.map((group) => (
            <div key={group.label}>
              <div className="text-[10px] font-semibold uppercase tracking-widest text-slate-600 mb-4">
                {group.label}
              </div>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLink(e, link.href)}
                      className="text-sm text-slate-500 hover:text-slate-200 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Future pages notice ── */}
        <div className="py-4 border-t border-slate-800/60">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] text-slate-600 uppercase tracking-wider">
              Future pages planned:
            </span>
            {FUTURE_PAGES.map((p) => (
              <span key={p} className="text-[10px] font-mono text-slate-700 border border-slate-800 rounded px-2 py-0.5">
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="py-5 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} C3JNVG Infrastructure &amp; Intelligence LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-700">
            <span>Wisconsin &middot; c3jnvg.com</span>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-500/60" />
              <span>Platform in Development</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
