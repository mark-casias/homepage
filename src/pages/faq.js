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
              <p>
                While you need ZERO programming experience, we do have{' '}
                <Link to="/resources">a list of resources</Link> you should
                review to give yourself the best opportunity to succeed.
              </p>
              <p>
                On more practical terms, you should only bring a laptop and
                yourself. We provide notebooks and pens. If you do not have a
                laptop, let us know ASAP so we can make arrangements!
              </p>
            </div>
            <div className="col-12">
              <h3>What is the structure of each lesson?</h3>
              <p>
                Each lesson is part lecture, part build-a-long. Sometimes we
                incorporate third-party resources to reinforce an idea.
                Questions are always welcome.
              </p>
            </div>
            <div className="col-12">
              <h3>Is there homework?</h3>
              <p>
                We don't like to call it homework. Our hope is that your
                curiosity and imagination are peaked by the lecture and you
                can't wait to keep working and learning at home. But yes, there
                will be small projects that we hope you build in between
                lessons. Even if you are struggling, you are learning.
              </p>
            </div>
            <div className="col-12">
              <h3>Can't I already learn programming for free online?</h3>
              <p>
                Absolutely! This is a very common route, and one we highly
                recommend. Most people, however, at some point in their studies
                need another person to ask questions and help them get to the
                next level. We have tons of free resources we recommend for
                study during, after, and between classes.
              </p>
            </div>
            <div className="col-12">
              <h3>What if I can't figure out an assignment at home?</h3>
              <p>
                You're not alone! Even as a professional developer, we spend
                hours 'googling' problems we can't seem to figure out. Keep at
                it, take notes about what you don't understand, and bring your
                problems to the group. This emulates the real-world problem
                solving of many professional software development teams.
              </p>
            </div>
            <div className="col-12">
              <h3>Can you still help me learn after I finish a program?</h3>
              <p>
                Of course! We consider you an 'alumni' and part of the team once
                you have taken a class, and will never give you the cold
                shoulder. We are always available for questions, although we do
                ask if the need is great or frequent enough, that you sign up
                for one-on-one mentoring is possible.
              </p>
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
