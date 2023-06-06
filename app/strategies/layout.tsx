import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trading Strategies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
