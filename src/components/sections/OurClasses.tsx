import { Section, SectionHeader, Button, ImagePlaceholder } from '@/components/ui'
import { programs } from '@/data/programs'
import type { ModalTag } from '@/hooks/useModal'

interface OurClassesProps {
  onBookClick: (tag: ModalTag) => void
}

const iconMap: Record<string, React.ReactNode> = {
  kids: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="8" r="3" />
      <path d="M6 20v-2a6 6 0 0 1 12 0v2" />
    </svg>
  ),
  'adults-beginners': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
  ),
  'adults-advanced': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12l3 3 5-5" />
    </svg>
  ),
  women: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2zM12 17v5M9 19h6" />
    </svg>
  ),
}

export function OurClasses({ onBookClick }: OurClassesProps) {
  return (
    <Section id="our-classes" aria-labelledby="classes-heading">
      <SectionHeader
        id="classes-heading"
        label="Our Classes"
        title="OUR PROGRAMS"
        subtitle="Whether you're a first-timer or a seasoned competitor, we have a class designed for you."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {programs.map((program) => (
          <article
            key={program.id}
            className="card-hover flex flex-col gap-4 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
          >
            {/* Icon */}
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl text-[var(--color-accent)]"
              style={{ background: 'var(--color-accent-subtle)' }}
            >
              {iconMap[program.id]}
            </div>

            {/* Tag */}
            <span className="inline-flex items-center rounded-full bg-[var(--color-accent-subtle)] px-3 py-1 text-xs font-semibold text-[var(--color-accent)] self-start">
              {program.tag}
            </span>

            {/* Content */}
            <div className="flex flex-col gap-2 flex-1">
              <h3 className="text-fluid-h3 font-bold text-[var(--color-text)]" style={{ fontFamily: 'var(--font-display)' }}>
                {program.title}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex-1">
                {program.description}
              </p>
            </div>

            {/* Image placeholder */}
            <ImagePlaceholder label={`${program.title} class photo`} aspectRatio="16/9" />

            {/* CTA */}
            <Button
              onClick={() => onBookClick(program.ctaTag as ModalTag)}
              variant="primary"
              size="sm"
              className="w-full"
            >
              Book Free Trial →
            </Button>
          </article>
        ))}
      </div>
    </Section>
  )
}
