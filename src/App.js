import React, { Component } from 'react'

import './App.scss'

import Header from './components/header_footer/Header'
import Featured from './components/featured/index'
import VenueInfo from './components/venueInfo/VenueInfo'
import Hightlights from './components/highlights/Highlights'
import Pricing from './components/pricing/index'
import Location from './components/location/index'
import Footer from './components/header_footer/Footer'

export class App extends Component {
  render() {
    return (
      <div>
   
        <Header />
        <Featured />
        <Hightlights />
        <VenueInfo />
        <Pricing />
        <Location />
        <Footer />
      </div>
    )
  }
}

export default App
