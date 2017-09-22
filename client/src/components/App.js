import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'
import '../assets/css/App.css'

import Header from './Header'
import Filter from './Filter'
import Listings from './Listings'
const Landing = () => <h2>Landing</h2>

class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />

          <main id="content-area">
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Filter} />
            <Route exact path="/dashboard" component={Listings} />
          </main>
        </div>
      </BrowserRouter>
    )
  }
}

export default connect(null, actions)(App)
