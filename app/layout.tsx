import './globals.css'
import client from '@/lib/contentful'
import type { Metadata } from 'next'
import Footer from '@/components/shared/Footer'
import Nav from '@/components/shared/Nav'
import { type } from 'os'


export const metadata: Metadata = {
  title: 'Coformatique',
  description: "Welcome to Coformatique, where innovation meets creativity to bring you the most cutting-edge solutions for all your technological needs",
  metadataBase: new URL('https://cofo.netlify.app'),

  twitter: {
    card: 'summary_large_image',
    title: 'Coformatique',
    description: "Welcome to Coformatique, where innovation meets creativity to bring you the most cutting-edge solutions for all your technological needs",
    
  },
  openGraph: {
    title: 'Coformatique',
    description: 'Coformatique is a digital agency that specializes in web development, mobile development, cloud computing, and more. ',
    url: 'https://cofo.netlify.app',
    siteName: 'Coformatique',
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
