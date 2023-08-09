import '@styles/globals.css'
import HeadNav from '@components/HeadNav'
import Footer from '@components/Footer'

export const metadata = {
    title: 'MAD',
    description: '',
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>

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
