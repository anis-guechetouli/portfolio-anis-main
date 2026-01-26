'use client'

import { useState, useEffect } from 'react'
import {
  Home,
  User,
  GraduationCap,
  BookOpen,
  Code,
  Award,
  FolderKanban,
  Mail,
  Menu,
  X,
  Shield,
} from 'lucide-react'
import { profile, sections, NavItem } from '@/data/profile'
import NavGroup from './NavGroup'

const iconMap: Record<string, any> = {
  Home,
  User,
  GraduationCap,
  BookOpen,
  Code,
  Award,
  FolderKanban,
  Mail,
  Shield,
}

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('accueil')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const allSections = document.querySelectorAll('section[id]')
      const scrollPosition = window.scrollY + 200

      allSections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = section.clientHeight
        const sectionId = section.getAttribute('id')

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId || 'accueil')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMobileMenuOpen(false)
  }

  const SidebarContent = () => (
    <>
      {/* Carte Profil */}
      <div className="glass rounded-[26px] p-6 mb-8 border border-white/10">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-3xl font-bold text-dark-bg">
            {profile.firstName[0]}{profile.lastName[0]}
          </div>
          <h2 className="text-2xl font-bold text-white mb-1">
            {profile.firstName} {profile.lastName}
          </h2>
          <p className="text-sm text-gray-400">{profile.role}</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-3">
        {sections.map((section: NavItem) => {
          const Icon = iconMap[section.icon]

          // Si l'item a des sous-items, utiliser NavGroup
          if (section.subItems && section.subItems.length > 0) {
            return (
              <NavGroup
                key={section.id}
                parentId={section.id}
                parentLabel={section.label}
                parentIcon={Icon}
                subItems={section.subItems}
                activeSection={activeSection}
                onNavClick={handleNavClick}
              />
            )
          }

          // Sinon, afficher un bouton simple
          const isActive = activeSection === section.id
          return (
            <button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              className={`w-full h-12 rounded-[16px] px-4 flex items-center gap-3 transition-all duration-200 ${
                isActive
                  ? 'bg-accent text-dark-bg font-semibold glow-accent shadow-lg'
                  : 'text-gray-300 hover:bg-white/5 border border-transparent hover:border-accent/30 hover:text-accent'
              }`}
            >
              <Icon size={20} />
              <span className="text-sm">{section.label}</span>
            </button>
          )
        })}
      </nav>
    </>
  )

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
        aria-label="Menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Desktop */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-80 flex-col p-6 glass border-r border-white/10 z-40 overflow-y-auto">
        <SidebarContent />
      </aside>

      {/* Sidebar Mobile (Drawer) */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <aside className="fixed left-0 top-0 h-full w-80 flex-col p-6 glass border-r border-white/10 z-50 lg:hidden overflow-y-auto">
            <SidebarContent />
          </aside>
        </>
      )}
    </>
  )
}
