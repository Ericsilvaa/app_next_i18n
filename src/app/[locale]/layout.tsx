import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Institution Website',
  description: 'A professional institution website'
}

interface LayoutProps {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className='container mx-auto px-4 py-8'>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
