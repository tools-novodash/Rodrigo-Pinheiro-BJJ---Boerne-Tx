import { cn } from '@/lib/utils'

interface SectionProps {
  id?: string
  'aria-labelledby'?: string
  subtle?: boolean
  accent?: boolean
  dark?: boolean
  noPad?: boolean
  className?: string
  children: React.ReactNode
}

export function Section({
  id,
  'aria-labelledby': ariaLabelledBy,
  subtle,
  accent,
  dark,
  noPad,
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        'relative',
        !noPad && 'py-24',
        subtle && 'bg-[var(--color-surface-alt)] grid-lines',
        accent && 'bg-[var(--color-accent)] grid-lines-light',
        dark && 'bg-[var(--color-text)] grid-lines-light',
        !subtle && !accent && !dark && 'grid-lines',
        className
      )}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">{children}</div>
    </section>
  )
}
