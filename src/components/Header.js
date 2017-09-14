import React, { Component } from 'react'

class Header extends Component {
  constructor() {
    super()

    this.state = {}
  }

  render() {
    return (
      <header>
        <div className="nav-wrapper">
          <div className="logo">Logo</div>

          <nav>
            <a href="#">Create Ads</a>
            <a href="#">About Us</a>
            <a href="#">Login</a>
            <a href="#" className="register-button">
              Register
            </a>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
