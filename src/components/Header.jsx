import { useState, useEffect } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Platform',  href: '#platform'  },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Pilot',     href: '#pilot'     },
  { label: 'Partners',  href: '#partners'  },
  { label: 'Contact',   href: '#contact'   },
]

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Header() {
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 28)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const handleLink = (e, href) => {
    e.preventDefault()
    setOpen(false)
    scrollTo(href)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/95 backdrop-blur-md border-b border-slate-800 shadow-xl shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <a
            href="#hero"
            onClick={(e) => handleLink(e, '#hero')}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="w-9 h-9 bg-sky-500/10 border border-sky-500/30 rounded-lg flex items-center justify-center group-hover:border-sky-400/60 transition-colors">
                <span className="font-mono font-black text-sky-400 text-sm tracking-tight">C3</span>
              </div>
              {/* Accent dot */}
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-sky-500 rounded-full" />
            </div>
            <div>
              <div className="font-black text-white tracking-tight leading-none text-[15px]">
                C3JNVG
              </div>
              <div className="text-[9px] font-semibold text-sky-400/80 tracking-[0.18em] uppercase leading-none mt-0.5">
                Infrastructure Intelligence
              </div>
            </div>
          </a>

          {/* ── Desktop nav ── */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLink(e, link.href)}
                className="text-sm font-medium text-slate-400 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* ── Desktop CTA ── */}
          <div className="hidden lg:flex">
            <a
              href="mailto:C3logistics@c3jnvg.com?subject=Pilot Discussion Request"
              className="btn-primary text-sm px-5 py-2.5"
            >
              Discuss a Pilot
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            className="lg:hidden p-2 text-slate-400 hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {open && (
        <div className="lg:hidden bg-navy-950/98 backdrop-blur-md border-b border-slate-800">
          <div className="px-6 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLink(e, link.href)}
                className="block text-sm font-medium text-slate-300 hover:text-white px-3 py-2.5 rounded-lg hover:bg-white/5 transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="mailto:C3logistics@c3jnvg.com?subject=Pilot Discussion Request"
                className="btn-primary text-sm px-5 py-3 w-full justify-center"
              >
                Discuss a Pilot
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
