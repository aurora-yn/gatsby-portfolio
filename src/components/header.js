import { Link } from "gatsby"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from './icons'

const Header = () => (
  <section className='header'>
    <div>
      <h1>Youngyun</h1>
    </div>
    <div>
      {/* <p>Designer, Developer, </p> */}
      <code>
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
      </code>
      <div className='social-media'>
        <Link to='/'><FontAwesomeIcon icon={faLinkedin} /></Link>
        <Link to='/'><FontAwesomeIcon icon={faGithub} /></Link>
        <Link to='/'><FontAwesomeIcon icon={faInstagram} /></Link>
      </div>
    </div>
  </section>
)


export default Header
