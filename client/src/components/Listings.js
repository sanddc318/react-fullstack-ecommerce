import React, { Component } from 'react'
import avatar from '../assets/images/user-avatar.png'

class Listings extends Component {
  constructor() {
    super()

    this.loopListings = this.loopListings.bind(this)
  }

  loopListings() {
    const { listings } = this.props

    if (listings === undefined || listings.length === 0) {
      return (
        <div className="no-results">
          Sorry, you're query did not return any results.
        </div>
      )
    }

    return listings.map((listing, index) => {
      if (this.props.globalState.view === 'box') {
        return (
          <div className="listing-wrapper box" key={index}>
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
                    {listing.floorspace} ft&sup2;
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
      }

      return (
        <div className="listing-wrapper row" key={index}>
          <section className="user-details">
            <div className="user-pic">
              <img src={avatar} alt="User avatar" />
            </div>

            <div className="user-info">
              <span className="user-name">Nina Smith</span>
              <span className="post-date">Posted on 09/14/17</span>
            </div>
          </section>

          <section className="listing-details">
            <span className="address">{listing.address}</span>
            <span className="price">${listing.price} /month</span>
          </section>

          <section className="view-more">
            <a href="">view more</a>
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
            <input
              type="text"
              name="searchTerm"
              placeholder="Enter a city"
              onChange={this.props.updateFilter}
            />

            <div className="results-wrapper">
              <small>
                Showing {this.props.listings.length}
                {this.props.listings.length === 1 ? ' home' : ' homes'}
              </small>

              <div className="sort-options">
                <select
                  name="sortBy"
                  className="sort-results"
                  onChange={this.props.updateFilter}
                >
                  <option value="price-asc">Lowest Price</option>
                  <option value="price-desc">Highest Price</option>
                </select>

                <i
                  className={`fa fa-list fa-lg ${this.props.globalState.view ===
                  'row'
                    ? 'active'
                    : ''}`}
                  aria-hidden="true"
                  onClick={this.props.changeView.bind(null, 'row')}
                />
                <i
                  className={`fa fa-th fa-lg ${this.props.globalState.view ===
                  'box'
                    ? 'active'
                    : ''}`}
                  aria-hidden="true"
                  onClick={this.props.changeView.bind(null, 'box')}
                />
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
