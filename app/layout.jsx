
import Head from 'next/head'
import Script from 'next/script'


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

        <Script strategy='lazyOnload' src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}></Script> 

        <Script id='ga-script' strategy='lazyOnload'> 
          {`
            window.dataLayer = window.dataLayer || []; 
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date()); 
            gtag('config', '${process.env.GOOGLE_ANALYTICS}'); 
          `}
        </Script>

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
