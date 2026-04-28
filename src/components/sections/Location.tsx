import { Section, SectionHeader } from '@/components/ui'

export function Location() {
  return (
    <Section id="location" aria-labelledby="location-heading">
      <SectionHeader
        id="location-heading"
        label="Find Us"
        title="WHERE WE ARE"
        subtitle="Conveniently located in Boerne, TX — easy access from San Antonio."
      />

      <div className="grid gap-8 md:grid-cols-12 items-start">
        {/* Map embed */}
        <div className="md:col-span-7 rounded-[var(--radius-card)] overflow-hidden border border-[var(--color-border)] aspect-video">
          <iframe
            title="Rodrigo Pinheiro BJJ Boerne location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.0!2d-98.73!3d29.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z28255 Frontage Rd Suite 103, Boerne, TX 78006!5e0!3m2!1sen!2sus!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Contact info */}
        <address className="md:col-span-5 not-italic flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">Address</p>
            <p className="text-base text-[var(--color-text)]">
              28255 Frontage Rd Suite 103<br />
              Boerne, TX 78006
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">Phone</p>
            <a
              href="tel:+12108676156"
              className="text-base text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
            >
              +1 (210) 867-6156
            </a>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">Email</p>
            <a
              href="mailto:ribabjj@gmail.com"
              className="text-base text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
            >
              ribabjj@gmail.com
            </a>
          </div>

          <a
            href="https://maps.app.goo.gl/Z4EffdTNcPicS2sK8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[var(--color-accent)] px-6 text-sm font-semibold text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition-all duration-200 self-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M8 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
              <path d="M8 1C5.24 1 3 3.24 3 6c0 4 5 9 5 9s5-5 5-9c0-2.76-2.24-5-5-5z" />
            </svg>
            Get Directions
          </a>
        </address>
      </div>
    </Section>
  )
}
