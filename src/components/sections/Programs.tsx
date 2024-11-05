import { useTranslations } from 'next-intl'

const ProgramsSection = () => {
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

  return (
    <section>
      {/* Título da Seção de Programas */}
      <h2 className='text-3xl font-bold text-blue-700 mb-6 text-center'>
        {t('pageTitle')}
      </h2>
      <p className='text-center text-gray-600 mb-8 max-w-2xl mx-auto'>
        {t('programOverview')}
      </p>

      {/* Lista de Programas */}
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {programs.map((program) => (
          <div
            key={program.key}
            className='bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200'
          >
            <h3 className='text-xl font-semibold text-blue-700 mb-3'>
              {program.title}
            </h3>
            <p className='text-gray-600 text-sm'>{program.description}</p>
            <button className='mt-4 text-blue-600 font-semibold hover:underline'>
              {t('learnMoreButton')}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProgramsSection
