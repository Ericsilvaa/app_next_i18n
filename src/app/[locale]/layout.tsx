import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import { Link } from '@/navigation'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Institution Website',
  description: 'A professional institution website'
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const { locale } = await params
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body suppressHydrationWarning={true} className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <header className='bg-primary text-primary-foreground'>
            <nav className='container mx-auto px-4 py-6'>
              <ul className='flex space-x-4'>
                <li>
                  <Link href='/' className='hover:underline'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href='/contact' className='hover:underline'>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href='/programs' className='hover:underline'>
                    Programs
                  </Link>
                </li>
                <li>
                  <Link href='/about' className='hover:underline'>
                    About
                  </Link>
                </li>
                <li>
                  <Link href='/events' className='hover:underline'>
                    Events
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          <main className='container mx-auto px-4 py-8'>{children}</main>
          <footer className='bg-primary text-primary-foreground mt-8'>
            <div className='container mx-auto px-4 py-6 text-center'>
              © {new Date().getFullYear()} Institution Name. All rights
              reserved.
            </div>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
