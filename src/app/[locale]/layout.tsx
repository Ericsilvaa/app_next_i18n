import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import NavBar from '@/components/NavBar'
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
            <NavBar />
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
