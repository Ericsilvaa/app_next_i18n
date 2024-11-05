import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Institution Website',
  description: 'A professional institution website'
}

interface LayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const messages = await getMessages()

  return (
    <html lang={`${params.locale}`}>
      <body suppressHydrationWarning={true} className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className='container mx-auto px-4 py-8'>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
