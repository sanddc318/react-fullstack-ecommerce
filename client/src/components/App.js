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
      listingsData,
      filterData: listingsData,
      formData: [],
      min_price: 0,
      max_price: 1000000,
      min_floorspace: 0,
      max_floorspace: 60000,
      city: 'all',
      homeType: 'all',
      bedrooms: 0
    }

    this.updateFilter = this.updateFilter.bind(this)
    this.filterData = this.filterData.bind(this)
    this.populateSelects = this.populateSelects.bind(this)
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
        {
          /* TODO: fire on submit */
        }
        this.filterData()
      }
    )
  }

  filterData() {
    let query = this.state.listingsData.filter(item => {
      return (
        item.price >= this.state.min_price &&
        item.price <= this.state.max_price &&
        item.floorspace >= this.state.min_floorspace &&
        item.floorspace <= this.state.max_floorspace &&
        item.bedrooms >= this.state.bedrooms
      )
    })

    if (this.state.city !== 'all') {
      query = query.filter(item => {
        return item.city === this.state.city
      })
    }

    if (this.state.homeType !== 'all') {
      query = query.filter(item => {
        return item.homeType === this.state.homeType
      })
    }

    this.setState({
      filterData: query
    })
  }

  populateSelects() {
    let cities = this.state.listingsData.map(item => {
      return item.city
    })
    cities = new Set(cities)
    cities = [...cities]

    let homeTypes = this.state.listingsData.map(item => {
      return item.homeType
    })
    homeTypes = new Set(homeTypes)
    homeTypes = [...homeTypes]

    let bedrooms = this.state.listingsData.map(item => {
      return item.bedrooms
    })
    bedrooms = new Set(bedrooms)
    bedrooms = [...bedrooms]

    this.setState({
      formData: {
        cities,
        homeTypes,
        bedrooms
      }
    })
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
              render={() => (
                <Filter
                  globalState={this.state}
                  updateFilter={this.updateFilter}
                  populateSelects={this.populateSelects}
                />
              )}
            />
            <Route
              exact
              path="/dashboard"
              render={() => <Listings listings={this.state.filterData} />}
            />
          </main>
        </div>
      </BrowserRouter>
    )
  }
}

export default connect(null, actions)(App)
