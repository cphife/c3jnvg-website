import { useEffect } from 'react'
import Header         from './components/Header'
import Hero           from './components/Hero'
import PillarStrip    from './components/PillarStrip'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'
import UseCaseCards   from './components/UseCaseCards'
import WorkflowSection from './components/WorkflowSection'
import PilotSection   from './components/PilotSection'
import MetricsSection from './components/MetricsSection'
import PartnerSection from './components/PartnerSection'
import SafetySection  from './components/SafetySection'
import AboutSection   from './components/AboutSection'
import CTASection     from './components/CTASection'
import Footer         from './components/Footer'

export default function App() {
  // Scroll-reveal: add .visible when element enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      {/* 1 — Navigation */}
      <Header />

      <main>
        {/* 2 — Hero */}
        <Hero />

        {/* 3 — Trust / Positioning Strip */}
        <PillarStrip />

        {/* 4 — Problem */}
        <ProblemSection />

        {/* 5 — Solution */}
        <SolutionSection />

        {/* 6 — Use Cases */}
        <UseCaseCards />

        {/* 7 — Platform Workflow */}
        <WorkflowSection />

        {/* 8 — Pilot Demonstration */}
        <PilotSection />

        {/* 9 — Success Metrics */}
        <MetricsSection />

        {/* 10 — Partners */}
        <PartnerSection />

        {/* 11 — Compliance & Safety */}
        <SafetySection />

        {/* 12 — About */}
        <AboutSection />

        {/* 13 — Final CTA */}
        <CTASection />
      </main>

      {/* 14 — Footer */}
      <Footer />
    </div>
  )
}
