import { Section, SectionHeader, ImagePlaceholder } from '@/components/ui'

export function MoreOfUs() {
  const placeholders = [
    'Academy main area',
    'BJJ mats and training space',
    'Kids class in action',
    'Women BJJ class',
    'Students on the mats',
    'Coach and students',
  ]

  return (
    <Section id="more-of-us" aria-labelledby="gallery-heading" subtle>
      <SectionHeader
        id="gallery-heading"
        label="Gallery"
        title="MORE OF US"
        subtitle="A positive, welcoming community — on and off the mats."
        center
      />

      <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
        {placeholders.map((label, i) => (
          <ImagePlaceholder
            key={i}
            label={label}
            aspectRatio={i === 0 || i === 3 ? '4/3' : '1/1'}
          />
        ))}
      </div>
    </Section>
  )
}
