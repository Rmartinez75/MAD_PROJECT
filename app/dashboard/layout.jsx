import HeadNav from '/components/HeadNav'
// import ProductPageFooter from "/components/ProductPageFooter";
import Footer from '@/components/Footer';

import '../../styles/globals.css'


const Layout = ({ children }) => {
  return (       
    <>
      <HeadNav />
      <main>
        {children}
      </main>
      <Footer />
      {/* <ProductPageFooter /> */}
    </>
    )
}

export default Layout