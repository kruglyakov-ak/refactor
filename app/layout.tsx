import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mera Quant',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

