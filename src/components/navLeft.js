import React from 'react'
import { Link } from 'gatsby'
import ThemeToggler from './themeToggler'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLaptopCode, faGraduationCap, faCode, faMagic } from './icons'

export default (props) => {
  return (
    <section className='left-nav'>
      <Link to='/' className='nav-logo'>Y</Link>
      <div className='each-section'>
        <Link to='#about-me'><FontAwesomeIcon icon={faUser} /></Link>
        <Link to='#work'><FontAwesomeIcon icon={faLaptopCode} /></Link>
        <Link to='#education'><FontAwesomeIcon icon={faGraduationCap} /></Link>
        <Link to='#skills'><FontAwesomeIcon icon={faCode} /></Link>
        <Link to='#projects'><FontAwesomeIcon icon={faMagic} /></Link>
      </div>
      <ThemeToggler />
    </section>
  )
}