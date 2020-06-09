import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import GatsbyImage from 'gatsby-image'
import ThemeToggler from './themeToggler'


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

  return (
    <>
      <div className='nav-logo'>
        <Link to='/'>
          <GatsbyImage {...data.logo.childImageSharp} />
        </Link>
      </div>
      <nav >
        <Link to='/details'>Details</Link>
        <Link to='/details'>Contact</Link>
        <ThemeToggler />
      </nav>
    </>
  )
}