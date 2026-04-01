import { useViewStore } from '@/store/useViewStore'
import { CeoView } from './views/CeoView'
import { HeadConsultoriaView } from './views/HeadConsultoriaView'
import { ConsultorView } from './views/ConsultorView'
import { CsLeadView } from './views/CsLeadView'
import { GenericViewPlaceholder } from './views/GenericViewPlaceholder'

const Index = () => {
  const { activeView } = useViewStore()

  // Dynamic View Engine
  const renderActiveView = () => {
    switch (activeView) {
      case 'CEO':
        return <CeoView />
      case 'Head Consultoria':
        return <HeadConsultoriaView />
      case 'Consultor':
        return <ConsultorView />
      case 'CS Lead':
        return <CsLeadView />
      case 'Gerente CS':
        return (
          <GenericViewPlaceholder
            title="Gestão de Carteira CS"
            description="Visão detalhada das contas e saúde dos clientes diretos."
          />
        )
      case 'Gestor Cliente':
        return (
          <GenericViewPlaceholder
            title="Portal do Cliente"
            description="Acompanhamento das entregas e KPIs específicos do contrato."
          />
        )
      case 'Colaborador':
        return (
          <GenericViewPlaceholder
            title="Área do Colaborador"
            description="Playbooks, tarefas e acompanhamento de metas individuais."
          />
        )
      default:
        return (
          <div className="flex items-center justify-center h-[50vh] text-adapta-textGray">
            Selecione uma visualização válida.
          </div>
        )
    }
  }

  return <div className="w-full">{renderActiveView()}</div>
}

export default Index
