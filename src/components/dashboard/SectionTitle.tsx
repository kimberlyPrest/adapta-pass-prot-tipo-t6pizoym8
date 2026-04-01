import { cn } from '@/lib/utils'

interface SectionTitleProps {
  title: string
  className?: string
}

export function SectionTitle({ title, className }: SectionTitleProps) {
  return (
    <div className={cn('flex items-center gap-4 w-full', className)}>
      <h3 className="font-display font-bold text-[13px] uppercase text-adapta-textGray tracking-widest whitespace-nowrap">
        {title}
      </h3>
      <div className="h-[1px] bg-adapta-border flex-grow" />
    </div>
  )
}
