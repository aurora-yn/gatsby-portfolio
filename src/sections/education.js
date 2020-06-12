import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import GatsbyImage from 'gatsby-image'

import { faGraduationCap } from '../components/icons'
import SectionTitle from '../components/sectionTitle'

const Education = () => {
  const data = useStaticQuery(graphql`
    {
      allEducationsJson {
        edges {
          node {
            major
            organisation
            date
            image {
              childImageSharp {
                fluid(maxWidth: 32) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section id='education'>
      <SectionTitle icon={faGraduationCap} title='Education' />

      <div className='time-flow'>
        <div className='time-bar'></div>
        <div className='time-container'>
          {data.allEducationsJson.edges.map(({ node }, index) => (
            <div className='time-sequence' key={index}>
              <div className='time-point'></div>
              <div className='time-desc'>
                <div className='logo'>
                  <GatsbyImage 
                    sizes={{
                      ...node.image.childImageSharp.fluid,
                      aspectRatio: 1 / 1,
                    }}
                  />
                </div>
                <h5 className='title'>{node.major}</h5>
                <h5 className='organisation'>{node.organisation}</h5>
                <h5 className='date'>{node.date}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education