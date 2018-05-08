import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg'
import mobileLogo from '../assets/images/mobile_logo.svg'

class PageHeader extends React.Component {
  render() {
    return (
      <section id="header">
        <div className="inner">
          <img
            className="header-logo"
            src={logo}
            alt="pisgah tech tutoring logo"
          />
          <h1>
            <strong>{this.props.strong}</strong> {this.props.title}
          </h1>
          <p>{this.props.description}</p>
        </div>
      </section>
    )
  }
}

export default PageHeader
