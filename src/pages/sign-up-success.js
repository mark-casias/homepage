import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'

class SignUpSuccess extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <div>
        <Helmet>
          <title>sign up success | {siteTitle}</title>
        </Helmet>
        <PageHeader strong="success!" title="" description="" />
        <section id="mission" className="main style1">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Thanks!</h2>
              </header>
              <p>
                We've gotten your info and will be contacting you shortly! Be on
                the lookout for an email from us.
              </p>
              <p>
                In the meantime, here's some important info to know and look at:
              </p>
              <p>
                <ul>
                  <li>
                    <a href="/ptt-permission.pdf">Permission Slip</a>
                  </li>
                  <li>
                    <a href="https://github.com/pisgah-tech-tutoring/schedule-and-curriculum">
                      Schedule & Curriculum
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/pisgah-tech-tutoring/prepwork">
                      Prep Work
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/pisgah-tech-tutoring/resources">
                      Resources
                    </a>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

SignUpSuccess.propTypes = {
  route: React.PropTypes.object,
}

export default SignUpSuccess

export const pageQuery = graphql`
  query signUpSuccess {
    site {
      siteMetadata {
        title
      }
    }
  }
`
