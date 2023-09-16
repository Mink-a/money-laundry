import './globals.css'
import type { Metadata } from 'next'
import { Jost } from 'next/font/google'

const inter = Jost({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KBZ Money',
  description: 'KBZ Money',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
