'use client'
import { ProgramsSectionType } from '@/constants/Programs'
import { useRouter } from '@/navigation'
import { useTranslations } from 'next-intl'

const ProgramsSection = ({ programs }: { programs: ProgramsSectionType[] }) => {
  const router = useRouter()
  const t = useTranslations('Programs')

  const handleLearnMoreClick = (programId: string) => {
    console.log('🚀 ~ handleLearnMoreClick ~ programId:', programId)
    router.push(`/programs/${programId}/details`)
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
              {t(program.title)}
            </h3>
            <p className='text-gray-600 text-sm'>{t(program.description)}</p>
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
