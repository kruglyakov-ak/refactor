import { Metadata } from 'next'
import { Manrope } from 'next/font/google'

import 'shared/styles/globals.scss'
import colors from 'shared/styles/theme/colors.module.scss'

import { Providers } from './providers'

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Mera Quant',
  description:
    'Instead of investing in a bitcoin, invest in an entire automated investment strategy inside your crypto exchange account.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
  themeColor: [
    {
      color: colors.darkBgSecondary,
      media: 'prefers-color-scheme: dark',
    },
    {
      color: colors.lightBgSecondary,
      media: 'prefers-color-scheme: light',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={manrope.className}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
