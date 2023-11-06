import { Footer, Navbar } from '@/components'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Top Prospects Academy',
  description: "Empowering student-athletes to thrive both academically and athletically, Top Prospects Academy is where the synergy of education and sports fosters personal growth and prepares future Life Champions.",

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel='icon' href='../public/logo-cropped.jpg' />
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
