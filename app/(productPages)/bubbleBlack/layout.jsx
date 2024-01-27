
import Head from 'next/head'
import HeadNav from '@components/HeadNav'
import Footer from '@components/Footer'

import '@styles/globals.css'
import ProductPageFooter from '@components/ProductPageFooter'

export const metadata = {
    title: 'MAD',
    description: '',
}

const ProductPageLayout = ({children}) => {
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
        <ProductPageFooter />
      </body>
    </html>
  )
}

export default ProductPageLayout;
