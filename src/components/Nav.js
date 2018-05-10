import React from 'react'
import Link from 'gatsby-link'

import ResponsiveMenu from 'react-responsive-navbar'
import { TiThMenu, TiTimes } from 'react-icons/lib/ti'
import mobileLogo from '../assets/images/mobile_logo.svg'

class Nav extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }
  }
  render() {
    return (
      <div>
        <Link to="/">
          <img src={mobileLogo} className="mobile-logo" alt="" />
        </Link>

        <ResponsiveMenu
          menuOpenButton={<TiThMenu />}
          menuCloseButton={<TiTimes />}
          changeMenuOn="736px"
          largeMenuClassName="desktop-nav"
          smallMenuClassName="mobile-nav"
          menu={
            <ul className="nav-links-container">
              <li className="nav-links logo-container">
                <Link to="/">
                  <img src={mobileLogo} className="logo" alt="" />
                </Link>
              </li>
              <li className="nav-links">
                <Link to="/#mission">mission</Link>
              </li>
              <li className="nav-links">
                <Link to="/#who-and-why">who and why</Link>
              </li>
              <li className="nav-links">
                <Link to="/#how">programs</Link>
              </li>
              <li className="nav-links">
                <Link to="/faq">faq</Link>
              </li>
            </ul>
          }
        />
      </div>
    )
  }
}

export default Nav
