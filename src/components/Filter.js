import React, { Component } from 'react'

class Filter extends Component {
  constructor() {
    super()

    this.state = {}
  }

  render() {
    return (
      <section className="filter">
        {/* DROPDOWNS */}
        <h4>Filter</h4>
        <select name="neighborhood" className="dropdown-filter">
          <option>Neighborhood</option>
        </select>

        <select name="housetype" className="dropdown-filter">
          <option>Type of house</option>
        </select>

        <select name="bedrooms" className="dropdown-filter">
          <option>Number of bedrooms</option>
        </select>

        {/* SLIDERS */}
        <div class="sliders price">
          <span class="title">Price</span>
          <input type="text" name="min-price" className="min-price" />
          <input type="text" name="max-price" className="max-price" />
        </div>

        <div class="sliders floor-space">
          <span class="title">Floor Space</span>
          <input
            type="text"
            name="min-floor-space"
            className="min-floor-space"
          />
          <input
            type="text"
            name="max-floor-space"
            className="max-floor-space"
          />
        </div>

        <div class="sliders radius">
          <span class="title">Radius</span>
          <input type="text" name="min-radius" className="min-radius" />
          <input type="text" name="max-radius" className="max-radius" />
        </div>

        {/* CHECKBOXES */}
        <div class="amenities">
          <h5>Amenities</h5>
          <label for="amenities">
            <span>Elevator</span>
            <input type="checkbox" name="amenities" value="elevator" />
          </label>

          <label for="amenities">
            <span>Fireplace</span>
            <input type="checkbox" name="amenities" value="fireplace" />
          </label>

          <label for="amenities">
            <span>Swimming pool</span>
            <input type="checkbox" name="amenities" value="swimmingpool" />
          </label>

          <label for="amenities">
            <span>Gym</span>
            <input type="checkbox" name="amenities" value="gym" />
          </label>
        </div>
      </section>
    )
  }
}

export default Filter
