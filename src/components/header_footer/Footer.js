import React from 'react'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom'
import barabarFooterLogo from '../../resources/images/logos/original.png'

const Footer = () => {
    return (
        <footer className="">
            <Fade delay={500}>
                <div className="footer_copyright">
                    <div>
                        <div className="font-righteous footer_logo_venue"> Contact  </div>
                        <p>barabar@gmail.com</p>
                        <p>Tel : 123-324-567</p>
                        <p>Barabar 2020. All Copyrights reserved</p>
                    </div>
                    <div className="footerLogo_logo">

                        <Link to='/' className="header_logo_title">
                            <img src={barabarFooterLogo} alt="logo" height="120px" />
                        </Link>
                    </div>

                    <div>
                        <div className="font-righteous footer_logo_venue"> Opening Hours  </div>
                        <p>Monday - Thursday 8.00am to 00.00am</p>
                        <p>Friday - 8.00am to 01.00am</p>
                        <p>Saturday - 8.00am to 01.00am</p>
                        <p>Sunday - 8.00am to 00.00am</p>

                    </div>
                </div>
            </Fade>
        </footer>
    )
}

export default Footer
