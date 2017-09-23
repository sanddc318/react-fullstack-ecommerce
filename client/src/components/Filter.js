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
          <select
            name="city"
            className="dropdown-filter"
            onChange={this.props.updateFilter}
          >
            <option>Neighborhood</option>
            <option>Omar</option>
            <option>Hebron</option>
            <option>Vandiver</option>
            <option>Savage</option>
          </select>

          <select
            name="hometype"
            className="dropdown-filter"
            onChange={this.props.updateFilter}
          >
            <option>Type of home</option>
            <option>Apartment</option>
            <option>Duplex</option>
            <option>House</option>
            <option>Ranch</option>
            <option>Condominium</option>
          </select>

          <select
            name="bedrooms"
            className="dropdown-filter"
            onChange={this.props.updateFilter}
          >
            <option>Number of bedrooms</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>

          {/* SLIDERS */}
          <div className="sliders price">
            <span className="title">Price</span>
            <input
              type="text"
              name="min_price"
              className="min-price"
              placeholder="$200"
              onChange={this.props.updateFilter}
            />

            <input
              type="text"
              name="max_price"
              className="max-price"
              placeholder="$3000"
              onChange={this.props.updateFilter}
            />
          </div>

          <div className="sliders floor-space">
            <span className="title">Floor Space</span>
            <input
              type="text"
              name="min_floor_space"
              className="min-floor-space"
              placeholder="295 ft"
              onChange={this.props.updateFilter}
            />

            <input
              type="text"
              name="max_floor_space"
              className="max-floor-space"
              placeholder="490 ft"
              onChange={this.props.updateFilter}
            />
          </div>

          <div className="sliders radius">
            <span className="title">Radius</span>
            <input
              type="text"
              name="min_radius"
              className="min-radius"
              placeholder="1 km"
              onChange={this.props.updateFilter}
            />

            <input
              type="text"
              name="max_radius"
              className="max-radius"
              placeholder="50 km"
              onChange={this.props.updateFilter}
            />
          </div>

          {/* CHECKBOXES */}
          <section className="amenities">
            <span className="title">Amenities</span>
            <div className="amen-checkbox">
              <span>Elevator</span>
              <input
                type="checkbox"
                name="elevator"
                id="checkbox1"
                onChange={this.props.updateFilter}
              />
              <label htmlFor="checkbox1" />
            </div>

            <div className="amen-checkbox">
              <span>Fireplace</span>
              <input
                type="checkbox"
                name="fireplace"
                id="checkbox2"
                onChange={this.props.updateFilter}
              />
              <label htmlFor="checkbox2" />
            </div>

            <div className="amen-checkbox">
              <span>Swimming pool</span>
              <input
                type="checkbox"
                name="swimmingpool"
                id="checkbox3"
                onChange={this.props.updateFilter}
              />
              <label htmlFor="checkbox3" />
            </div>

            <div className="amen-checkbox">
              <span>Gym</span>
              <input
                type="checkbox"
                name="gym"
                id="checkbox4"
                onChange={this.props.updateFilter}
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
