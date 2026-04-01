import { SectionTitle } from '@/components/dashboard/SectionTitle'
import { BadgeASA } from '@/components/dashboard/BadgeASA'
import { HealthDot } from '@/components/dashboard/HealthDot'
import { ProgressBar } from '@/components/dashboard/ProgressBar'

export function ConsultorView() {
  const clients = [
    {
      name: 'Empresa Alpha',
      status: 'good',
      progress: 80,
      phase: 'A',
      nextAction: 'Reunião de Alinhamento',
    },
    {
      name: 'Beta Solutions',
      status: 'warning',
      progress: 35,
      phase: 'S',
      nextAction: 'Revisão de Processos',
    },
    {
      name: 'Gamma Corp',
      status: 'critical',
      progress: 15,
      phase: 'A2',
      nextAction: 'Treinamento de Equipe',
    },
    {
      name: 'Delta Indústrias',
      status: 'good',
      progress: 95,
      phase: 'A',
      nextAction: 'Entrega Final',
    },
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col gap-2">
        <h1 className="font-display text-3xl font-bold">Meu Portfólio</h1>
        <p className="text-adapta-textGray text-sm">
          Acompanhamento tático das contas sob sua responsabilidade.
        </p>
      </div>

      <SectionTitle title="Ações da Semana" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {clients.map((client, i) => (
          <div
            key={i}
            className="bg-adapta-card border border-adapta-border rounded-lg p-5 flex flex-col gap-4"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-white mb-1">{client.name}</h3>
                <div className="flex items-center gap-2 text-xs text-adapta-textGray">
                  <HealthDot status={client.status as any} />
                  <span>Saúde da Conta</span>
                </div>
              </div>
              <BadgeASA variant={client.phase as any} />
            </div>

            <div className="space-y-1 mt-auto">
              <div className="flex justify-between text-[11px] uppercase tracking-wide text-adapta-textGray">
                <span>Progresso</span>
                <span>{client.progress}%</span>
              </div>
              <ProgressBar value={client.progress} />
            </div>

            <div className="mt-2 pt-4 border-t border-adapta-border">
              <p className="text-xs text-adapta-textGray uppercase mb-1">Próxima Ação</p>
              <p className="text-sm text-adapta-teal truncate">{client.nextAction}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
