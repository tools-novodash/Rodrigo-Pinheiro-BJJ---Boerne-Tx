import { Section, SectionHeader, Button } from '@/components/ui'

interface HowToStartProps {
  onBookClick: () => void
}

const steps = [
  {
    number: '01',
    title: 'Fill out the form',
    description: 'Click the button below and fill out the short form. Takes less than a minute.',
  },
  {
    number: '02',
    title: 'Choose your class',
    description: 'Pick your class type and select a date and time that fits your schedule.',
  },
  {
    number: '03',
    title: 'Show up & train',
    description: "You'll get email and SMS confirmations with all the details. Just show up.",
  },
]

export function HowToStart({ onBookClick }: HowToStartProps) {
  return (
    <Section id="how-to-start" aria-labelledby="how-heading">
      <SectionHeader
        id="how-heading"
        label="Simple Process"
        title="HOW TO GET STARTED"
        subtitle="Three easy steps between you and your first free class."
        center
      />

      <div className="grid gap-8 md:grid-cols-3 mb-14">
        {steps.map((step, i) => (
          <article
            key={step.number}
            className="flex flex-col items-center text-center gap-4"
          >
            {/* Number + connector */}
            <div className="relative flex items-center justify-center">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full text-white text-xl font-bold"
                style={{
                  background: 'var(--color-accent)',
                  fontFamily: 'var(--font-display)',
                  boxShadow: '0 8px 24px rgba(var(--accent-rgb), 0.3)',
                }}
              >
                {step.number}
              </div>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="hidden md:block absolute left-full w-full h-px top-1/2 -translate-y-1/2 ml-4"
                  style={{ background: 'linear-gradient(to right, var(--color-accent), var(--color-border))' }}
                  aria-hidden="true"
                />
              )}
            </div>

            <h3 className="text-fluid-h3 font-bold text-[var(--color-text)]" style={{ fontFamily: 'var(--font-display)' }}>
              {step.title}
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-xs">
              {step.description}
            </p>
          </article>
        ))}
      </div>

      <div className="flex justify-center">
        <Button onClick={onBookClick} size="lg">
          Schedule Free Trial Class →
        </Button>
      </div>
    </Section>
  )
}
