import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/svg/logo.svg'
import '../css/header.css'

const links = [
  { to: '/colares', label: 'Colares' },
  { to: '/brincos', label: 'Brincos' },
  { to: '/pulseiras', label: 'Pulseiras' },
]

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container site-header__row">
        <button
          className="site-header__burger"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>

        <nav className="site-header__nav site-header__nav--left">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className="site-header__link">
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/" className="site-header__logo" aria-label="Psiquê, página inicial">
          <img src={logo} alt="Psiquê" />
        </Link>

        <nav className="site-header__nav site-header__nav--right">
          <NavLink to="/customize" className="site-header__link site-header__link--gold">
            Monte a sua joia
          </NavLink>
        </nav>
      </div>

      {open && (
        <nav className="site-header__mobile">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="site-header__mobile-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/customize"
            className="site-header__mobile-link site-header__mobile-link--gold"
            onClick={() => setOpen(false)}
          >
            Monte a sua joia
          </NavLink>
        </nav>
      )}
    </header>
  )
}

export default Header
