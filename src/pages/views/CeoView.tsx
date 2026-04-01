import { StatCard } from '@/components/dashboard/StatCard'
import { SectionTitle } from '@/components/dashboard/SectionTitle'
import { ProgressBar } from '@/components/dashboard/ProgressBar'
import { HealthDot } from '@/components/dashboard/HealthDot'

export function CeoView() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col gap-2">
        <h1 className="font-display text-3xl font-bold">Visão Executiva</h1>
        <p className="text-adapta-textGray text-sm">
          Visão geral consolidada da operação e saúde financeira.
        </p>
      </div>

      <SectionTitle title="Métricas Globais" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Receita Recorrente (MRR)"
          value="R$ 1.2M"
          subtext="+12% em relação ao mês passado"
          subtextStatus="positive"
        />
        <StatCard
          title="Clientes Ativos"
          value="142"
          subtext="3 novos esta semana"
          subtextStatus="positive"
        />
        <StatCard
          title="Risco de Churn (Geral)"
          value="4.5%"
          subtext="Atenção necessária em 2 contas"
          subtextStatus="negative"
        />
        <StatCard
          title="Saúde da Operação (NPS)"
          value="72"
          subtext="Estável"
          subtextStatus="neutral"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <SectionTitle title="Progresso das Consultorias" />
          <div className="bg-adapta-card border border-adapta-border rounded-lg p-6 space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">Fase 1: Diagnóstico (45 clientes)</span>
                <span className="text-adapta-teal">85% Concluído</span>
              </div>
              <ProgressBar value={85} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">Fase 2: Implementação (62 clientes)</span>
                <span className="text-adapta-orange">42% Concluído</span>
              </div>
              <ProgressBar value={42} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">Fase 3: Acompanhamento (35 clientes)</span>
                <span className="text-adapta-teal">92% Concluído</span>
              </div>
              <ProgressBar value={92} />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <SectionTitle title="Contas Críticas" />
          <div className="bg-adapta-card border border-adapta-border rounded-lg flex flex-col divide-y divide-adapta-border">
            {[
              { name: 'TechCorp S.A.', risk: 'Alto', status: 'critical', rev: 'R$ 45k' },
              { name: 'Indústrias Delta', risk: 'Médio', status: 'warning', rev: 'R$ 28k' },
              { name: 'Nexus Solutions', risk: 'Médio', status: 'warning', rev: 'R$ 15k' },
            ].map((client, i) => (
              <div
                key={i}
                className="p-4 flex items-center justify-between hover:bg-adapta-cardSec transition-colors"
              >
                <div className="flex items-center gap-3">
                  <HealthDot status={client.status as any} />
                  <div>
                    <p className="font-medium text-sm">{client.name}</p>
                    <p className="text-xs text-adapta-textGray">MRR: {client.rev}</p>
                  </div>
                </div>
                <button className="text-xs text-adapta-orange hover:underline">Ver Detalhes</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
