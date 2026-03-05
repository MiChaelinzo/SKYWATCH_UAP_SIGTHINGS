import './globals.css'
import { Rajdhani } from 'next/font/google'
import Navbar from '@/components/Navbar'

const rajdhani = Rajdhani({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export const metadata = {
  title: 'SKYWATCH // UAP SURVEILLANCE NETWORK',
  description: 'Cyberpunk UAP Sighting Surveillance & Intelligence Platform 🛸',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={rajdhani.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
