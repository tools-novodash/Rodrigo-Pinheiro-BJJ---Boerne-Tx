import { Section } from '@/components/ui'

export function About() {
  return (
    <Section id="about" aria-labelledby="about-heading" dark>
      <div className="grid gap-12 md:grid-cols-12 items-center">
        {/* Logo */}
        <div className="md:col-span-4 flex justify-center">
          <img
            src="/logo.png"
            alt="Rodrigo Pinheiro BJJ"
            className="w-48 h-auto opacity-90"
          />
        </div>

        {/* Text */}
        <div className="md:col-span-8">
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
          <p className="text-fluid-body text-white/60 leading-relaxed max-w-2xl">
            Rodrigo Pinheiro BJJ is a Brazilian Jiu-Jitsu team built on technical excellence. Led by Rodrigo Pinheiro, a Brazilian black belt with decades of experience as both an athlete and a coach, the team focuses on creating beginner- and family-friendly gyms across the United States.
          </p>
        </div>
      </div>
    </Section>
  )
}
