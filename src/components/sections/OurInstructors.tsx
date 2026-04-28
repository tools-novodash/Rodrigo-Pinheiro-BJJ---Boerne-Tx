import { Section, SectionHeader, Button, ImagePlaceholder } from '@/components/ui'

interface OurInstructorsProps {
  onBookClick: () => void
}

const instructors = [
  {
    id: 'riba',
    name: 'Ribamar (Riba)',
    credential: 'World Champion Masters · Black Belt',
    bio: null,
  },
  {
    id: 'nathi',
    name: 'Nathiely De Jesus (Nathi)',
    credential: 'World Champion · Black Belt',
    bio: null,
  },
]

export function OurInstructors({ onBookClick }: OurInstructorsProps) {
  return (
    <Section id="our-instructors" aria-labelledby="instructors-heading">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        {/* Text */}
        <div>
          <SectionHeader
            id="instructors-heading"
            label="Meet the Team"
            title="MEET RIBA AND NATHI, WORLD CHAMPION HEAD COACHES"
          />

          <p className="text-fluid-body text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-xl">
            Both share a story of resilience: they came from Brazil with a dream of conquering the World Championship, but it was not easy. They needed help from many people and Riba even slept on the mats to save money. That journey made both of them world-class instructors who learned how to pursue any goal with discipline. Now, they want to pass that mindset on to their students, no matter the age or level.
          </p>

          <Button onClick={onBookClick} size="lg">
            Meet them in your first free trial class →
          </Button>
        </div>

        {/* Instructor cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {instructors.map((coach) => (
            <article
              key={coach.id}
              className="flex flex-col gap-4 rounded-[var(--radius-card)] border border-[var(--color-border)] p-5"
            >
              <ImagePlaceholder
                label={`Photo of ${coach.name}`}
                aspectRatio="3/4"
              />
              <div>
                <h3 className="text-base font-bold text-[var(--color-text)]" style={{ fontFamily: 'var(--font-display)' }}>
                  {coach.name}
                </h3>
                <p className="text-xs text-[var(--color-accent)] font-semibold mt-0.5">
                  {coach.credential}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
