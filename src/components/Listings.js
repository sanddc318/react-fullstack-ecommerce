import React, { Component } from 'react'
import { House1 } from '../assets/images/house-1.png'
import { House2 } from '../assets/images/house-2.png'
import { House3 } from '../assets/images/house-3.png'
import { House4 } from '../assets/images/house-4.png'

class Listings extends Component {
  constructor() {
    super()

    this.state = {}
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

                <i className="fa fa-list" aria-hidden="true" />
                <i className="fa fa-th" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="listings-wrapper">
            <div className="listing">
              <section className="listing-img">
                <span>302 Mercer Drive</span>
                <img src={House1} alt="House" />
              </section>

              <section className="listing-hover-detail">
                <div className="user-details">
                  <div className="user-pic">
                    <img src="" alt="" />
                  </div>

                  <div className="user-info">
                    <span className="user-name">Nina Smith</span>
                    <span>Posted on </span>
                    <span className="post-date">09/14/17</span>
                  </div>
                </div>

                <div className="listing-hover-details">
                  <div className="top-row">
                    <span>
                      <i className="fa fa-wrench" aria-hidden="true" />
                      288 m&sup2;
                    </span>
                    <span>
                      <i className="fa fa-bed" aria-hidden="true" />
                      Unfurnished
                    </span>
                  </div>

                  <div className="bottom-row">
                    <span>
                      <i className="fa fa-th-large" aria-hidden="true" />7
                      bedrooms
                    </span>
                    <a href="#">view more</a>
                  </div>
                </div>
              </section>

              <section className="listing-details">
                <span>$900 /month</span>
                <span>
                  <i className="fa fa-map-marker" aria-hidden="true" />
                  Doublegate
                </span>
              </section>
            </div>
          </div>

          <div className="pagination-wrapper">
            <ul class="pagination-nums">
              <li>Prev</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>Next</li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default Listings
