import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '../components/icons'

const Skills = () => {
  return (
    <section id='skills'>
      <h3 className='section-title'>
      <FontAwesomeIcon icon={faCode} /> 
        Skills
      </h3>
      <div>
        <code>
          <div>&#123;</div>
          <div className='pl-2'>"working": [</div>
          <div className='pl-4'>"Designer", "Developer",</div>
          <div className='pl-2'>]</div>
          <div className='pl-2'>"studied": [</div>
          <div className='pl-4'>"Visual Communication Design",</div>
          <div className='pl-4'>"Computer Applications Development",</div>
          <div className='pl-2'>]</div>
          <div className='pl-2'>'skills': &#123;</div>
          <div className='pl-4'>"Front-end": &#123; "HTML", "CSS", "SASS", "React", "Gatsby", "Framework7" &#125;,</div>
          <div className='pl-4'>"Back-end": &#123; "Node.js", "express.js", "Mongoose"  &#125;,</div>
          <div className='pl-4'>"python": &#123; "requests", "Beautiful Soup", "flask" &#125;,</div>
          <div className='pl-4'>"Database": &#123; "MS SQL", "MySQL", "MongoDB" &#125;,</div>
          <div className='pl-4'>"Web Development": &#123; "ASP.NET MVC" &#125;,</div>
          <div className='pl-4'>"App Development": &#123; "firebase" &#125;,</div>
          <div className='pl-4'>"Prototyping": &#123; "proto.io", "InVision", "sketch", "JustInMind" &#125;,</div>
          <div className='pl-4'>"Graphic": &#123; "Adobe CC" &#125;,</div>
          <div className='pl-2'>&#125;</div>
          <div>&#125;</div>
        </code>
      </div>
    </section>
  )
}

export default Skills