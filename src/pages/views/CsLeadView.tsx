import { StatCard } from '@/components/dashboard/StatCard'
import { SectionTitle } from '@/components/dashboard/SectionTitle'
import { HealthDot } from '@/components/dashboard/HealthDot'

export function CsLeadView() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col gap-2">
        <h1 className="font-display text-3xl font-bold">Liderança de CS</h1>
        <p className="text-adapta-textGray text-sm">
          Métricas de satisfação e retenção de carteira.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="CSAT Médio"
          value="9.2"
          subtext="Últimos 30 dias"
          subtextStatus="positive"
        />
        <StatCard
          title="Tempo de Resposta"
          value="1.4h"
          subtext="Queda de 12% v/s último mês"
          subtextStatus="positive"
        />
        <StatCard
          title="Tickets Abertos"
          value="34"
          subtext="5 críticos"
          subtextStatus="negative"
        />
        <StatCard
          title="Taxa de Renovação"
          value="88%"
          subtext="Meta: 90%"
          subtextStatus="neutral"
        />
      </div>

      <SectionTitle title="Alerta de Churn (Equipe)" />
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-adapta-border text-xs uppercase text-adapta-textGray">
              <th className="py-4 font-medium">Cliente</th>
              <th className="py-4 font-medium">Gerente Responsável</th>
              <th className="py-4 font-medium">Motivo Principal</th>
              <th className="py-4 font-medium">Risco</th>
              <th className="py-4 font-medium text-right">Ação</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-adapta-border text-sm">
            {[
              {
                client: 'Mega Store BR',
                cs: 'Ana Silva',
                reason: 'Falta de engajamento',
                risk: 'critical',
              },
              {
                client: 'Logística Express',
                cs: 'Carlos Mendes',
                reason: 'Restrição orçamentária',
                risk: 'warning',
              },
              {
                client: 'Financeira X',
                cs: 'Beatriz Costa',
                reason: 'Dificuldade técnica',
                risk: 'warning',
              },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-adapta-card/50 transition-colors">
                <td className="py-4 font-medium">{row.client}</td>
                <td className="py-4 text-adapta-textGray">{row.cs}</td>
                <td className="py-4 text-adapta-textGray">{row.reason}</td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <HealthDot status={row.risk as any} />
                    <span className="capitalize text-xs">
                      {row.risk === 'critical' ? 'Alto' : 'Médio'}
                    </span>
                  </div>
                </td>
                <td className="py-4 text-right">
                  <button className="text-adapta-orange hover:text-white transition-colors text-xs uppercase font-bold tracking-wide">
                    Intervir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
