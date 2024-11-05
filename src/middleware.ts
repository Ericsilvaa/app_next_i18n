import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['en', 'pt', 'it', 'es'],
  defaultLocale: 'en'
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|pt|it|es)/:path*']
}
