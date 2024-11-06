'use client'

import clsx from 'clsx'
import { Globe } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

type LocaleSwitcherProps = {
  options: { value: string; label: string }[]
}

export default function LocaleSwitcher({ options }: LocaleSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const currentLocale = pathname.split('/')[1] || 'en'

  function handleLocaleClick(locale: string) {
    if (locale !== currentLocale) {
      router.replace(`/${locale}${pathname.substring(3)}`)
    }
    setIsOpen(false)
  }

  return (
    <div className='relative inline-block text-left'>
      {/* Botão de Seleção */}
      <button
        className='flex items-center px-4 py-2 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Globe className='w-5 h-5 mr-2' />
        {currentLocale.toUpperCase()}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className='absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-10'>
          <ul className='py-1'>
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleLocaleClick(option.value)}
                className={clsx(
                  'px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer',
                  {
                    'font-semibold text-gray-800':
                      option.value === currentLocale
                  }
                )}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
