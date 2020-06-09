import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import GatsbyImage from 'gatsby-image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faUser, faLaptopCode, faGraduationCap, faCode, faMagic,
  faPalette
} from './icons'

export default (props) => {
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "y.png" }) {
        childImageSharp {
          fluid(maxHeight: 41) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);
  
  const visible = () => {
    const leftNav = document.querySelector('.left-nav')
    if (window.pageYOffset > 100) {
      leftNav.classList.remove('invisible')
    } else {
      leftNav.classList.add('invisible')
    }
  }
  window.addEventListener("scroll", visible)

  return (
    <section className='left-nav invisible'>
      <Link to='/' className='nav-logo'>
        <GatsbyImage {...data.logo.childImageSharp} />
      </Link>
      <div className='each-section'>
        {/* index page */}
        <Link to='#about-me'><FontAwesomeIcon icon={faUser} /></Link>
        <Link to='#work'><FontAwesomeIcon icon={faLaptopCode} /></Link>
        <Link to='#education'><FontAwesomeIcon icon={faGraduationCap} /></Link>
        <Link to='#skills'><FontAwesomeIcon icon={faCode} /></Link>
        <Link to='#projects'><FontAwesomeIcon icon={faMagic} /></Link>
        {/* details page */}
        <Link to='#illustration'><FontAwesomeIcon icon={faPalette} /></Link>
      </div>
      <div></div>
    </section>
  )
}