import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'

export default function NotFoundPage() {
  const t = useTranslations('NotFound')
  return (
    <html>
      <body
        className={
          'flex flex-col flex-1 items-center justify-center bg-custom-yellow'
        }
      >
        {/* <Image src='/images/404.gif' alt='404' width={600} height={600} /> */}
        <Link
          href={'/'}
          className='font-roboto font-medium text-2xl text-custom-purple bg-white border border-custom-purple rounded-md px-4 py-2'
        >
          {t('backToHome')}
        </Link>
      </body>
    </html>
  )
}
