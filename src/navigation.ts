import { createNavigation } from 'next-intl/navigation'

import { LocalePrefix, Pathnames } from 'next-intl/routing'
export const locales = ['en', 'pt', 'it', 'es'] as const

export type Locales = typeof locales

export const pathnames: Pathnames<Locales> = {
  home: '/',
  create: '/home',
  pet: '/about',
  petEdit: '/contact'
}

export const localePrefix: LocalePrefix<Locales> = 'always'

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation({
    locales,
    localePrefix,
    pathnames
  })
