import { create } from 'zustand'

export type ViewRole =
  | 'CEO'
  | 'Head Consultoria'
  | 'Consultor'
  | 'CS Lead'
  | 'Gerente CS'
  | 'Gestor Cliente'
  | 'Colaborador'

interface ViewState {
  activeView: ViewRole
  setActiveView: (view: ViewRole) => void
}

export const useViewStore = create<ViewState>((set) => ({
  activeView: 'CEO',
  setActiveView: (view) => set({ activeView: view }),
}))
