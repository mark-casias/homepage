import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import PageHeader from '../components/PageHeader'

class Faq extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const faqImg = this.props.data.faq.childImageSharp

    return (
      <div>
        <Helmet>
          <title>faq | {siteTitle}</title>
        </Helmet>
        <PageHeader strong="frequently" title=" asked questions" />
        <section id="mission" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>FAQ</h2>
              </header>
              <p>
                Have questions? Here are some questions you may have about the
                programs.
              </p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <Img sizes={faqImg.sizes} />
              </span>
            </div>
            <div className="col-12">
              <h3>What do I need to provide for the course?</h3>
            </div>
            <div className="col-12">
              <h3>What is the structure of each lesson?</h3>
            </div>
            <div className="col-12">
              <h3>Is there homework?</h3>
            </div>
            <div className="col-12">
              <h3>Can't I already learn programming for free online?</h3>
            </div>
            <div className="col-12">
              <h3>What if I can't figure out an assignment at home?</h3>
            </div>
            <div className="col-12">
              <h3>Can you still help me learn after I finish a program?</h3>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

Faq.propTypes = {
  route: React.PropTypes.object,
}

export default Faq

export const pageQuery = graphql`
  query FaqQuery {
    site {
      siteMetadata {
        title
      }
    }

    faq: file(relativePath: { eq: "faq.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 800) {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }
  }
`
