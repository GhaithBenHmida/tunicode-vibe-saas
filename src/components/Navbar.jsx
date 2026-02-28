import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Rocket } from 'lucide-react'
import Button from './ui/Button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const links = [
    { name: 'Documentation', path: '/documentation' },
    { name: 'Contact', path: '/contact' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'My Projects', path: '/my-projects' },
  ]

  if (location.pathname === '/workspace') return null

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-zinc-200/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center">
             <Rocket className="w-5 h-5 text-brand-blue" />
          </div>
          <span className="text-lg font-semibold tracking-tight">TuniCode</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm transition-colors ${location.pathname === link.path ? 'text-zinc-100' : 'text-zinc-400 hover:text-zinc-100'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/link">
            <Button variant="primary" className="py-2 px-5">Account</Button>
          </Link>
        </div>

        <button 
          className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden glass border-b border-zinc-200/10 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm text-zinc-400"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/link" onClick={() => setIsOpen(false)}>
            <Button className="w-full">Account</Button>
          </Link>
        </div>
      )}
    </nav>
  )
}