import React, { Component } from 'react'
import house1 from '../assets/images/house-1.png'
import house2 from '../assets/images/house-2.png'
import house3 from '../assets/images/house-3.png'
import house4 from '../assets/images/house-4.png'
import avatar from '../assets/images/user-avatar.png'

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

          {/* LISTING 1 */}
          <div className="listing-wrapper">
            <section className="listing-image">
              <span>302 Mercer Drive</span>
              <img src={house1} alt="House" />
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
              <span className="price">$900 /month</span>
              <span className="location">
                <i className="fa fa-map-marker" aria-hidden="true" />
                Doublegate
              </span>
            </section>
          </div>

          {/* LISTING 2 */}
          <div className="listing-wrapper">
            <section className="listing-image">
              <span>302 Mercer Drive</span>
              <img src={house2} alt="House" />
            </section>

            <section className="listing-hover-detail">
              <div className="user-details">
                <div className="user-pic">
                  <img src={avatar} alt="User avatar" />
                </div>

                <div className="user-info">
                  <span className="user-name">Nina Smith</span>
                  <span>Posted on </span>
                  <span className="post-date">09/14/17</span>
                </div>
              </div>

              <div className="listing-hover-info">
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
              <span className="price">$900 /month</span>
              <span className="location">
                <i className="fa fa-map-marker fa-lg" aria-hidden="true" />
                Doublegate
              </span>
            </section>
          </div>

          {/* LISTING 3 */}
          <div className="listing-wrapper">
            <section className="listing-image">
              <span>302 Mercer Drive</span>
              <img src={house3} alt="House" />
            </section>

            <section className="listing-hover-detail">
              <div className="user-details">
                <div className="user-pic">
                  <img src={avatar} alt="User avatar" />
                </div>

                <div className="user-info">
                  <span className="user-name">Nina Smith</span>
                  <span>Posted on </span>
                  <span className="post-date">09/14/17</span>
                </div>
              </div>

              <div className="listing-hover-info">
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
              <span className="price">$900 /month</span>
              <span className="location">
                <i className="fa fa-map-marker" aria-hidden="true" />
                Doublegate
              </span>
            </section>
          </div>

          {/* LISTING 4 */}
          <div className="listing-wrapper">
            <section className="listing-image">
              <span>302 Mercer Drive</span>
              <img src={house4} alt="House" />
            </section>

            <section className="listing-hover-detail">
              <div className="user-details">
                <div className="user-pic">
                  <img src={avatar} alt="User avatar" />
                </div>

                <div className="user-info">
                  <span className="user-name">Nina Smith</span>
                  <span>Posted on </span>
                  <span className="post-date">09/14/17</span>
                </div>
              </div>

              <div className="listing-hover-info">
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
              <span className="price">$900 /month</span>
              <span className="location">
                <i className="fa fa-map-marker" aria-hidden="true" />
                Doublegate
              </span>
            </section>
          </div>
        </div>

        <div className="pagination-wrapper">
          <ul className="pagination-nums">
            <li>Prev</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>Next</li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Listings
