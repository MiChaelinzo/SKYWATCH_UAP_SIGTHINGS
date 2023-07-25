import './globals.css'
import { Montserrat  } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'UAP Sightings',
  description: 'UFO 🛸🛸',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
