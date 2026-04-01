import { cn } from '@/lib/utils'

export type HealthStatus = 'good' | 'warning' | 'critical'

interface HealthDotProps {
  status: HealthStatus
  className?: string
}

const colorMap = {
  good: 'bg-adapta-green',
  warning: 'bg-adapta-yellow',
  critical: 'bg-adapta-red',
}

export function HealthDot({ status, className }: HealthDotProps) {
  return (
    <div
      className={cn(
        'w-2 h-2 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.5)]',
        colorMap[status],
        className,
      )}
      aria-label={`Health status: ${status}`}
    />
  )
}
