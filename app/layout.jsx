
import Head from 'next/head'
import { GoogleAnalytics } from '@next/third-parties/google'


import '@styles/globals.css'

export const metadata = {
    title: 'MAD',
    description: '',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href='/favicon.ico' />
      </Head>
      <body>
        <main>
          {children}       
        </main>
      </body>
      <GoogleAnalytics gaId="G-91W7PDV5W8" />
    </html>
  )
}

export default RootLayout
