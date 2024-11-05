import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'

function Footer() {
  const t = useTranslations('Footer')

  return (
    <footer className='bg-primary text-primary-foreground mt-8'>
      <div className='container mx-auto px-4 py-8 flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0'>
        <div className='text-center md:text-left'>
          <p>
            © {new Date().getFullYear()} {t('rightsReserved')}
          </p>
        </div>

        {/* Links Úteis */}
        <div className='flex space-x-6 text-sm'>
          <Link href='/programs' className='hover:text-primary-light'>
            {t('programs')}
          </Link>
          <Link href='/about' className='hover:text-primary-light'>
            {t('aboutUs')}
          </Link>
          <Link href='/contact' className='hover:text-primary-light'>
            {t('contactUs')}
          </Link>
        </div>

        {/* Redes Sociais */}
        <div className='flex space-x-4'>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-primary-light'
          >
            <span className='sr-only'>Facebook</span>
            {/* Ícone do Facebook */}
            <svg
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.074 3.779 9.253 8.671 9.88v-7.005h-2.593v-2.875h2.593V9.73c0-2.558 1.507-3.974 3.814-3.974 1.104 0 2.255.195 2.255.195v2.479h-1.27c-1.251 0-1.641.778-1.641 1.575v1.896h2.789l-.445 2.875h-2.344v7.005C18.221 21.253 22 17.074 22 12z' />
            </svg>
          </a>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-primary-light'
          >
            <span className='sr-only'>Twitter</span>
            {/* Ícone do Twitter */}
            <svg
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path d='M23.953 4.569a10 10 0 01-2.825.775 4.994 4.994 0 002.163-2.723 10.042 10.042 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482 13.978 13.978 0 01-10.15-5.139 4.822 4.822 0 001.523 6.574 4.904 4.904 0 01-2.229-.616v.062a4.925 4.925 0 003.946 4.827 4.996 4.996 0 01-2.224.085 4.935 4.935 0 004.604 3.417A9.897 9.897 0 010 19.543a13.945 13.945 0 007.548 2.209c9.055 0 14-7.496 14-13.986 0-.21-.004-.42-.014-.63A9.936 9.936 0 0024 4.59z' />
            </svg>
          </a>
          <a
            href='https://linkedin.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-primary-light'
          >
            <span className='sr-only'>LinkedIn</span>
            {/* Ícone do LinkedIn */}
            <svg
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path d='M20.447 20.452h-3.554v-5.507c0-1.309-.026-3-1.831-3-1.832 0-2.113 1.429-2.113 2.907v5.6h-3.553V9h3.412v1.561h.049c.476-.9 1.637-1.847 3.367-1.847 3.596 0 4.262 2.366 4.262 5.448v6.29zM5.337 7.433a2.062 2.062 0 01-2.061-2.061 2.06 2.06 0 012.061-2.06c1.14 0 2.061.92 2.061 2.06a2.061 2.061 0 01-2.061 2.061zM6.946 20.452H3.728V9h3.218v11.452z' />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
