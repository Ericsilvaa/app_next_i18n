'use client'
import FeedBack from '@/components/common/FeedBack'
import ContactForm from '@/components/forms/ContactForm'

import { toast } from '@/hooks/use-toast'
import { useTranslations } from 'next-intl'

import { useState } from 'react'

export default function Contact() {
  const t = useTranslations('Contact')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: t('submitButton'),
      description: t('contactInstructions')
    })

    setSubmitted(true)
    setIsSubmitting(false)
    event.currentTarget.reset()
  }

  return (
    <div className='max-w-3xl mx-auto p-6 space-y-12'>
      {!submitted && (
        <ContactForm handleSubmit={handleSubmit} isSubmitting={isSubmitting} />
      )}

      {submitted && <FeedBack />}
    </div>
  )
}
