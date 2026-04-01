import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface ProgressBarProps {
  value: number // 0 to 100
  className?: string
}

export function ProgressBar({ value, className }: ProgressBarProps) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    // Slight delay to allow CSS transition to kick in after mount
    const timer = setTimeout(() => setWidth(Math.min(Math.max(value, 0), 100)), 50)
    return () => clearTimeout(timer)
  }, [value])

  return (
    <div className={cn('w-full bg-adapta-border h-1 rounded-full overflow-hidden', className)}>
      <div
        className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{
          width: `${width}%`,
          background: 'linear-gradient(90deg, #FF6B00 0%, #00C9B1 100%)',
        }}
      />
    </div>
  )
}
