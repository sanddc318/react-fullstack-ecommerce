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
            <a>Create Ads</a>
            <a>About Us</a>
            <a>Login</a>
            <a href="/auth/google" className="register-button">
              Register
            </a>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
