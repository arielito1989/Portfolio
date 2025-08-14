
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import ThemeSwitcher from '../ui/ThemeSwitcher'
import LanguageSwitcher from '../ui/LanguageSwitcher'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  const navLinks = [
    { id: 'home', title: t('header.home') },
    { id: 'about', title: t('header.about') },
    { id: 'skills', title: t('header.skills') },
    { id: 'projects', title: t('header.projects') },
    { id: 'blog', title: t('header.blog') },
    { id: 'certificates', title: t('header.certificates') },
    { id: 'contact', title: t('header.contact') },
  ]

  return (
    <header className="bg-gray-900 text-white p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ariel Nogueroles</h1>
        <nav className="hidden md:flex space-x-4 items-center">
          {navLinks.map(link => (
            <a key={link.id} href={`#${link.id}`} onClick={(e) => {e.preventDefault(); scrollToSection(link.id)}} className="hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">{link.title}</a>
          ))}
          <ThemeSwitcher />
          <LanguageSwitcher />
        </nav>
        <div className="md:hidden flex items-center">
          <ThemeSwitcher />
          <LanguageSwitcher />
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Abrir menú de navegación" className="ml-4">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden mt-4">
          {navLinks.map(link => (
            <a key={link.id} href={`#${link.id}`} onClick={(e) => {e.preventDefault(); scrollToSection(link.id)}} className="block w-full text-left p-2 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">{link.title}</a>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header
