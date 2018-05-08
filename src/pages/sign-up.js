import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import PageHeader from '../components/PageHeader'

class SignUp extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    console.log(this.props.data)

    return (
      <div>
        <Helmet>
          <title>sign up | {siteTitle}</title>
        </Helmet>
        <PageHeader
          strong="sign"
          title=" up"
          description="fill out the information below and I will contact you quickly about beginning you programming instruction"
        />
        <section id="mission" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>FAQ</h2>
              </header>
              <p>
                The Pisgah Tech Tutoring mission is to provide valuable
                mentorship to 9-12th grade students in the Transylvania County,
                NC area by teaching the programming fundamentals and modern
                software development skills.
              </p>
              <p>
                We promise to uphold this to all children interested, regardless
                of background of any kind.
              </p>
            </div>
            <div className="col-6">
              <span className="image fit" />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

SignUp.propTypes = {
  route: React.PropTypes.object,
}

export default SignUp

export const pageQuery = graphql`
  query signUp {
    site {
      siteMetadata {
        title
      }
    }
  }
`
