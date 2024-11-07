'use client'
import Title from '@/components/common/Title'
import { ProgramID, Programs } from '@/constants/Programs'
import { Link } from '@/navigation'
import { ArrowLeft } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import React from 'react'

type ProgramDetailsProps = {
  backButton?: boolean
}

const ProgramDetails: React.FC<ProgramDetailsProps> = ({
  backButton = false
}) => {
  const t = useTranslations('Programs')
  const { programId } = useParams()

  const program = Programs[programId as ProgramID]

  if (!program) {
    return <p className='text-center'>Programa não encontrado.</p>
  }

  return (
    <>
      <div className='flex gap-2 mb-2 flex-row items-center '>
        {backButton && (
          <Link href='/programs' className='py-2 px-1'>
            <ArrowLeft className='text-blue-800' size={30} />
          </Link>
        )}
        <Title title={t(program.title)} />
      </div>
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
