import { useEffect, useRef, useState } from 'react'
import { useTranslation } from "react-i18next"
import logo from '../assets/michelle-lee-logo.png'
import { NavLink } from 'react-router-dom'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const { t, i18n } = useTranslation()

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang)
    localStorage.setItem("lang", lang)
  }

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    if (menuOpen) {
      nav.style.maxHeight = nav.scrollHeight + 'px'
    } else {
      nav.style.maxHeight = '0px'
    }
  }, [menuOpen])

  const handleClick = () => {
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="ML logo" />
        </NavLink>
      </div>

      <div className="language-switcher">
        <button
          onClick={() => changeLang("en")}
          className={i18n.language === "en" ? "active" : ""}
        >
          🇺🇸
        </button>

        <button
          onClick={() => changeLang("sv")}
          className={i18n.language === "sv" ? "active" : ""}
        >
          🇸🇪
        </button>

        <button
          onClick={() => changeLang("ko")}
          className={i18n.language === "ko" ? "active" : ""}
        >
          🇰🇷
        </button>
      </div>

      <nav ref={navRef} className="nav">
        <div className="nav__inner">
          <NavLink to="/" onClick={handleClick}>
            {t("nav.home")}
          </NavLink>

          <NavLink to="/projects" onClick={handleClick}>
            {t("nav.projects")}
          </NavLink>

          <NavLink to="/about" onClick={handleClick}>
            {t("nav.about")}
          </NavLink>

          <NavLink to="/contact" onClick={handleClick}>
            {t("nav.contact")}
          </NavLink>
        </div>
      </nav>

      <button
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}

export default Header