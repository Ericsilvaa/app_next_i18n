'use client'
import {
  EventDetails as EventSectionDetails,
  EventSections,
  sampleEventTranslations
} from '@/constants/Events'
import { useTranslations } from 'next-intl'
import React from 'react'

const EventDetails: React.FC = () => {
  const t = useTranslations('Events')
  // const { eventId } = useParams()
  const locale = t('locale') as 'pt' | 'en' | 'it' | 'es'

  const sampleEvent = sampleEventTranslations[locale]

  if (!sampleEvent) {
    return <p className='text-center'>Evento não encontrado.</p>
  }

  return (
    <div className='max-w-5xl px-3 py-5 rounded-lg shadow-md'>
      {sampleEvent ? (
        <div className='bg-white px-2 py-3 '>
          <h2 className='text-xl font-semibold text-indigo-600'>
            {sampleEvent.eventName}
          </h2>
          {EventSectionDetails.map(({ label, key }) => (
            <p key={key} className='mt-2'>
              <strong>{t(label)}</strong> {sampleEvent[key]}
            </p>
          ))}
        </div>
      ) : (
        <p className='text-gray-600'>{t(EventSections[0].description)}</p>
      )}
    </div>
  )
}

export default EventDetails
