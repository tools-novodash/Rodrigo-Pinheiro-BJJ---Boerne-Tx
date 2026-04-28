import PillNav from './PillNav'

interface NavbarProps {
  onBookClick: () => void
}

const NAV_ITEMS = [
  { label: 'Programs', href: '#our-classes'  },
  { label: 'Schedule', href: '#our-schedule' },
]

export function Navbar({ onBookClick }: NavbarProps) {
  const items = [
    ...NAV_ITEMS,
    {
      label:    'Book Free Class',
      isCTA:    true,
      onClick:  onBookClick,
      ariaLabel: 'Book your first free class',
    },
  ]

  return (
    <PillNav
      logo="/logo.webp"
      logoAlt="Rodrigo Pinheiro BJJ Boerne"
      logoHref="#main-content"
      items={items}
      activeHref=""
      baseColor="#0D0D0D"
      pillColor="#FFFFFF"
      pillTextColor="#0D0D0D"
      hoveredPillTextColor="#FFFFFF"
      initialLoadAnimation={false}
    />
  )
}
