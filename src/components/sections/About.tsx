import { Section } from '@/components/ui'

export function About() {
  return (
    <Section id="about" aria-labelledby="about-heading" dark>
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">
          The Team
        </p>
        <h2
          id="about-heading"
          className="text-fluid-section uppercase text-white mb-6"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
        >
          RODRIGO PINHEIRO BJJ
        </h2>
        <p className="text-fluid-body text-white/60 leading-relaxed whitespace-pre-line">
          {"Rodrigo Pinheiro BJJ is a Brazilian Jiu-Jitsu team built on technical excellence.\nLed by Rodrigo Pinheiro, a Brazilian black belt with decades of experience as both an athlete and a coach,\nthe team focuses on creating beginner- and family-friendly gyms across the United States."}
        </p>
      </div>
    </Section>
  )
}
