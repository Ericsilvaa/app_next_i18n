import { RelatedPrograms } from '@/constants/Programs'
import { useTranslations } from 'next-intl'

const RelatedProgramsPage = () => {
  const t = useTranslations('Programs')

  return (
    <div className='mt-8'>
      <h2 className='text-3xl font-bold text-blue-800 mb-3'>
        {t('relatedProgramsTitle')}
      </h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {RelatedPrograms.slice(0, 4).map((program) => (
          <div
            key={program.id}
            className='bg-white border border-gray-200 px-3 py-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200'
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
