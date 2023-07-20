import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './shared/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Haroon Rana - Couching and Consulting',
  description: 'Portfolio site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-white">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
