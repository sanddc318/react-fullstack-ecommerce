import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'
import '../assets/css/App.css'
import listingsData from '../data/listingsData'

import Header from './Header'
import Filter from './Filter'
import Listings from './Listings'
const Landing = () => <h2>Landing</h2>

class App extends Component {
  constructor() {
    super()

    this.state = {
      listingsData
    }

    this.updateFilter = this.updateFilter.bind(this)
  }

  componentDidMount() {
    this.props.fetchUser()
  }

  updateFilter(event) {
    let name = event.target.name
    let value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value

    this.setState(
      {
        [name]: value
      },
      () => {
        console.log(this.state)
      }
    )
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />

          <main id="content-area">
            <Route exact path="/" component={Landing} />
            <Route
              exact
              path="/dashboard"
              render={() => <Filter updateFilter={this.updateFilter} />}
            />
            <Route
              exact
              path="/dashboard"
              render={() => <Listings listings={this.state.listingsData} />}
            />
          </main>
        </div>
      </BrowserRouter>
    )
  }
}

export default connect(null, actions)(App)
