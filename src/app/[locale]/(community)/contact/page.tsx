'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/hooks/use-toast'
import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function Contact() {
  const t = useTranslations('Contact')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: t('submitButton'),
      description: t('contactInstructions')
    })

    setIsSubmitting(false)
    event.currentTarget.reset()
  }

  return (
    <div className='max-w-3xl mx-auto p-6 space-y-12'>
      {/* Header */}
      <div className='text-center'>
        <h1 className='text-4xl font-extrabold text-blue-800 mb-4'>
          {t('pageTitle')}
        </h1>
        <p className='text-gray-600 mb-4'>{t('contactInstructions')}</p>
        <Link href='/' className='text-blue-600 hover:underline'>
          ← {t('backToHome')}
        </Link>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className='space-y-6 bg-white p-8 rounded-lg shadow-md border border-gray-200'
      >
        <div>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            {t('nameLabel')}
          </label>
          <Input
            id='name'
            name='name'
            required
            placeholder={t('namePlaceholder')}
            className='w-full'
          />
        </div>
        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            {t('emailLabel')}
          </label>
          <Input
            id='email'
            name='email'
            type='email'
            required
            placeholder={t('emailPlaceholder')}
            className='w-full'
          />
        </div>
        <div>
          <label
            htmlFor='message'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            {t('messageLabel')}
          </label>
          <Textarea
            id='message'
            name='message'
            required
            placeholder={t('messagePlaceholder')}
            className='w-full'
          />
        </div>
        <Button
          type='submit'
          disabled={isSubmitting}
          className='w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500 transition'
        >
          {isSubmitting ? t('sending') : t('submitButton')}
        </Button>
      </form>

      {/* Other Contact Information */}
      <div>
        <h2 className='text-2xl font-semibold text-blue-800 mb-4'>
          {t('contactInfoTitle')}
        </h2>
        <div className='space-y-2 text-gray-700'>
          <p>
            <strong>{t('phone')}:</strong> +1 (123) 456-7890
          </p>
          <p>
            <strong>{t('email')}:</strong> info@institution.edu
          </p>
          <p>
            <strong>{t('address')}:</strong> 123 Education Street, Knowledge
            City, ST 12345
          </p>
        </div>
      </div>
    </div>
  )
}
