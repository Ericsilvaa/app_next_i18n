import { CheckCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'

const FeedBack = () => {
  const t = useTranslations('Contact')
  return (
    <div className='flex items-center justify-center gap-2 mt-4'>
      <CheckCircle className='w-12 h-12 text-green-500' />
      <p className='text-center text-lg font-semibold text-gray-800'>
        {t('thankYou')}
      </p>
    </div>
  )
}

export default FeedBack
