
import '@styles/footer.css'
import Link from 'next/link'

function Footer() {
  return (
    <div className='footer'>
        <footer>
            <div className="footer-info">
            </div>            
            <div className="footer-container-background">               
                <div className="footer-container">                  
                    <div className="footer-section-wrapper">
                        <div className="footer-section text-left">
                            <p className="footer-category font-extrabold">RESOURCES</p>
                            <nav className="footer-list">                          
                            <li className="foot-list">
                                <Link href="" className="footer-link">Community Database</Link>
                            </li>
                            <li className="foot-list">
                                <Link href="" className="footer-link">Manuals Download</Link>
                            </li>
                            <li className="foot-list">
                                <Link href="" className="footer-link">Shipping and Returns</Link>
                            </li>
                            <li className="foot-list">
                                <Link href="" className="footer-link">Forum</Link>
                            </li>
                            <li className="foot-list">
                                <Link href="/about" className="footer-link">About</Link>
                            </li>
                            <li className="foot-list">
                                <Link href="/" className="footer-link">Login</Link>
                            </li>
                            <li className="foot-list">
                                <Link href="/" className="footer-link">Home</Link>
                            </li>
                            </nav>
                        </div>
                        <div className="footer-section text-left">
                            <p className="footer-category font-extrabold">COMMUNITY</p>
                            <nav className="footer-list">                          
                            <li className="foot-list">
                                <Link href="https://www.youtube.com/channel/UC1dHlk59qcgRElbM6BhK-lA" className="footer-link" target='_blank'>YouTube</Link>
                            </li>
                            <li className="foot-list">
                                <Link href="https://www.instagram.com/madstudi.o/" className="footer-link" target='_blank'>Instagram</Link>
                            </li>
                            <li className="foot-list">
                                <Link href="" className="footer-link">Events</Link>
                            </li>
                            <li className="foot-list">
                                <Link href="" className="footer-link">Press</Link>
                            </li>
                            </nav>
                        </div>
                        <div className="footer-section text-left">
                            <p className="footer-category font-extrabold">CONTACT</p>
                            <nav className="footer-list">                          
                            <li className="foot-list">
                                <Link href="madstudio.vr@gmail.com" className="footer-link target='_blank">madstudio.vr@gmail.com</Link>
                            </li>
                            {/* <li className="foot-list">
                                <Link href="" className="footer-link">Link</Link>
                            </li> */}
                            </nav>
                        </div>        
                    </div>                  
                </div>               
            </div>
            <div className="footer-bottom">
            <div className="footer-bottom-container">
                <p className="footer-copyright">&copy;Copyright Metaphysical Abstract Design</p>                  
            </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
