import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

function Brand() {
  return (
    <a className="brand" href="#home" aria-label="Abdul Emami Startseite">
      <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
      <span>ABDUL<span>/EMAMI</span></span>
    </a>
  )
}

const navLinks = [
  ['Projekte', '#projects'],
  ['Videos', '#videos'],
  ['Zertifikate', '#credentials'],
]

export function Header() {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)
  return (
    <header className="site-header">
      <Brand />
      <button className="menu-toggle" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? 'Menü schließen' : 'Menü öffnen'}>
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? 'site-nav is-open' : 'site-nav'} aria-label="Hauptnavigation">
        {navLinks.map(([label, href]) => <a href={href} onClick={closeMenu} key={href}>{label}</a>)}
        <a className="header-cta" href="#contact" onClick={closeMenu}>Projekt anfragen <ArrowUpRight size={16} /></a>
      </nav>
    </header>
  )
}
