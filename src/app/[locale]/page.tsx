'use client'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function HomePage() {
  const t = useTranslations('HomePage')
  const pathname = usePathname()

  console.log('🚀 ~ HomePage ~ locale:', pathname)
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href={`${pathname}/about`}>{t('about')}</Link>
    </div>
  )
}
