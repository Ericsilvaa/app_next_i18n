/* eslint-disable @typescript-eslint/no-explicit-any */
import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

const locales = ['en', 'pt', 'it', 'es']

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale

  if (!locales.includes(locale as any)) {
    notFound()
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  }
})
