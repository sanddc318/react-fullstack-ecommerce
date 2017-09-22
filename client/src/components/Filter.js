import React, { Component } from 'react'

class Filter extends Component {
  constructor() {
    super()

    this.state = {}
  }

  render() {
    return (
      <section id="filter">
        <div className="inside">
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
          <div className="sliders price">
            <span className="title">Price</span>
            <input
              type="text"
              name="min-price"
              className="min-price"
              placeholder="$200"
            />

            <input
              type="text"
              name="max-price"
              className="max-price"
              placeholder="$3000"
            />
          </div>

          <div className="sliders floor-space">
            <span className="title">Floor Space</span>
            <input
              type="text"
              name="min-floor-space"
              className="min-floor-space"
              placeholder="295 ft"
            />

            <input
              type="text"
              name="max-floor-space"
              className="max-floor-space"
              placeholder="490 ft"
            />
          </div>

          <div className="sliders radius">
            <span className="title">Radius</span>
            <input
              type="text"
              name="min-radius"
              className="min-radius"
              placeholder="1 km"
            />

            <input
              type="text"
              name="max-radius"
              className="max-radius"
              placeholder="50 km"
            />
          </div>

          {/* CHECKBOXES */}
          <section className="amenities">
            <span className="title">Amenities</span>
            <div className="amen-checkbox">
              <span>Elevator</span>
              <input
                type="checkbox"
                name="amenities"
                id="checkbox1"
                value="elevator"
                defaultChecked
              />
              <label htmlFor="checkbox1" />
            </div>

            <div className="amen-checkbox">
              <span>Fireplace</span>
              <input
                type="checkbox"
                name="amenities"
                id="checkbox2"
                value="fireplace"
                defaultChecked
              />
              <label htmlFor="checkbox2" />
            </div>

            <div className="amen-checkbox">
              <span>Swimming pool</span>
              <input
                type="checkbox"
                name="amenities"
                id="checkbox3"
                value="swimmingpool"
              />
              <label htmlFor="checkbox3" />
            </div>

            <div className="amen-checkbox">
              <span>Gym</span>
              <input
                type="checkbox"
                name="amenities"
                id="checkbox4"
                value="gym"
                defaultChecked
              />
              <label htmlFor="checkbox4" />
            </div>
          </section>
        </div>
      </section>
    )
  }
}

export default Filter
