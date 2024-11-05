'use client'
import { useRouter } from '@/navigation'
import { useTranslations } from 'next-intl'

const ProgramsSection = () => {
  const router = useRouter()
  const t = useTranslations('Programs')

  const programs = [
    {
      key: 'educationProgram',
      title: t('educationProgram.title'),
      description: t('educationProgram.description')
    },
    {
      key: 'volunteerProgram',
      title: t('volunteerProgram.title'),
      description: t('volunteerProgram.description')
    },
    {
      key: 'undergraduate',
      title: t('undergraduate.title'),
      description: t('undergraduate.description')
    },
    {
      key: 'graduate',
      title: t('graduate.title'),
      description: t('graduate.description')
    }
  ]

  const handleLearnMoreClick = (programId: string) => {
    router.push(`/programs/${programId}`)
  }

  return (
    <section>
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
            <button
              onClick={() => handleLearnMoreClick(program.key)}
              className='mt-4 text-blue-600 font-semibold hover:underline'
            >
              {t('learnMoreButton')}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProgramsSection
