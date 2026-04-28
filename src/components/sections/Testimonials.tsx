import { Section, SectionHeader } from '@/components/ui'
import { testimonials } from '@/data/testimonials'

export function Testimonials() {
  return (
    <Section id="testimonials" aria-labelledby="testimonials-heading" subtle>
      <SectionHeader
        id="testimonials-heading"
        label="Google Reviews"
        title="GET TO KNOW SOME OF OUR STUDENTS"
        subtitle="Real stories from real people who train with us every week."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <article
            key={t.id}
            className="card-hover flex flex-col gap-4 rounded-[var(--radius-card)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-sm)]"
          >
            {/* Stars */}
            <div className="flex items-center gap-1" aria-label="5 stars" role="img">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#F07C00" aria-hidden="true">
                  <path d="M7 1l1.545 4.755H14l-4.045 2.94 1.545 4.755L7 10.51l-4.5 2.94 1.545-4.755L0 5.755h5.455z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex-1">
              &ldquo;{t.text}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ background: t.avatarColor }}
                aria-hidden="true"
              >
                {t.initial}
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--color-text)]">{t.name}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{t.timeAgo} · Google</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
