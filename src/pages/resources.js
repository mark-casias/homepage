import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import PageHeader from '../components/PageHeader'

class Resources extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const faqImg = this.props.data.faq.childImageSharp

    return (
      <div>
        <Helmet>
          <title>resources | {siteTitle}</title>
        </Helmet>
        <PageHeader strong="resources" title="" />
        <section id="mission" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <span className="image fit">
                <Img sizes={faqImg.sizes} />
              </span>
            </div>
            <div className="col-6">
              <header className="major">
                <h2>Resources</h2>
              </header>
              <p>
                Looking for resources for preparing for your journey? Stuck on a
                subject and looking for inspiration? Here's some of my favorite
                FREE resources for learning programming.
              </p>
              <h3>
                <a href="#">Click here for an up to date list of resources.</a>
              </h3>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

Resources.propTypes = {
  route: React.PropTypes.object,
}

export default Resources

export const pageQuery = graphql`
  query ResourcesQuery {
    site {
      siteMetadata {
        title
      }
    }

    faq: file(relativePath: { eq: "resources.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 800) {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }
  }
`
