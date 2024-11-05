import {
  EventActions,
  EventDetails,
  EventExtras,
  EventSections,
  sampleEventTranslations
} from '@/constants/Events'
import { useTranslations } from 'next-intl'

const EventPage = () => {
  const t = useTranslations('Events')
  // Lê o locale atual diretamente do JSON de tradução
  const locale = t('locale') as 'pt' | 'en' | 'it' | 'es'

  // Seleciona o evento com base no locale
  const sampleEvent = sampleEventTranslations[locale]

  return (
    <div className='p-8 bg-gray-50 text-gray-800 shadow-md rounded-lg'>
      <h1 className='text-4xl font-bold text-center mb-12 text-indigo-600'>
        {t('pageTitle')}
      </h1>

      {/* Seção de eventos futuros */}
      <section className='mb-10'>
        <h2 className='text-2xl font-semibold text-indigo-500 mb-5'>
          {t(EventSections[0].title)}
        </h2>
        {sampleEvent ? (
          <div className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1'>
            <h3 className='text-xl font-semibold text-indigo-600'>
              {sampleEvent.eventName}
            </h3>
            {EventDetails.map(({ label, key }) => (
              <p key={key} className='mt-2'>
                <strong>{t(label)}</strong> {sampleEvent[key]}
              </p>
            ))}
            <button className='mt-6 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition'>
              {t(EventActions[0])}
            </button>
          </div>
        ) : (
          <p className='text-gray-600'>{t(EventSections[0].description)}</p>
        )}
      </section>

      {/* Seção de eventos passados */}
      <section className='mb-10'>
        <h2 className='text-2xl font-semibold text-indigo-500 mb-5'>
          {t(EventSections[1].title)}
        </h2>
        <p className='text-gray-600 italic'>
          {t(EventSections[1].description)}
        </p>
        {/* Placeholder para galeria de eventos passados */}
      </section>

      <p className='mt-10 text-center text-gray-700 font-medium'>
        {t(EventExtras[0])}
      </p>
    </div>
  )
}

export default EventPage
