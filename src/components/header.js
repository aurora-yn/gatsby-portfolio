import { Link,  graphql, useStaticQuery } from 'gatsby'
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
          <a href='https://www.linkedin.com/in/auroray' target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href='https://github.com/aurora-yn' target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
          <a href='https://www.instagram.com/yeongyun.nk' target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>
      <div>
        {/* <code>
          <div>&#123;</div>
          <div className='pl-2'>"working": [</div>
          <div className='pl-4'>"Designer", "Developer",</div>
          <div className='pl-2'>]</div>
          <div className='pl-2'>"studied": [</div>
          <div className='pl-4'>"Visual Communication Design",</div>
          <div className='pl-4'>"Computer Applications Development",</div>
          <div className='pl-2'>]</div>
          <div className='pl-2'>"core skills": &#123;</div>
          <div className='pl-4'>"software": [ "HTML/CSS", "React", "Node.js", "python", "ASP.NET MVC", "SQL", "firebase" ],</div>
          <div className='pl-4'>"Prototyping": [ "proto.io", "InVision", "sketch", "JustInMind" ],</div>
          <div className='pl-4'>"Graphic": [ "Adobe CC" ],</div>
          <div className='pl-2'>&#125;</div>
          <div>&#125;</div>
        </code> */}
      </div>
    </section>
  )
}


export default Header
