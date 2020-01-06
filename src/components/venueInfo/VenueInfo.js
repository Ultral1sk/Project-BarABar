import React, { Component } from 'react'
import Zoom from 'react-reveal/Zoom';


import icon_djLogo from '../../resources/images/logos/djLogo.png'
import icon_rockLogo from '../../resources/images/logos/rockLogo.png'


class VenueInfo extends Component {
    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper">
                    <div className="vn_wrapper">

                        <Zoom duration={500}>
                            <div className="vn_item">
                                <div className="vn_outer">
                                    <div className="vn_inner">
                                        <div className="vn_icon_square "></div>
                                        <div className="vn_djicon">
                                            <img src={icon_djLogo} width="100px" height="100px"/>
                                        </div>
                                        <div className="vn_title">
                                            Event date & Time
                                    </div>
                                        <div className="vn_desc">
                                            7 August 2017 @10.00pm
                                    </div>
                                    </div>
                                </div>
                            </div>

                        </Zoom>

                        <Zoom duration={500} delay={500}>
                            <div className="vn_item">
                                <div className="vn_outer">
                                    <div className="vn_inner">
                                        <div className="vn_icon_square "></div>
                                        <div className="vn_rockicon">
                                            <img src={icon_rockLogo} width="80px"/>
                                        </div>
                                        <div className="vn_title">
                                            Event location
                                    </div>
                                        <div className="vn_desc">
                                            Struga Gjuro Salaj 15
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </Zoom>


                    </div>
                </div>
            </div>
        )
    }
}

export default VenueInfo
