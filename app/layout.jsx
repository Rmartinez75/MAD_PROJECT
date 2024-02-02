
import Head from 'next/head'
import ScrollToTopButton from '@components/ScrollToTopButton'

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
    </html>
  )
}

export default RootLayout
