import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import Auth from '../../lib/Auth'

class Navbar extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      activeItem: 'home'
      // navbarOpen: false
    }

    // this.handleItemClick = this.handleItemClick.bind(this)
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.logout = this.logout.bind(this)
    this.myProfile = this.myProfile.bind(this)
  }

  toggleNavbar() {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  // handleItemClick(e, { name }){
  //   this.setState({ activeItem: name })
  //   if(name === 'home')this.props.history.push('/')
  //   if(name === 'My Profile')this.props.history.push(`/users/${Auth.getUserID()}`)
  // }

  myProfile(){
    this.props.history.push(`/users/${Auth.getUserID()}`)
  }

  logout() {
    Auth.removeToken()
    this.props.history.push('/')
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ navbarOpen: false })
    }
  }
  render() {
    return (
      <nav className="navbar is-black">
        <div className="container">
          <div className="navbar-brand">

            <Link className="navbar-item" to="/">
              Home
            </Link>

            <Link className="navbar-item" to="/bars">
              Bars
            </Link>

            <Link className="navbar-item" to="/crawls/new">
              Add a crawl
            </Link>

            <a
              className={`navbar-burger ${this.state.navbarOpen ? 'is-active' : ''}`}
              onClick={this.toggleNavbar}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={`navbar-menu ${this.state.navbarOpen ? 'is-active' : ''}`}>
            <div className="navbar-end">
              {!Auth.isAuthenticated() && <Link className="navbar-item" to="/register">Register</Link>}
              {!Auth.isAuthenticated() && <Link className="navbar-item" to="/login">Login</Link>}
              {Auth.isAuthenticated() && <a className="navbar-item" onClick={this.logout}>Logout</a>}
              {Auth.isAuthenticated() && <Link to={'/users/' + Auth.getUserID()} className="navbar-item">My Profile</Link>}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)
