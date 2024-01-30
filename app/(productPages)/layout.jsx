
import HeadNav from '@components/HeadNav'
import ProductPageFooter from "@components/ProductPageFooter";

import '@styles/globals.css'

const Layout = ({ children }) => {
  return (       
    <html>
      <HeadNav />
      <main>
        {children}
      </main>
      <ProductPageFooter />
    </html>
    )
}

export default Layout
