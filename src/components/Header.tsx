'use client'

import { localeOptions } from '@/constants/LocalOptions'
import NavBar from './NavBar'
import LocaleSwitcher from './switcher/LocaleSwitcher'

function Header() {
  return (
    <header className='bg-primary text-primary-foreground p-4 flex justify-between items-center'>
      <NavBar />
      <LocaleSwitcher options={localeOptions} />
    </header>
  )
}

export default Header
