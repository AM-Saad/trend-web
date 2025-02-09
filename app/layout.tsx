import './globals.css'
import client from '@/lib/contentful'
import type { Metadata } from 'next'
import Footer from '@/components/shared/Footer'
import Nav from '@/components/shared/Nav'
import { type } from 'os'


export const metadata: Metadata = {
  title: 'Trend Car Rental',
  description: "Welcome to Trend Car Rental, where innovation meets creativity to bring you the most cutting-edge solutions for all your rentals needs.",
  metadataBase: new URL('https://trendcarrental.netlify.app'),

  twitter: {
    card: 'summary_large_image',
    title: 'Trend Car Rental',
    description: "Welcome to Trend Car Rental, where innovation meets creativity to bring you the most cutting-edge solutions for all your rentals needs.",

  },
  openGraph: {
    title: 'Trend Car Rental',
    description: 'Trend Car Rental is a digital agency that specializes in car rental and transportation. ',
    url: 'https://trendcarrental.netlify.app',
    siteName: 'Trend Car Rental',
    locale: 'en_US',
    type: 'website',
  },



}


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (

    <html lang="en">
      <body>
        <div className="p-3 pt-20 sm:p-10 sm:pt-20 ">
          <Nav />

          {/*  Main content goes here */}
          <main className="w-full ">
            <div className="w-full rounded-tl-md overflow-auto">
              {children}
            </div>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  )
}
