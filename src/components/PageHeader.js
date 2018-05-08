import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg'
import mobileLogo from '../assets/images/mobile_logo.svg'

class PageHeader extends React.Component {
  render() {
    return (
      <section id="header">
        <div className="inner">
          <h1>
            <strong>frequently</strong> asked questions
          </h1>
          <p>
            Providing knowledge and guidance for the next <br /> generation of
            western nc technology professionals.
          </p>
        </div>
      </section>
    )
  }
}

export default PageHeader
