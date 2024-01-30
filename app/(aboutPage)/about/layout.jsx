
import HeadNav from '@components/HeadNav'
import Footer from "@components/Footer";

import '@styles/globals.css'

const Layout = ({ children }) => {
  return (       
    <html>
      <HeadNav />
      <main>
        {children}
      </main>
      <Footer />
    </html>
    )
}

export default Layout
