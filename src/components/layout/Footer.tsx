interface FooterProps {
  onBookClick: () => void
}

export function Footer({ onBookClick }: FooterProps) {
  return (
    <footer className="bg-[#0D0D0D] text-white">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-16">
        <div className="grid gap-12 md:grid-cols-3">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            <img
              src="/logo.png"
              alt="Rodrigo Pinheiro BJJ"
              className="h-14 w-auto object-contain self-start"
            />
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Rodrigo Pinheiro BJJ Boerne is a Brazilian Jiu-Jitsu academy led by World Champion head coaches, built to serve students of all ages and experience levels.
            </p>
          </div>

          {/* Col 2 — Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-5">
              Navigate
            </p>
            <ul className="flex flex-col gap-3" role="list">
              {[
                { href: '#our-classes', label: 'Programs' },
                { href: '#our-instructors', label: 'Instructors' },
                { href: '#our-schedule', label: 'Schedule' },
                { href: '#faq', label: 'FAQ' },
                { href: '#location', label: 'Location' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-5">
              Contact
            </p>
            <ul className="flex flex-col gap-3 text-sm text-white/60" role="list">
              <li>
                <a
                  href="tel:+12108676156"
                  className="hover:text-white transition-colors"
                >
                  +1 (210) 867-6156
                </a>
              </li>
              <li>
                <a
                  href="mailto:ribabjj@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  ribabjj@gmail.com
                </a>
              </li>
              <li className="leading-relaxed">
                28255 Frontage Rd Suite 103<br />
                Boerne, TX 78006
              </li>
            </ul>

            {/* Social icons placeholder */}
            <div className="mt-6 flex items-center gap-4">
              <span className="text-xs text-[var(--color-danger)] font-semibold">
                [REDES SOCIAIS — CONFIRMAR]
              </span>
            </div>

            <button
              type="button"
              onClick={onBookClick}
              className="mt-6 inline-flex min-h-[44px] items-center rounded-full bg-[var(--color-accent)] px-6 text-xs font-bold uppercase tracking-wide text-white hover:bg-[var(--color-accent-hover)] transition-colors"
            >
              Book Free Class
            </button>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>© 2026 Rodrigo Pinheiro BJJ Boerne. All rights reserved.</p>
          <p>By Novo Dash</p>
        </div>
      </div>
    </footer>
  )
}
