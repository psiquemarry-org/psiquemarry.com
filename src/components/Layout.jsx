import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import logo from '../assets/svg/logo.svg'
import { categories, wa } from '../data/catalog'

const Chat = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round">
    <path d="M4 5h16v11H9l-5 4V5z" />
  </svg>
)

const Layout = () => { 
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [prevPathname, setPrevPathname] = useState(null)
  const { pathname } = useLocation()
  const home = pathname === '/'

  if (prevPathname !== pathname) {
    setPrevPathname(pathname)
    if (open) setOpen(false)
  }

  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])

  const links = Object.entries(categories).map(([k, c]) => (
    <NavLink key={k} to={`/${k}`} viewTransition>{c.title}</NavLink>
  ))

  return (
    <>
      <div className="topbar">Criação personalizada · Atendimento exclusivo via WhatsApp</div>
      <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
        <button className="menu-btn" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
            <path d={open ? 'M5 5l14 14M19 5L5 19' : 'M3 8h18M3 16h18'} />
          </svg>
        </button>
        <nav className="nav" aria-label="Principal">
          {links}
          <NavLink to="/customize" viewTransition className="nav-accent">Criar</NavLink>
        </nav>
        <Link to="/" viewTransition className="brand" aria-label="Psiquê — início"><img src={logo} alt="Psiquê" /></Link>
        <div className="actions">
          <a href={wa('Olá! Gostaria de atendimento da Psiquê.')} target="_blank" rel="noreferrer" aria-label="Atendimento por WhatsApp"><Chat /></a>
        </div>
      </header>

      <div className={`drawer ${open ? 'is-open' : ''}`}>
        {links}
        <NavLink to="/customize" viewTransition>Criar minha joia</NavLink>
        <a href={wa('Olá! Gostaria de atendimento da Psiquê.')} target="_blank" rel="noreferrer">Atendimento</a>
      </div>

      <main className={home ? 'page-home' : 'page'}><Outlet /></main>

      <footer className="footer">
        <div className="cols">
          <div><h4>Coleções</h4>{Object.entries(categories).map(([k, c]) => <Link key={k} to={`/${k}`} viewTransition>{c.title}</Link>)}</div>
          <div><h4>Psiquê</h4><Link to="/customize" viewTransition>Criar minha joia</Link><a href="#">Sobre a marca</a><a href="#">Cuidados com a joia</a></div>
          <div><h4>Atendimento</h4><a href={wa('Olá! Gostaria de atendimento da Psiquê.')} target="_blank" rel="noreferrer">WhatsApp</a><a href="#">Instagram</a><a href="#">Trocas e garantia</a></div>
        </div>
        <img src={logo} alt="Psiquê" className="footer-logo" />
        <p>© 2026 Psiquê. Todos os direitos reservados.</p>
      </footer>
    </>
  )
}

export default Layout
