import React from 'react'
import { Link } from 'gatsby'
import ThemeToggler from './themeToggler'


export default (props) => {
  return (
    <nav >
      <Link to='/details'>Details</Link>
      <Link to='/details'>Contact</Link>
      {/* <ThemeToggler className='nav-toggler' /> */}
    </nav>
  )
}