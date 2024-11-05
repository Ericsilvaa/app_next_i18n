import {
  AboutSections,
  AboutTestimonials,
  AboutValues
} from '@/constants/About'
import { useTranslations } from 'next-intl'

const AboutPage = () => {
  const t = useTranslations('About')

  return (
    <div className='p-8 text-gray-800 shadow-sm rounded-lg'>
      <h1 className='text-4xl font-bold text-center mb-12 text-blue-600'>
        {t('pageTitle')}
      </h1>

      {AboutSections.map(({ title, description }) => (
        <section
          key={title}
          className='mb-10 p-6 bg-white rounded-lg shadow-sm transition-transform transform hover:-translate-y-1 hover:shadow-md'
        >
          <h2 className='text-2xl font-semibold text-blue-500 mb-3'>
            {t(title)}
          </h2>
          <p className='text-gray-700'>{t(description)}</p>
        </section>
      ))}

      <section className='mb-10 p-6 bg-white rounded-lg shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg'>
        <h2 className='text-2xl font-semibold text-blue-500 mb-3'>
          {t('valuesTitle')}
        </h2>
        <ul className='mt-2 list-disc list-inside space-y-2 text-gray-700'>
          {AboutValues.map((valueKey) => (
            <li key={valueKey}>{t(valueKey)}</li>
          ))}
        </ul>
      </section>

      <section className='mb-10 p-6 bg-white rounded-lg shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg'>
        <h2 className='text-2xl font-semibold text-blue-500 mb-3'>
          {t('testimonialsTitle')}
        </h2>
        <div className='mt-2 space-y-4 text-gray-700'>
          {AboutTestimonials.map((testimonialKey) => (
            <p
              key={testimonialKey}
              className='italic border-l-4 border-blue-500 pl-4'
            >
              {t(testimonialKey)}
            </p>
          ))}
        </div>
      </section>

      <p className='mt-12 text-center text-gray-600 font-medium'>
        {t('contactForMoreInfo')}
      </p>
    </div>
  )
}

export default AboutPage
