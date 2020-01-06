import React, { Component } from 'react'
import MyButton from '../utility/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {
    constructor(props) {
        super(props)

        this.state = {
            entertainment: [`Food`, `Bands & DJ's`, 'Cocktails'],
            type: ['Snacks', 'Live Music', 'Drinks'],

            description: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
                'magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
                'commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu'

            ],

            linkTo: ['http://sales/b', 'http://sales/m', 'http://sales/s'],
            delay: [500, 0, 500]
            // most of the times here we put the links to where the user can make the actuall purchase
        }
    }

    // this function is the same as normal function with a retrun (<div></div>)
    showBoxes = () => (

        this.state.entertainment.map((box, i) => (

            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>{this.state.type[i]}</span>
                            <span>{this.state.entertainment[i]}</span>
                        </div>
                        <div className="pricing_description">
                            <span>{this.state.description[i]}</span>
                        </div>

                        <div className="pricing_buttons">
                            <MyButton
                                text="More"
                                bck="#ffa800"
                                color="#ffffff"
                                link={this.state.linkTo[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>

        ))

    )

    render() {


        return (

            <div className="center_wrapper pricing_section">
                <div>
                    <h2>Live Entertainment</h2>
                </div>

         
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
         

            </div>

        )
    }
}

export default Pricing
