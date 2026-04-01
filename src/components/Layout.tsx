import { Outlet } from 'react-router-dom'
import { useViewStore, ViewRole } from '@/store/useViewStore'
import { cn } from '@/lib/utils'

const ROLES: ViewRole[] = [
  'CEO',
  'Head Consultoria',
  'Consultor',
  'CS Lead',
  'Gerente CS',
  'Gestor Cliente',
  'Colaborador',
]

export default function Layout() {
  const { activeView, setActiveView } = useViewStore()

  return (
    <div className="min-h-screen flex flex-col bg-adapta-bg text-white font-sans">
      {/* Fixed Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-adapta-border z-50 flex items-center px-4 md:px-6">
        <div className="flex items-center gap-8 w-full max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex-shrink-0 font-display font-extrabold text-xl tracking-tight select-none flex items-center">
            <span className="text-adapta-teal">ADAPTA</span>
            <span className="text-adapta-red ml-1">PASS</span>
          </div>

          {/* View Selector - Scrollable on mobile */}
          <nav className="flex-grow overflow-x-auto no-scrollbar pb-1 -mb-1">
            <div className="flex items-center gap-2 px-2">
              {ROLES.map((role) => {
                const isActive = activeView === role
                return (
                  <button
                    key={role}
                    onClick={() => setActiveView(role)}
                    className={cn(
                      'px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap',
                      isActive
                        ? 'bg-adapta-orange text-white shadow-[0_0_15px_rgba(255,107,0,0.3)] scale-105'
                        : 'bg-adapta-cardSec text-adapta-textGray hover:bg-adapta-border hover:text-white',
                    )}
                  >
                    {role}
                  </button>
                )
              })}
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow pt-16 px-4 md:px-6 lg:px-8 pb-12 w-full max-w-7xl mx-auto">
        <div className="mt-8 animate-fade-in">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
