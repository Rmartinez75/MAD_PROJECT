import '@styles/globals.css'
import Head from 'next/head'
import HeadNav from '@components/HeadNav'
import Footer from '@components/Footer'

export const metadata = {
    title: 'MAD',
    description: '',
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>

      <Head>
        <link rel="icon" href='/favicon.png' />
      </Head>

      <body>

        <main className='app'>
          <HeadNav />
          {children} 
          <Footer />  
        </main> 

      </body>

    </html>
  )
}

export default RootLayout;
