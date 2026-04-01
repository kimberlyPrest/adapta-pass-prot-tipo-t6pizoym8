import { SectionTitle } from '@/components/dashboard/SectionTitle'

interface GenericViewProps {
  title: string
  description: string
}

export function GenericViewPlaceholder({ title, description }: GenericViewProps) {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col gap-2">
        <h1 className="font-display text-3xl font-bold">{title}</h1>
        <p className="text-adapta-textGray text-sm">{description}</p>
      </div>

      <SectionTitle title="Painel de Atividades" />

      <div className="h-64 border border-dashed border-adapta-border rounded-lg flex items-center justify-center text-adapta-textGray bg-adapta-cardSec/30">
        <p className="font-mono text-sm">Módulo em desenvolvimento para esta visualização.</p>
      </div>
    </div>
  )
}
