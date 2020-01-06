import React from 'react'



const Location = () => {
    return (
        <div className="socialmedia_mainWrapper">
            <div className="socialmedia_wrapper">
                <h2 className="socialmedia_header">FOLLOW US @BARaBAR </h2>
            </div>


            <div  className="iframe_wrapper">
                <div>
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpg%2Fbarabarmezebar%2Fposts%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                        width="100%"
                        height="500px"
                        allowTransparency="true"
                        allow="encrypted-media"
                        id="facebook"></iframe>
                </div>

                <div>
                    <iframe src="https://www.instagram.com/p/BxVnwYPAqFO/embed"
                        width="100%"
                        height="500px"
                        frameBorder="1"
                        scrolling="no"
                        allowtransparency="true"></iframe>
                </div>

                <div className="location_wrapper">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.156283040763!2d20.674020615419227!3d41.17475837928429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350e71a096cdc45%3A0x2b87fb3c4d94811b!2sBarabar%20Mezebar!5e0!3m2!1sen!2sde!4v1578179857761!5m2!1sen!2sde"
                        width="100%"
                        height="500px"
                        frameBorder="1"
                        allowFullScreen=""></iframe>


                </div>

            </div>


        </div>
    )
}

export default Location
