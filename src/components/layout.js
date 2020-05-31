import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"

import Nav from './nav'
import NavLeft from './navLeft'
// import "./layout.css"  

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className='nav-container'>
        <Link className='nav-logo' to='/'>Y</Link>
        <Nav />
      </div>
      <NavLeft />
      <main>
        <div className='container'>
          {children}
          <footer>
            <p>Gatsby, Licensed under MIT</p>
            <p>© {new Date().getFullYear()}, {` Youngyun Namkung `}</p>
            
          </footer>
        </div>
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
