import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'SKYWATCH // UAP SURVEILLANCE NETWORK',
  description: 'Cyberpunk UAP Sighting Surveillance & Intelligence Platform 🛸',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body style={{ fontFamily: 'Rajdhani, system-ui, Arial, sans-serif' }}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
