import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'

interface HeroProps {
  onBookClick: () => void
  className?: string
}

export function Hero({ onBookClick, className }: HeroProps) {
  const headingRef  = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef      = useRef<HTMLDivElement>(null)
  const trustRef    = useRef<HTMLUListElement>(null)
  const imageRef    = useRef<HTMLDivElement>(null)
  const ctxRef      = useRef<{ revert: () => void } | null>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let cancelled = false

    async function animate() {
      const { gsap } = await import('gsap')
      if (cancelled) return
      ctxRef.current?.revert()
      ctxRef.current = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
        tl.fromTo(headingRef.current,  { autoAlpha: 0, y: 32 }, { autoAlpha: 1, y: 0, duration: 0.9 }, 0.2)
          .fromTo(subtitleRef.current, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.35)
          .fromTo(ctaRef.current,      { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.7 }, 0.48)
          .fromTo(trustRef.current,    { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.6 }, 0.58)
          .fromTo(imageRef.current,    { autoAlpha: 0, scale: 1.03 }, { autoAlpha: 1, scale: 1, duration: 1.1 }, 0.1)
      })
    }

    animate()
    return () => {
      cancelled = true
      ctxRef.current?.revert()
      ctxRef.current = null
    }
  }, [])

  return (
    <section
      id="main-content"
      aria-label="Hero — Start your BJJ journey in Boerne"
      className={cn(
        'relative min-h-screen flex items-center overflow-hidden bg-[#0D0D0D] pt-[68px]',
        className
      )}
    >
      {/* Background image placeholder */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[#0D0D0D]" />
        <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-[var(--color-danger)] opacity-60">
          [FOTO HERO — CONFIRMAR: 1440px+ .webp]
        </span>
      </div>

      {/* Dark overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'rgba(0,0,0,0.65)' }}
        aria-hidden="true"
      />

      {/* Accent gradient */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 70% 50%, var(--color-accent), transparent)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-12">

          {/* Text — 7 cols */}
          <div className="md:col-span-7 flex flex-col gap-6">
            <h1
              ref={headingRef}
              className="text-fluid-hero uppercase text-white"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 700, opacity: 0 }}
            >
              Start Jiu-Jitsu with<br />
              <span style={{ color: 'rgba(var(--accent-rgb), 0.95)' }}>
                a World Champion Team
              </span><br />
              in Boerne
            </h1>

            <p
              ref={subtitleRef}
              className="text-fluid-body text-white/75 max-w-xl"
              style={{ opacity: 0 }}
            >
              Led by World Champion coaches, RP Boerne has created a welcoming space for all ages and fitness levels where everyone can start with confidence. Improvement on and off the mats is seen within weeks.
            </p>

            <div ref={ctaRef} className="flex flex-wrap gap-3" style={{ opacity: 0 }}>
              <Button onClick={onBookClick} size="lg">
                Book my first free trial class
                <ArrowRight />
              </Button>
              <Button
                as="a"
                href="#our-classes"
                variant="ghost"
                size="lg"
                className="text-white border-white/30 hover:bg-white/10 hover:text-white hover:border-white/60"
              >
                See Programs
              </Button>
            </div>

            <ul
              ref={trustRef}
              className="flex flex-wrap gap-x-6 gap-y-2"
              role="list"
              style={{ opacity: 0 }}
            >
              {[
                'No experience needed',
                'All ages welcome',
                'First class free',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-white/60"
                >
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right side — image placeholder */}
          <div ref={imageRef} className="md:col-span-5" style={{ opacity: 0 }}>
            <div
              className="relative w-full overflow-hidden rounded-[var(--radius-lg)] border-2 border-dashed border-white/20 flex items-center justify-center"
              style={{ aspectRatio: '4/5', minHeight: '320px', background: 'rgba(255,255,255,0.04)' }}
            >
              <div className="flex flex-col items-center gap-3 p-6 text-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                  <rect width="48" height="48" rx="12" fill="rgba(255,255,255,0.08)" />
                  <path d="M16 32L22 24L27 29L31 24L36 32H16Z" fill="rgba(255,255,255,0.2)" />
                  <circle cx="19" cy="21" r="3" fill="rgba(255,255,255,0.2)" />
                </svg>
                <span className="text-xs font-semibold text-[var(--color-danger)]">
                  [FOTO/VÍDEO HERO — CONFIRMAR]
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3.75 9H14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 3.75L14.25 9 9 14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="7" fill="var(--color-accent)" opacity="0.15" />
      <path d="M4.5 7L6.5 9L9.5 5.5" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
