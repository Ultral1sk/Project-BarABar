import React from 'react'
import Slider from "react-slick";
import slide_one from '../../resources/images/kafic.jpg'

const Carousel = () => {
    


    return (
        <div
            className="carrousel_wrapper"
            style={{

                height: `${window.innerHeight}px`,
                overflow: 'hidden'
            }}
        >

            <Slider>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            backgroundImage: `url(${slide_one})`,
                            height: `${window.innerHeight}px`,
                        }}
                    ></div>
                </div>
            
               
            </Slider>

        </div>
    )
}

export default Carousel
