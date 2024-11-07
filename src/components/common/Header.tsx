'use client'

import { localeOptions } from '@/constants/LocalOptions'
import LocaleSwitcher from '../switcher/LocaleSwitcher'
import NavBar from './NavBar'

function Header() {
  return (
    <header className='bg-primary text-primary-foreground p-4 flex justify-between items-center'>
      <NavBar />
      <LocaleSwitcher options={localeOptions} />
    </header>
  )
}

export default Header
