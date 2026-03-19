import { useState, useRef, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

import logo from '../assets/images/marca.jpg';
import EsFlag from '../locales/flags/España.png';
import EnFlag from '../locales/flags/Reino Unido.png';
import FrFlag from '../locales/flags/Francia.png';
import DeFlag from '../locales/flags/Alemania.png';
import ItFlag from '../locales/flags/Italia.png';

const languages = [
  { code: 'en', label: 'EN', flag: EnFlag },
  { code: 'fr', label: 'FR', flag: FrFlag },
  { code: 'de', label: 'DE', flag: DeFlag },
  { code: 'it', label: 'IT', flag: ItFlag },
  { code: 'es', label: 'ES', flag: EsFlag },
];

function AppHeader({ darkMode, toggleDarkMode }) {
  const { t, i18n } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem('language', code);
    setLangOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
          className="logo"
          src={logo}
          alt="Luis Flor logo"
          />
          Luis Flor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">{t('nav.about')}</Nav.Link>
            <Nav.Link href="#services">{t('nav.services')}</Nav.Link>
            <Nav.Link href="#works">{t('nav.articles')}</Nav.Link>
            <Nav.Link href="#projects">{t('nav.portfolio')}</Nav.Link>
            <Nav.Link href="#contact">{t('nav.contact')}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="header-controls">
          <div className="lang-selector" ref={langRef}>
            <button
              className="lang-toggle"
              onClick={() => setLangOpen(!langOpen)}
              aria-label="Select language"
            >
              <img src={currentLang.flag} alt={currentLang.label} className="lang-flag-toggle" />
              <span className="lang-code">{currentLang.label}</span>
            </button>
            {langOpen && (
              <div className="lang-dropdown">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`lang-option ${i18n.language === lang.code ? 'active' : ''}`}
                    onClick={() => changeLanguage(lang.code)}
                  >
                    <img src={lang.flag} alt={lang.label} className="lang-flag" />
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            className={`dark-mode-toggle ${darkMode ? 'dark-active' : 'light-active'}`}
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </button>
        </div>
      </Container>
    </Navbar>
  );
}

export default AppHeader;