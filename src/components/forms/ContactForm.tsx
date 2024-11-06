import { InputBase } from '@/components/InputBase'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'
import React from 'react'

type ContactFormProps = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  isSubmitting: boolean
}

const ContactForm: React.FC<ContactFormProps> = ({
  handleSubmit,
  isSubmitting
}) => {
  const t = useTranslations('Contact')

  return (
    <>
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
          <InputBase
            id='name'
            name='name'
            required
            label={t('nameLabel')}
            placeholder={t('namePlaceholder')}
            className='w-full'
          />
        </div>
        <div>
          <InputBase
            id='email'
            name='email'
            type='email'
            required
            label={t('emailLabel')}
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
    </>
  )
}

export default ContactForm
