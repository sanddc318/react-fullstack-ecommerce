import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

class Header extends Component {
  loginStatus() {
    switch (this.props.auth) {
      case null:
        return
      case false:
        return (
          <a href="/auth/google" className="register-button">
            Google Sign-In
          </a>
        )
      default:
        return (
          <a href="/api/logout" className="register-button">
            Logout
          </a>
        )
    }
  }

  render() {
    return (
      <header>
        <div className="nav-wrapper">
          <div className="logo">
            <a href="/">nHouse</a>
          </div>

          <nav>
            {this.props.auth ? <a href="">Create Ads</a> : ''}

            <a href="/dashboard">Search</a>

            <small>{this.props.auth ? this.props.auth.name : ''}</small>

            {this.props.auth ? (
              <img
                src={this.props.auth.avatar}
                alt="Avatar"
                className="avatar"
              />
            ) : (
              ''
            )}

            {this.loginStatus()}
          </nav>
        </div>
      </header>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header)
