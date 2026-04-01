import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface StatCardProps {
  title: string
  value: ReactNode
  subtext?: string
  subtextStatus?: 'positive' | 'neutral' | 'negative'
  className?: string
}

export function StatCard({
  title,
  value,
  subtext,
  subtextStatus = 'neutral',
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        'bg-adapta-card border border-adapta-border rounded-lg p-5 flex flex-col gap-2 hover:border-adapta-border/80 transition-colors shadow-[0_0_0_1px_rgba(42,42,42,1)]',
        className,
      )}
    >
      <span className="text-adapta-textGray text-[11px] uppercase tracking-wide font-medium">
        {title}
      </span>
      <div className="text-white text-3xl font-bold font-display tracking-tight">{value}</div>
      {subtext && (
        <span
          className={cn(
            'text-xs font-medium mt-auto pt-1',
            subtextStatus === 'positive' && 'text-adapta-teal',
            subtextStatus === 'neutral' && 'text-adapta-orange',
            subtextStatus === 'negative' && 'text-adapta-red',
          )}
        >
          {subtext}
        </span>
      )}
    </div>
  )
}
