import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { faUser } from '../components/icons'
import SectionTitle from '../components/sectionTitle'


const AboutMe = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { id: { eq: "about-me" } }) {
        html
      }
    }
  `)

  return (
    <section id='about-me'>
      <SectionTitle icon={faUser} title='About me' />
      <div className='grid grid-col-5'>
        <div 
          id='about-me-desc' className='col-span-3'
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
        <div id='about-me-img' className='col-span-2'>
          {/* photo or illustration slides */}
        </div>
      </div>
    </section>
  )
}

export default AboutMe