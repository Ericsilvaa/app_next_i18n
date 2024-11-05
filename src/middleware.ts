import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['en', 'pt'],
  defaultLocale: 'en'
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|pt)/:path*', '/:locale(en|pt)/about']
}
