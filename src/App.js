import React, { Component } from 'react'

import './App.scss'

import Header from './components/header_footer/Header'
import Featured from './components/featured/index'
import VenueInfo from './components/venueInfo/VenueInfo'
import Hightlights from './components/highlights/Highlights'
import Pricing from './components/pricing/index'

export class App extends Component {
  render() {
    return (
      <div>
   
        <Header />
        <Featured />
        <VenueInfo />
        <Hightlights />
        <Pricing />
      </div>
    )
  }
}

export default App
