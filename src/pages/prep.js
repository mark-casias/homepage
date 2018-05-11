import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import PageHeader from '../components/PageHeader'

class Prep extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const faqImg = this.props.data.faq.childImageSharp

    return (
      <div>
        <Helmet>
          <title>prep | {siteTitle}</title>
        </Helmet>
        <PageHeader strong="prep" title=" work" />
        <section id="mission" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>Prep</h2>
              </header>
              <p>
                We highly recommend preparing yourself for the world of
                programming by at least familiarizing yourself with some of the
                material that we will be coming. The courses are for everyone,
                including total beginngers, but in our experience, the more prep
                work done before, the far easier the learning curve.
              </p>
              <h3>
                <a href="#">
                  Click here for an up to date list of prep work
                  recommendations.
                </a>
              </h3>
            </div>
            <div className="col-6">
              <span className="image fit">
                <Img sizes={faqImg.sizes} />
              </span>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

Prep.propTypes = {
  route: React.PropTypes.object,
}

export default Prep

export const pageQuery = graphql`
  query PrepQuery {
    site {
      siteMetadata {
        title
      }
    }

    faq: file(relativePath: { eq: "prep.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 800) {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }
  }
`
