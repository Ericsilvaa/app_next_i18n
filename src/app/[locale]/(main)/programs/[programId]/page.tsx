'use client'
import { Link } from '@/navigation'
import { ArrowLeft } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

type ProgramID =
  | 'educationProgram'
  | 'healthProgram'
  | 'communityProgram'
  | 'volunteerProgram'
  | 'undergraduate'
  | 'graduate'

interface Program {
  title: string
  description: string
  fullDescription: string
  duration: string
  admissionRequirements: string
  careers: string
}

const ProgramDetailPage = () => {
  const t = useTranslations('Programs')
  const { programId } = useParams()

  const programs: Record<ProgramID, Program> = {
    educationProgram: {
      title: t('educationProgram.title'),
      description: t('educationProgram.description'),
      fullDescription: t('educationProgram.fullDescription'),
      duration: t('educationProgram.duration'),
      admissionRequirements: t('educationProgram.admissionRequirements'),
      careers: t('educationProgram.careers')
    },
    healthProgram: {
      title: t('healthProgram.title'),
      description: t('healthProgram.description'),
      fullDescription: t('healthProgram.fullDescription'),
      duration: t('healthProgram.duration'),
      admissionRequirements: t('healthProgram.admissionRequirements'),
      careers: t('healthProgram.careers')
    },
    communityProgram: {
      title: t('communityProgram.title'),
      description: t('communityProgram.description'),
      fullDescription: t('communityProgram.fullDescription'),
      duration: t('communityProgram.duration'),
      admissionRequirements: t('communityProgram.admissionRequirements'),
      careers: t('communityProgram.careers')
    },
    volunteerProgram: {
      title: t('volunteerProgram.title'),
      description: t('volunteerProgram.description'),
      fullDescription: t('volunteerProgram.fullDescription'),
      duration: t('volunteerProgram.duration'),
      admissionRequirements: t('volunteerProgram.admissionRequirements'),
      careers: t('volunteerProgram.careers')
    },
    undergraduate: {
      title: t('undergraduate.title'),
      description: t('undergraduate.description'),
      fullDescription: t('undergraduate.fullDescription'),
      duration: t('undergraduate.duration'),
      admissionRequirements: t('undergraduate.admissionRequirements'),
      careers: t('undergraduate.careers')
    },
    graduate: {
      title: t('graduate.title'),
      description: t('graduate.description'),
      fullDescription: t('graduate.fullDescription'),
      duration: t('graduate.duration'),
      admissionRequirements: t('graduate.admissionRequirements'),
      careers: t('graduate.careers')
    }
  }

  const program = programs[programId as ProgramID]

  if (!program) {
    return <p className='text-center'>Programa não encontrado.</p>
  }

  return (
    <div className='max-w-5xl mx-auto px-6 py-12'>
      <h1 className='text-4xl font-bold text-blue-800 mb-6 flex flex-row items-center gap-2'>
        <Link href='/programs' className='py-3 px-1'>
          <ArrowLeft color='blue' size={30} />
        </Link>
        {program.title}
      </h1>
      <p className='text-lg text-gray-700 mb-6'>{program.fullDescription}</p>

      <div className='space-y-8'>
        {/* Seção de Duração */}
        <section>
          <h2 className='text-2xl font-semibold text-blue-700 mb-4'>
            {t('durationTitle')}
          </h2>
          <p className='text-gray-600'>{program.duration}</p>
        </section>

        {/* Seção de Requisitos de Admissão */}
        <section>
          <h2 className='text-2xl font-semibold text-blue-700 mb-4'>
            {t('admissionRequirementsTitle')}
          </h2>
          <p className='text-gray-600 whitespace-pre-line'>
            {program.admissionRequirements}
          </p>
        </section>

        {/* Seção de Carreiras */}
        <section>
          <h2 className='text-2xl font-semibold text-blue-700 mb-4'>
            {t('careersTitle')}
          </h2>
          <p className='text-gray-600 whitespace-pre-line'>{program.careers}</p>
        </section>
      </div>

      <section className='text-center mt-12'>
        <button className='bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-500 transition duration-200'>
          {t('applyButton')}
        </button>
      </section>
    </div>
  )
}

export default ProgramDetailPage
