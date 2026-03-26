import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Elegant Events - Wedding Planning, Photography & Media Services',
  description: 'Expert wedding planning for Indian ceremonies, professional photography, and comprehensive media services. Creating unforgettable moments.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}