import navLinks from '@/constants/NavLinks'
import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'

const NavBar = () => {
  const t = useTranslations('NavLink')
  return (
    <nav className='container mx-auto px-4 py-6'>
      <ul className='flex space-x-4'>
        {navLinks.map(({ path, label }) => (
          <li key={label}>
            <Link href={path}>{t(label)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
