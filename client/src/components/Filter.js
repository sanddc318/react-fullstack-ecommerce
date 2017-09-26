import React, { Component } from 'react'

class Filter extends Component {
  constructor() {
    super()

    this.cities = this.cities.bind(this)
    this.homeTypes = this.homeTypes.bind(this)
    this.bedrooms = this.bedrooms.bind(this)
  }

  componentDidMount() {
    this.props.populateSelects()
  }

  cities() {
    let { cities } = this.props.globalState.formData

    if (cities !== undefined) {
      return cities.map((item, index) => {
        return (
          <option value={item} key={index}>
            {item}
          </option>
        )
      })
    }
  }

  homeTypes() {
    let { homeTypes } = this.props.globalState.formData

    if (homeTypes !== undefined) {
      return homeTypes.map((item, index) => {
        return (
          <option value={item} key={index}>
            {item}
          </option>
        )
      })
    }
  }

  bedrooms() {
    let { bedrooms } = this.props.globalState.formData

    if (bedrooms !== undefined) {
      return bedrooms.map((item, index) => {
        return (
          <option value={item} key={index}>
            {item}+
          </option>
        )
      })
    }
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
            <option value="all">City</option>
            {this.cities()}
          </select>

          <select
            name="homeType"
            className="dropdown-filter"
            onChange={this.props.updateFilter}
          >
            <option value="all">Type of home</option>
            {this.homeTypes()}
          </select>

          <select
            name="bedrooms"
            className="dropdown-filter"
            onChange={this.props.updateFilter}
          >
            <option value="0">Number of bedrooms</option>
            {this.bedrooms()}
          </select>

          {/* SLIDERS */}
          <div className="sliders price">
            <span className="title">
              Price <small>$</small>
            </span>
            <input
              type="text"
              name="min_price"
              className="min-price"
              placeholder="200"
              onChange={this.props.updateFilter}
            />
            <input
              type="text"
              name="max_price"
              className="max-price"
              placeholder="3000"
              onChange={this.props.updateFilter}
            />
          </div>

          <div className="sliders floor-space">
            <span className="title">
              Floor Space <small>ft</small>
            </span>
            <input
              type="text"
              name="min_floorspace"
              className="min-floorspace"
              placeholder="295"
              onChange={this.props.updateFilter}
            />
            <input
              type="text"
              name="max_floorspace"
              className="max-floorspace"
              placeholder="490"
              onChange={this.props.updateFilter}
            />
          </div>

          <div className="sliders radius">
            <span className="title">
              Radius <small>km</small>
            </span>
            <input
              type="text"
              name="min_radius"
              className="min-radius"
              placeholder="1"
              onChange={this.props.updateFilter}
            />
            <input
              type="text"
              name="max_radius"
              className="max-radius"
              placeholder="50"
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
