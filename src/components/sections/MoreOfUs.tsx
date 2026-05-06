import { SectionHeader, ImagePlaceholder } from '@/components/ui'

const photos = [
  'Academy main area',
  'BJJ mats and training space',
  'Kids class in action',
  'Women BJJ class',
  'Students on the mats',
  'Coach and students',
]

export function MoreOfUs() {
  const doubled = [...photos, ...photos]

  return (
    <section id="more-of-us" aria-labelledby="gallery-heading" className="relative grid-lines bg-[var(--color-bg)]">
      {/* Header — constrained */}
      <div className="mx-auto max-w-[1280px] pt-24 pb-10 px-6 md:px-10">
        <SectionHeader
          id="gallery-heading"
          label="Gallery"
          title="MORE OF US"
          subtitle="A positive, welcoming community — on and off the mats."
          center
        />
      </div>

      {/* Infinite marquee — full viewport width */}
      <div className="relative overflow-hidden w-full pb-24" aria-label="Gallery carousel">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10" style={{ background: 'linear-gradient(to right, var(--color-bg), transparent)' }} aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10" style={{ background: 'linear-gradient(to left, var(--color-bg), transparent)' }} aria-hidden="true" />

        <div className="carousel-track flex gap-6 w-max">
          {doubled.map((label, i) => (
            <div
              key={i}
              aria-hidden={i >= photos.length}
              className="shrink-0 w-[320px] md:w-[380px] overflow-hidden border-2 border-black"
            >
              <ImagePlaceholder label={label} aspectRatio="4/3" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
