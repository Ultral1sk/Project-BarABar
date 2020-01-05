import React from 'react'
import Fade from 'react-reveal/Fade'

const Footer = () => {
    return (
        <footer className="bck_black">
            <Fade delay={500}>
                <div className="font-righteous footer_logo_venue"> Barabar  </div>
                <div className="footer_copyright">
                    Barabar 2020. All Copyrights reserved
                </div>
            </Fade>
        </footer>
    )
}

export default Footer
