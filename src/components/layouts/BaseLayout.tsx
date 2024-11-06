import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const BaseLayout = ({ children }: Props) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />

      <main className='flex-grow container mx-auto px-4 py-8'>{children}</main>

      <Footer />
    </div>
  )
}

export default BaseLayout
