import { cn } from '@/lib/utils'

export type ASAVariant = 'A' | 'S' | 'A2'

interface BadgeASAProps {
  variant: ASAVariant
  className?: string
  label?: string
}

const config = {
  A: { bg: 'bg-[#00C9B115]', text: 'text-[#00C9B1]', defaultLabel: 'Amplificar' },
  S: { bg: 'bg-[#FF6B0015]', text: 'text-[#FF6B00]', defaultLabel: 'Sistematizar' },
  A2: { bg: 'bg-[#9B59B615]', text: 'text-[#9B59B6]', defaultLabel: 'Automatizar' },
}

export function BadgeASA({ variant, className, label }: BadgeASAProps) {
  const currentConfig = config[variant]

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center px-2 py-1 rounded-sm text-[10px] font-bold uppercase tracking-wider',
        currentConfig.bg,
        currentConfig.text,
        className,
      )}
    >
      {label || currentConfig.defaultLabel}
    </span>
  )
}
