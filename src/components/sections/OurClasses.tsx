import { SectionHeader, ImagePlaceholder } from '@/components/ui'
import { programs } from '@/data/programs'
import type { ModalTag } from '@/hooks/useModal'

interface OurClassesProps {
  onBookClick: (tag: ModalTag) => void
}

export function OurClasses({ onBookClick: _onBookClick }: OurClassesProps) {
  return (
    <section id="our-classes" aria-labelledby="classes-heading" className="relative grid-lines">
      {/* Header — constrained */}
      <div className="mx-auto max-w-[1280px] pt-24 pb-10 px-6 md:px-10">
        <SectionHeader
          id="classes-heading"
          label="Training programs"
          title="OUR CLASSES"
          titleNode={<>OUR <span style={{ color: 'var(--color-accent)' }}>CLASSES</span></>}
        />
        <p className="text-fluid-sub text-[var(--color-text-secondary)] leading-relaxed -mt-8 mb-4">
          Whether you're a first-timer or a seasoned competitor, we have a class designed for you.
        </p>
      </div>

      {/* Cards grid */}
      <div className="mx-auto max-w-[1280px] pb-24 px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p) => (
            <article
              key={p.id}
              className="group bg-white border-2 border-black flex flex-col"
            >
              {/* Image */}
              <div className="relative h-[420px] overflow-hidden bg-neutral-200">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 will-change-transform group-hover:scale-105"
                  />
                ) : (
                  <ImagePlaceholder label={`${p.title} class`} aspectRatio="5/4" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Badge */}
                <div className="absolute left-4 top-4 bg-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest">
                  {p.tag}
                </div>

                {/* Title overlay */}
                <div className="absolute left-4 bottom-4 right-4">
                  <div
                    className="text-5xl md:text-6xl font-black uppercase leading-none text-white drop-shadow-lg"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {p.title.split(' ')[0]}
                  </div>
                  {p.title.split(' ').slice(1).join(' ') && (
                    <div
                      className="text-3xl md:text-4xl font-black uppercase leading-none text-white/90 drop-shadow-lg"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {p.title.split(' ').slice(1).join(' ')}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
