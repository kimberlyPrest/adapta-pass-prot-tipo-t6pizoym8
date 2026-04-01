import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import logoImg from '../assets/adapta-pass-logo-white-5b4d9-crdoq5rj-4cf23.png'

export default function Layout() {
  const [vision, setVision] = useState('ceo')

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        {/* Navigation Bar */}
        <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b border-[#2A2A2A] bg-[#0A0A0A] px-4 md:px-6">
          {/* Brand Logo Area */}
          <Link
            to="/"
            className="flex items-center transition-opacity duration-200 hover:opacity-80"
          >
            <img
              src={logoImg}
              alt="Adapta Pass Logo"
              className="h-7 md:h-8 w-auto object-contain"
            />
          </Link>

          {/* Vision Selector Area */}
          <div className="flex items-center gap-4">
            <Select value={vision} onValueChange={setVision}>
              <SelectTrigger className="w-[180px] md:w-[220px] bg-transparent border-[#2A2A2A] text-foreground focus:ring-1 focus:ring-primary">
                <SelectValue placeholder="Selecione a visão" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ceo">CEO</SelectItem>
                <SelectItem value="head_consultoria">Head Consultoria</SelectItem>
                <SelectItem value="consultor">Consultor</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 pt-16">
          <Outlet />
        </main>
      </div>
      <Toaster />
    </TooltipProvider>
  )
}
