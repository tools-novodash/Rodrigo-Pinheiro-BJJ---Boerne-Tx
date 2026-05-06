import { useMagnetic } from '@/hooks/useMagnetic'
import { Button } from './Button'

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  strength?: number
  className?: string
  children: React.ReactNode
}

export function MagneticButton({
  strength = 0.25,
  className,
  children,
  ...props
}: MagneticButtonProps) {
  const wrapRef = useMagnetic<HTMLDivElement>(strength)

  return (
    <div ref={wrapRef} className="inline-block transition-transform duration-300 ease-out">
      <Button size="sm" className={className} {...props}>
        {children}
      </Button>
    </div>
  )
}
