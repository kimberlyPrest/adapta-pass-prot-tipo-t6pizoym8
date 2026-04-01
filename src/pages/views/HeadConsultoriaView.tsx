import { StatCard } from '@/components/dashboard/StatCard'
import { SectionTitle } from '@/components/dashboard/SectionTitle'
import { BadgeASA } from '@/components/dashboard/BadgeASA'
import { ProgressBar } from '@/components/dashboard/ProgressBar'

export function HeadConsultoriaView() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col gap-2">
        <h1 className="font-display text-3xl font-bold">Gestão de Consultoria</h1>
        <p className="text-adapta-textGray text-sm">
          Acompanhamento do time e entregáveis do método ASA.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          title="Entregas no Prazo"
          value="94%"
          subtext="Acima da meta (90%)"
          subtextStatus="positive"
        />
        <StatCard
          title="Capacidade do Time"
          value="82%"
          subtext="2 consultores disponíveis"
          subtextStatus="neutral"
        />
        <StatCard
          title="Gargalos Identificados"
          value="3"
          subtext="Em fase de Sistematização"
          subtextStatus="negative"
        />
      </div>

      <SectionTitle title="Performance por Pilar ASA" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-adapta-card border border-adapta-border rounded-lg p-5 space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="font-medium">Amplificar</h4>
            <BadgeASA variant="A" />
          </div>
          <ProgressBar value={78} />
          <p className="text-xs text-adapta-textGray">
            78% de conformidade nas auditorias de vendas.
          </p>
        </div>

        <div className="bg-adapta-card border border-adapta-border rounded-lg p-5 space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="font-medium">Sistematizar</h4>
            <BadgeASA variant="S" />
          </div>
          <ProgressBar value={45} />
          <p className="text-xs text-adapta-textGray">
            Maior tempo médio de retenção nas tarefas atuais.
          </p>
        </div>

        <div className="bg-adapta-card border border-adapta-border rounded-lg p-5 space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="font-medium">Automatizar</h4>
            <BadgeASA variant="A2" />
          </div>
          <ProgressBar value={92} />
          <p className="text-xs text-adapta-textGray">
            Alta adesão aos playbooks de automação propostos.
          </p>
        </div>
      </div>
    </div>
  )
}
