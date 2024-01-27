
import Head from 'next/head'
import HeadNav from '@components/HeadNav'
import Footer from '@components/Footer'

import '@styles/globals.css'

export const metadata = {
    title: 'MAD',
    description: '',
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <Head>
        <link rel="icon" href='/favicon.ico' />
      </Head>

      <body>
        <HeadNav />
          <main className='app'>            
            {children}             
          </main> 
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout;
