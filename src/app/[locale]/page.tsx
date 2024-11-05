import ProgramsSection from '@/components/sections/Programs'
import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Home() {
  const t = useTranslations('Home')

  return (
    <div className='space-y-16 bg-gray-50 py-12 px-6 md:px-12 lg:px-24'>
      {/* Seção de Boas-Vindas */}
      <section className='text-center'>
        <h1 className='text-5xl font-extrabold text-blue-800 mb-6'>
          {t('welcomeMessage')}
        </h1>
        <p className='text-lg text-gray-700 font-light max-w-xl mx-auto'>
          {t('introText')}
        </p>
      </section>

      {/* Seção Sobre Nós */}
      <section className='grid md:grid-cols-2 gap-12 items-center'>
        <div>
          <h2 className='text-3xl font-bold text-blue-700 mb-4'>
            {t('missionStatement')}
          </h2>
          <p className='text-gray-600 leading-relaxed text-base'>
            {t('introText')}
          </p>
        </div>
        <div className='relative w-full h-72'>
          <Image
            src='/images/university.jpg'
            alt='Institution building'
            width={300}
            height={300}
            priority
            className='rounded-lg w-full h-full brightness-75 object-contain'
          />
          <div className='absolute inset-0 flex items-center justify-center'>
            <span className='text-center text-white text-2xl font-semibold'>
              {t('missionStatement')}
            </span>
          </div>
        </div>
      </section>

      {/* Seção de Programas */}
      <section>
        <h2 className='text-3xl font-bold text-blue-700 mb-6 text-center'>
          {t('explorePrograms')}
        </h2>
        <ProgramsSection />
      </section>

      {/* Seção de Contato */}
      <section className='text-center'>
        <h2 className='text-3xl font-bold text-blue-700 mb-4'>
          {t('contactUs')}
        </h2>
        <p className='text-gray-600 mb-6 max-w-lg mx-auto'>
          {t('joinCommunity')}
        </p>
        <Link
          href='/contact'
          className='inline-block bg-blue-600 text-white font-medium px-8 py-3 rounded-full hover:bg-blue-500 transition duration-200'
        >
          {t('contactUs')}
        </Link>
      </section>
    </div>
  )
}
