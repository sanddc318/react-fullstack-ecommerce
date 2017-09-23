import React, { Component } from 'react'
import avatar from '../assets/images/user-avatar.png'

class Listings extends Component {
  constructor() {
    super()

    this.loopListings = this.loopListings.bind(this)
  }

  loopListings() {
    const { listings } = this.props

    return listings.map((listing, index) => {
      return (
        <div className="listing-wrapper" key={index}>
          <section className="listing-image">
            <span>{listing.address}</span>
            <img src={listing.image} alt="House" />
          </section>

          <section className="listing-hover-detail">
            <div className="user-details">
              <div className="user-pic">
                <img src={avatar} alt="User avatar" />
              </div>

              <div className="user-info">
                <span className="user-name">Nina Smith</span>
                <span className="post-date">Posted on 09/14/17</span>
              </div>
            </div>

            <div className="listing-hover-info">
              <div className="top-row">
                <span>
                  <i className="fa fa-wrench" aria-hidden="true" />
                  {listing.floorSpace} ft&sup2;
                </span>
                <span>
                  <i className="fa fa-bed" aria-hidden="true" />
                  {listing.furnished ? 'Furnished' : 'Unfurnished'}
                </span>
              </div>

              <div className="bottom-row">
                <span>
                  <i className="fa fa-th-large" aria-hidden="true" />
                  {listing.bedrooms} bedrooms
                </span>
                <a>view more</a>
              </div>
            </div>
          </section>

          <section className="listing-details">
            <span className="price">${listing.price} /month</span>
            <span className="location">
              <i className="fa fa-map-marker" aria-hidden="true" />
              {listing.city}, {listing.state}
            </span>
          </section>
        </div>
      )
    })
  }

  render() {
    return (
      <section id="listings">
        <div className="inside">
          <div className="search-wrapper">
            <input type="text" name="search" placeholder="Enter a city" />

            <div className="results-wrapper">
              <small>390 results found</small>

              <div className="sort-options">
                <select name="sort-by" className="sort-results">
                  <option value="price-asc">Lowest Price</option>
                  <option value="price-desc">Highest Price</option>
                </select>

                <i className="fa fa-list fa-lg" aria-hidden="true" />
                <i className="fa fa-th fa-lg" aria-hidden="true" />
              </div>
            </div>
          </div>

          {this.loopListings()}

          <div id="pagination-wrapper">
            <ul className="pages">
              <li className="nav-li">prev</li>
              <li className="active">1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li className="nav-elipses">...</li>
              <li>30</li>
              <li className="nav-li">next</li>
            </ul>
          </div>
        </div>{' '}
        {/* /.inside */}
      </section>
    )
  }
}

export default Listings
