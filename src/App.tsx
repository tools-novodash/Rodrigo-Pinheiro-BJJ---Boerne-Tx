import { useCallback } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import {
  Hero,
  OurClasses,
  Testimonials,
  HowToStart,
  OurSchedule,
  OurInstructors,
  MoreOfUs,
  About,
  FAQ,
  Location,
  FinalCTA,
  StickyCTABar,
} from '@/components/sections'
import { BookingModal } from '@/components/sections/BookingModal'
import { useModal } from '@/hooks/useModal'
import { useScrollDepth } from '@/hooks/useScrollDepth'
import type { ModalTag } from '@/hooks/useModal'

function LandingPage() {
  const { isOpen, defaultTag, open, close } = useModal()
  useScrollDepth()

  const handleBookClick = useCallback(
    (tag?: ModalTag) => {
      open(tag ?? null)
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'InitiateCheckout')
      }
    },
    [open]
  )

  const handleOpenWithTag = useCallback(
    (tag: ModalTag) => {
      handleBookClick(tag)
    },
    [handleBookClick]
  )

  return (
    <div className="grain">
      <Navbar onBookClick={() => handleBookClick()} />

      <main>
        <Hero onBookClick={() => handleBookClick()} />
        <OurClasses onBookClick={handleOpenWithTag} />
        <Testimonials />
        <HowToStart onBookClick={() => handleBookClick()} />
        <OurSchedule />
        <OurInstructors onBookClick={() => handleBookClick()} />
        <MoreOfUs />
        <About />
        <FAQ />
        <Location />
        <FinalCTA onBookClick={() => handleBookClick()} />
      </main>

      <Footer onBookClick={() => handleBookClick()} />

      <BookingModal isOpen={isOpen} defaultTag={defaultTag} onClose={close} />
      <StickyCTABar onBookClick={() => handleBookClick()} />
    </div>
  )
}

export default function App() {
  return <LandingPage />
}
