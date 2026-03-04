import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Shagun Chem — Chemical Trading',
  description: 'Your Trusted Partner in Chemical Solutions.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="bg-background text-primary font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
