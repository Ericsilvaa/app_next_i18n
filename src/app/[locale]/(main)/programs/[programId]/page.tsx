'use client'
import ProgramDetails from '@/components/ProgramDetails'
import { Link } from '@/navigation'
import { ArrowLeft } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

const ProgramDetailPage = () => {
  const t = useTranslations('Programs')
  const { programId } = useParams()

  return (
    <div className='max-w-5xl mx-auto px-6 py-12'>
      <Link href='/programs' className='py-3 px-1'>
        <ArrowLeft color='blue' size={30} />
      </Link>

      <ProgramDetails />

      <section className='text-center mt-12'>
        <Link
          href={`/programs/${programId}/subscribe`}
          className='bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-500 transition duration-200'
        >
          {t('applyButton')}
        </Link>
      </section>
    </div>
  )
}

export default ProgramDetailPage
