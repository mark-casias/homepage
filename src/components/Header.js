import React from 'react'

import logo from '../assets/images/logo.svg'
import mobileLogo from '../assets/images/mobile_logo.svg'

class Header extends React.Component {
  render() {
    return (
      <section id="header">
        <img className="mobile-logo" src={mobileLogo} alt="" />
        <div className="inner">
          <img
            className="header-logo"
            src={logo}
            alt="pisgah tech tutoring logo"
          />
          <h1>
            <strong>pisgah</strong> tech tutoring
          </h1>
          <p>
            Providing knowledge and guidance for the next <br /> generation of
            western nc technology professionals.
          </p>
          <ul className="actions">
            <li>
              <a href="#how" className="button scrolly">
                learn more
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Header
