import React, { Component } from 'react'
import Header from './Header'
import Filter from './Filter'
import Listings from './Listings'
import '../assets/css/App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <main id="content-area">
          <Filter />
          <Listings />
        </main>
      </div>
    )
  }
}

export default App
