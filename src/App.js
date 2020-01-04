import React, { Component } from 'react'
import './resources/styles.css'
import './App.scss'

import Header from './components/header_footer/Header'
import Featured from './components/featured/index'

export class App extends Component {
  render() {
    return (
      <div>
   
        <Header />
        <Featured />
      </div>
    )
  }
}

export default App
