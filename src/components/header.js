import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import GatsbyImage from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from './icons'

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      illust: file(relativePath: { eq: "y-illust.png" }) {
        childImageSharp {
          fluid(maxHeight: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <section className='header'>
      <div className='header-illust'>
        <GatsbyImage {...data.illust.childImageSharp} />
      </div>
      <div className='header-desc'>
        <h1>youngyun namkung</h1>
        <code>
          <div>= [ Developer, Designer, Love yoga and cooking ... ]</div>
        </code>
        <div className='social-media'>
          <a href='https://www.linkedin.com/in/auroray' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href='https://github.com/aurora-yn' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href='https://www.instagram.com/yeongyun.nk' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </section>
  )
}


export default Header
