import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"

import Nav from './nav'
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
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div className='container'>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, {` Youngyun Namkung `}
          {/* <a href="mailto:youngyun.namkung@gmail.com">email here</a> */}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
