import '@styles/globals.css'
import { Children } from 'react';

export const metadata = {
    title: 'MAD',
    description: ''
}

const RootLayout = ({children}) => {
  return (
    <html Lang='en'>
        <body>
            <main className='app'>
                {children}    
            </main>   
        </body>
    </html>
  )
}

export default RootLayout;
