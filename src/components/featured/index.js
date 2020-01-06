import React from 'react'
import Carousel from './Carousel'
import Countdown from './Countdown'

const Featured = () => {
    return (
        <div style={{ position: 'relative' }}>

            <Carousel />

            <div className="artist_name">
                <span className="bar_type">Snack Bar</span>
                <div className="wrapper">
                    <div>
                        <span className="title_name">barAbar</span>
                    </div>
                 
                 
                    <div>
                        <span className="idea">An idea of 2 friends</span>
                    </div>
                    <span className="establish">Established 2005</span>
                   
                </div>
            </div>

            {/* <Countdown /> */}
        </div>
    )
}

export default Featured
