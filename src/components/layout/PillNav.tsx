import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import './PillNav.css'

interface PillNavItem {
  label: string
  href?: string
  onClick?: () => void
  isCTA?: boolean
  ariaLabel?: string
}

interface PillNavProps {
  logo: string
  logoAlt?: string
  logoHref?: string
  items: PillNavItem[]
  activeHref?: string
  className?: string
  ease?: string
  baseColor?: string
  pillColor?: string
  hoveredPillTextColor?: string
  pillTextColor?: string
  initialLoadAnimation?: boolean
}

export default function PillNav({
  logo,
  logoAlt = 'Logo',
  logoHref = '/',
  items,
  className = '',
  ease = 'power3.easeOut',
  baseColor = '#000',
  pillColor = '#fff',
  hoveredPillTextColor = '#fff',
  pillTextColor,
  initialLoadAnimation = true,
}: PillNavProps) {
  const resolvedPillTextColor = pillTextColor ?? baseColor

  const [isMobileMenuOpen, setIsMobileMenuOpen]   = useState(false)
  const [activeHref, setActiveHref]               = useState('')

  const linkRefs      = useRef<(HTMLAnchorElement | null)[]>([])
  const indicatorRef  = useRef<HTMLSpanElement>(null)
  const wrapperRef    = useRef<HTMLDivElement>(null)
  const hamburgerRef  = useRef<HTMLButtonElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const navItemsRef   = useRef<HTMLDivElement>(null)
  const logoRef       = useRef<HTMLAnchorElement>(null)
  const logoImgRef    = useRef<HTMLImageElement>(null)
  const logoTweenRef  = useRef<gsap.core.Tween | null>(null)

  const navItems = items.filter(item => !item.isCTA)
  const ctaItem  = items.find(item => item.isCTA)

  /* ── Track active section via IntersectionObserver ── */
  useEffect(() => {
    const anchors = navItems.filter(item => item.href?.startsWith('#'))
    if (anchors.length === 0) return

    const observers: IntersectionObserver[] = []

    anchors.forEach(item => {
      const el = document.getElementById(item.href!.replace('#', ''))
      if (!el) return
      const io = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveHref(item.href!) },
        { threshold: 0.3 }
      )
      io.observe(el)
      observers.push(io)
    })

    return () => observers.forEach(o => o.disconnect())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /* ── Move indicator to a link element ── */
  function moveIndicatorTo(el: HTMLAnchorElement) {
    const indicator = indicatorRef.current
    const wrapper   = wrapperRef.current
    if (!indicator || !wrapper) return

    const rect          = el.getBoundingClientRect()
    const wrapperRect   = wrapper.getBoundingClientRect()

    gsap.to(indicator, {
      x:        rect.left - wrapperRect.left,
      width:    rect.width,
      opacity:  1,
      duration: 0.25,
      ease:     'power2.out',
    })
  }

  /* ── Return to active link (or hide) ── */
  function returnToActive() {
    const idx    = navItems.findIndex(item => item.href === activeHref)
    const activeEl = linkRefs.current[idx]
    if (activeEl) {
      moveIndicatorTo(activeEl)
    } else {
      gsap.to(indicatorRef.current, { opacity: 0, duration: 0.2 })
    }
  }

  /* ── Snap indicator to active link whenever activeHref changes ── */
  useEffect(() => {
    const idx = navItems.findIndex(item => item.href === activeHref)
    const el  = linkRefs.current[idx]
    if (el) moveIndicatorTo(el)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeHref])

  /* ── Logo hover rotation ── */
  const handleLogoEnter = () => {
    const img = logoImgRef.current
    if (!img) return
    logoTweenRef.current?.kill()
    gsap.set(img, { rotate: 0 })
    logoTweenRef.current = gsap.to(img, { rotate: 360, duration: 0.5, ease, overwrite: 'auto' })
  }

  /* ── Mobile menu toggle ── */
  const toggleMobileMenu = () => {
    const next      = !isMobileMenuOpen
    setIsMobileMenuOpen(next)
    const hamburger = hamburgerRef.current
    const menu      = mobileMenuRef.current

    if (hamburger) {
      const lines = hamburger.querySelectorAll<HTMLElement>('.hamburger-line')
      if (next) {
        gsap.to(lines[0], { rotation: 45,  y:  3, duration: 0.3, ease })
        gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease })
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease })
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease })
      }
    }

    if (menu) {
      if (next) {
        gsap.set(menu, { visibility: 'visible' })
        gsap.fromTo(menu, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3, ease })
      } else {
        gsap.to(menu, {
          opacity: 0, y: 10, duration: 0.2, ease,
          onComplete: () => gsap.set(menu, { visibility: 'hidden' }),
        })
      }
    }
  }

  /* ── Init animations ── */
  useEffect(() => {
    const menu = mobileMenuRef.current
    if (menu) gsap.set(menu, { visibility: 'hidden', opacity: 0 })

    gsap.set(indicatorRef.current, { opacity: 0, x: 0, width: 0 })

    if (initialLoadAnimation) {
      const logoEl     = logoRef.current
      const navItemsEl = navItemsRef.current
      if (logoEl) {
        gsap.set(logoEl, { scale: 0 })
        gsap.to(logoEl, { scale: 1, duration: 0.6, ease })
      }
      if (navItemsEl) {
        gsap.set(navItemsEl, { width: 0, overflow: 'hidden' })
        gsap.to(navItemsEl, { width: 'auto', duration: 0.6, ease })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const cssVars = {
    ['--base']:       baseColor,
    ['--pill-bg']:    pillColor,
    ['--hover-text']: hoveredPillTextColor,
    ['--pill-text']:  resolvedPillTextColor,
  } as React.CSSProperties

  return (
    <div className="pill-nav-container">
      <nav className={`pill-nav ${className}`} aria-label="Primary" style={cssVars}>

        {/* Logo */}
        <a
          className="pill-logo"
          href={logoHref}
          aria-label="Home"
          onMouseEnter={handleLogoEnter}
          ref={logoRef}
        >
          <img src={logo} alt={logoAlt} ref={logoImgRef} />
        </a>

        {/* Desktop nav */}
        <div className="pill-nav-items desktop-only" ref={navItemsRef}>

          {/* Links + sliding indicator */}
          <div
            className="nav-links-wrapper"
            ref={wrapperRef}
            onMouseLeave={returnToActive}
          >
            {navItems.map((item, i) => (
              <a
                key={item.href ?? `item-${i}`}
                ref={el => { linkRefs.current[i] = el }}
                href={item.href ?? '#'}
                className={`nav-link${activeHref === item.href ? ' is-active' : ''}`}
                aria-label={item.ariaLabel ?? item.label}
                aria-current={activeHref === item.href ? 'page' : undefined}
                onClick={item.onClick ? (e) => { e.preventDefault(); item.onClick!() } : undefined}
                onMouseEnter={e => moveIndicatorTo(e.currentTarget)}
              >
                {item.label}
              </a>
            ))}

            {/* Sliding underline indicator */}
            <span className="nav-indicator" ref={indicatorRef} aria-hidden="true" />
          </div>

          {/* CTA button */}
          {ctaItem && (
            <button
              type="button"
              className="pill pill--cta"
              onClick={ctaItem.onClick}
              aria-label={ctaItem.ariaLabel ?? ctaItem.label}
            >
              {ctaItem.label}
            </button>
          )}

        </div>

        {/* Hamburger */}
        <button
          className="mobile-menu-button mobile-only"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          ref={hamburgerRef}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className="mobile-menu-popover mobile-only" ref={mobileMenuRef} style={cssVars}>
        <ul className="mobile-menu-list">
          {items.map((item, i) => (
            <li key={item.href ?? `mobile-${i}`}>
              <a
                href={item.href ?? '#'}
                className={[
                  'mobile-menu-link',
                  item.isCTA    ? 'mobile-menu-link--cta' : '',
                  activeHref === item.href ? 'is-active'  : '',
                ].join(' ').trim()}
                onClick={e => {
                  if (item.onClick) { e.preventDefault(); item.onClick() }
                  setIsMobileMenuOpen(false)
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
