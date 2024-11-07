'use client'
import ContactForm from '@/components/forms/ContactForm'

import { toast } from '@/hooks/use-toast'
import { useRouter } from '@/navigation'
import { useTranslations } from 'next-intl'

import { useState } from 'react'

export default function Contact() {
  const router = useRouter()
  const t = useTranslations('Contact')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: t('submitButton'),
      description: t('contactInstructions')
    })

    setIsSubmitting(false)
    event.currentTarget.reset()
    router.replace('/feedback')
  }

  return (
    <div className='max-w-3xl mx-auto p-6 space-y-12'>
      <ContactForm handleSubmit={handleSubmit} isSubmitting={isSubmitting} />
    </div>
  )
}
