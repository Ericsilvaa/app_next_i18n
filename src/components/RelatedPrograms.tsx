import { RelatedPrograms } from '@/constants/Programs'
import { useTranslations } from 'next-intl'

const RelatedProgramsPage = () => {
  const t = useTranslations('Programs')

  return (
    <div className='py-6'>
      <h2 className='text-3xl font-bold text-blue-800 mb-4'>
        {t('relatedProgramsTitle')}
      </h2>
      <div className='flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-200'>
        {RelatedPrograms.map((program) => (
          <div
            key={program.id}
            className='min-w-[300px] flex-shrink-0 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105'
          >
            <h3 className='text-lg font-semibold'>{program.title}</h3>
            <p className='text-sm text-gray-600'>{program.description}</p>
            <button className='mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition'>
              {t('learnMoreButton')}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RelatedProgramsPage
