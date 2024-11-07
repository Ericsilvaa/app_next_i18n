'use client'
import { ProgramID, Programs } from '@/constants/Programs'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import React from 'react'

const ProgramDetails: React.FC = () => {
  const t = useTranslations('Programs')
  const { programId } = useParams()

  const program = Programs[programId as ProgramID]

  if (!program) {
    return <p className='text-center'>Programa não encontrado.</p>
  }

  return (
    <>
      <h1 className='text-4xl font-bold text-blue-800 mb-6 flex flex-row items-center gap-2'>
        {t(program.title)}
      </h1>
      <p className='text-lg text-gray-700 mb-6'>{t(program.fullDescription)}</p>

      <div className='space-y-8'>
        {/* Duration Section */}
        <section>
          <h2 className='text-2xl font-semibold text-blue-700 mb-4'>
            {t('durationTitle')}
          </h2>
          <p className='text-gray-600'>{t(program.duration)}</p>
        </section>

        {/* Admission Requirements Section */}
        <section>
          <h2 className='text-2xl font-semibold text-blue-700 mb-4'>
            {t('admissionRequirementsTitle')}
          </h2>
          <p className='text-gray-600 whitespace-pre-line'>
            {t(program.admissionRequirements)}
          </p>
        </section>

        {/* Careers Section */}
        <section>
          <h2 className='text-2xl font-semibold text-blue-700 mb-4'>
            {t('careersTitle')}
          </h2>
          <p className='text-gray-600 whitespace-pre-line'>
            {t(program.careers)}
          </p>
        </section>
      </div>
    </>
  )
}

export default ProgramDetails
