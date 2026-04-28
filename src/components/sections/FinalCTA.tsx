import { Section, Button } from '@/components/ui'

interface FinalCTAProps {
  onBookClick: () => void
}

export function FinalCTA({ onBookClick }: FinalCTAProps) {
  return (
    <Section id="final-cta" aria-labelledby="cta-heading" accent>
      <div className="flex flex-col items-center text-center gap-6 py-8">
        <h2
          id="cta-heading"
          className="text-fluid-section uppercase text-white"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
        >
          READY TO START YOUR<br />JIU-JITSU JOURNEY?
        </h2>

        <p className="text-fluid-sub text-white/75 max-w-xl">
          Join students in Boerne who found confidence, fitness, and community at RP BJJ.
        </p>

        <Button
          onClick={onBookClick}
          variant="white"
          size="lg"
        >
          Book My First Free Trial Class →
        </Button>

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2" role="list">
          {['No experience needed', 'No commitment', 'First class always free'].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-white/70">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <circle cx="6" cy="6" r="6" fill="white" opacity="0.2" />
                <path d="M3.5 6L5.5 8L8.5 4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
