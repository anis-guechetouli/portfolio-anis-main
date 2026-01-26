'use client'

import { LucideIcon } from 'lucide-react'

interface NavGroupProps {
  parentId: string
  parentLabel: string
  parentIcon: LucideIcon
  subItems: { id: string; label: string }[]
  activeSection: string
  onNavClick: (sectionId: string) => void
}

export default function NavGroup({
  parentId,
  parentLabel,
  parentIcon: ParentIcon,
  subItems,
  activeSection,
  onNavClick,
}: NavGroupProps) {
  const isParentActive = subItems.some((item) => item.id === activeSection)

  return (
    <div className="space-y-2">
      {/* Parent (optionnel, peut être cliqué pour scroll vers le premier sous-item) */}
      <div
        className={`px-4 py-2 text-sm font-medium ${
          isParentActive ? 'text-accent' : 'text-gray-400'
        }`}
      >
        <div className="flex items-center gap-3">
          <ParentIcon size={18} />
          <span>{parentLabel}</span>
        </div>
      </div>

      {/* Sous-items avec barre verticale */}
      <div className="flex gap-2 pl-2">
        {/* Barre verticale */}
        <div className="w-0.5 bg-accent/30 rounded-full" />

        {/* Colonne de sous-boutons */}
        <div className="flex-1 space-y-1.5">
          {subItems.map((subItem) => {
            const isActive = activeSection === subItem.id

            return (
              <button
                key={subItem.id}
                onClick={() => onNavClick(subItem.id)}
                className={`w-full h-10 rounded-xl px-4 flex items-center transition-all duration-200 text-sm ${
                  isActive
                    ? 'bg-accent text-dark-bg font-semibold glow-accent shadow-lg'
                    : 'text-gray-300 hover:bg-white/5 border border-transparent hover:border-accent/30 hover:text-accent'
                }`}
              >
                {subItem.label}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
