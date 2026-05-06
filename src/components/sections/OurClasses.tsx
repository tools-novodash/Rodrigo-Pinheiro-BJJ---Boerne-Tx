import { SectionHeader, ImagePlaceholder } from '@/components/ui'
import { programs } from '@/data/programs'
import type { ModalTag } from '@/hooks/useModal'

interface OurClassesProps {
  onBookClick: (tag: ModalTag) => void
}

export function OurClasses({ onBookClick: _onBookClick }: OurClassesProps) {
  const doubled = [...programs, ...programs]

  return (
    <section id="our-classes" aria-labelledby="classes-heading" className="relative grid-lines"
    >
      {/* Header — constrained */}
      <div className="mx-auto max-w-[1280px] pt-24 pb-10 px-6 md:px-10">
        <SectionHeader
          id="classes-heading"
          label="Training programs"
          title="OUR CLASSES"
          titleNode={<>OUR <span style={{ color: 'var(--color-accent)' }}>CLASSES</span></>}
        />
        <p className="text-fluid-sub text-[var(--color-text-secondary)] leading-relaxed whitespace-nowrap -mt-8 mb-4">
          Whether you're a first-timer or a seasoned competitor, we have a class designed for you.
        </p>
      </div>

      {/* Infinite marquee carousel — full viewport width */}
      <div className="relative overflow-hidden w-full pb-24" aria-label="Programs carousel">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10" style={{ background: 'linear-gradient(to right, var(--color-bg), transparent)' }} aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10" style={{ background: 'linear-gradient(to left, var(--color-bg), transparent)' }} aria-hidden="true" />
        <div className="carousel-track flex gap-6 w-max">
          {doubled.map((p, i) => (
            <article
              key={`${p.id}-${i}`}
              aria-hidden={i >= programs.length}
              className="group shrink-0 w-[320px] md:w-[400px] bg-white border-2 border-black flex flex-col"
            >
              {/* Image */}
              <div className="relative h-[480px] md:h-[560px] overflow-hidden bg-neutral-200">
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
