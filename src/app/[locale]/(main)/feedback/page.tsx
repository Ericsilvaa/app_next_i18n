'use client'
import { useRouter } from '@/navigation'
import { CheckCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

const FeedBack = () => {
  const t = useTranslations('Feedback')
  const router = useRouter()
  const [countdown, setCountdown] = useState(3)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(timer)
          router.push('/')
          return prev
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [router])

  return (
    <div className='max-w-2xl mx-auto p-6 text-center'>
      <div className='flex items-center justify-center gap-2 mt-4'>
        <CheckCircle className='w-12 h-12 text-green-500' />
        <p className='text-lg font-semibold text-gray-800'>{t('thankYou')}</p>
      </div>
      <p className='text-gray-700 mt-4'>
        {t('redirecting')} {countdown} ...
      </p>
    </div>
  )
}

export default FeedBack
