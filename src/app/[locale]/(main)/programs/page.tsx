'use client'
import { useTranslations } from 'next-intl'

function ProgramsPage() {
  const t = useTranslations('Programs')

  const programs = [
    {
      key: 'education',
      title: t('educationProgram'),
      description: t('educationDescription')
    },
    {
      key: 'health',
      title: t('healthProgram'),
      description: t('healthDescription')
    },
    {
      key: 'community',
      title: t('communityProgram'),
      description: t('communityDescription')
    },
    {
      key: 'volunteer',
      title: t('volunteerProgram'),
      description: t('volunteerDescription')
    }
  ]

  const testimonials = [t('testimonial1'), t('testimonial2'), t('testimonial3')]

  return (
    <div className='max-w-5xl mx-auto px-6 py-12 space-y-16'>
      {/* Header */}
      <section className='text-center'>
        <h1 className='text-4xl font-bold text-blue-800 mb-4'>
          {t('pageTitle')}
        </h1>
        <p className='text-lg text-gray-700 max-w-2xl mx-auto'>
          {t('programOverview')}
        </p>
      </section>

      {/* Lista de Programas */}
      <section>
        <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8'>
          {programs.map((program) => (
            <div
              key={program.key}
              className='bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200'
            >
              <h3 className='text-2xl font-semibold text-blue-700 mb-3'>
                {program.title}
              </h3>
              <p className='text-gray-600 text-sm mb-4'>
                {program.description}
              </p>
              <button className='text-blue-600 font-semibold hover:underline'>
                {t('learnMoreButton')}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Seção de Impacto */}
      <section className='text-center'>
        <h2 className='text-3xl font-bold text-blue-800 mb-4'>
          {t('programImpactTitle')}
        </h2>
        <p className='text-gray-600 max-w-3xl mx-auto'>
          {t('programImpactDescription')}
        </p>
      </section>

      {/* Histórias de Sucesso */}
      <section className='bg-gray-50 p-8 rounded-lg'>
        <h2 className='text-3xl font-bold text-blue-800 mb-6 text-center'>
          {t('successStoriesTitle')}
        </h2>
        <p className='text-center text-gray-600 max-w-2xl mx-auto mb-8'>
          {t('successStoriesDescription')}
        </p>
        <div className='grid md:grid-cols-3 gap-6'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='bg-white p-6 rounded-lg shadow-md border border-gray-200 text-gray-700 text-sm'
            >
              <p>“{testimonial}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <div className='text-center mt-12'>
        <button className='bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-500 transition duration-200'>
          {t('applyButton')}
        </button>
      </div>
    </div>
  )
}

export default ProgramsPage
