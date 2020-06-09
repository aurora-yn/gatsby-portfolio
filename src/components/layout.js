import React from "react"

import Nav from './nav'
import NavLeft from './navLeft'

const Layout = ({ children }) => {
  
  return (
    <>
      <div className='nav-container'>
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


export default Layout
