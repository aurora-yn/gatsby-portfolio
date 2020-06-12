import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import GatsbyImage from 'gatsby-image'


import { faLaptopCode } from '../components/icons'
import SectionTitle from '../components/sectionTitle'

const Work = () => {
  const data = useStaticQuery(graphql`
    {
      allWorksJson {
        edges {
          node {
            role
            company
            date
            image {
              childImageSharp {
                fluid(maxWidth: 96) {
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
    <section id='work'>
      <SectionTitle icon={faLaptopCode} title='Work' />

      <div className='time-flow'>
        <div className='time-bar'></div>
        <div className='time-container'>
          {data.allWorksJson.edges.map(({ node }, index) => (
            <div className='time-sequence' key={index}>
              <div className='time-point'></div>
              <div className='time-desc'>
                <div className='logo wide-logo'>
                  <GatsbyImage 
                    sizes={{
                      ...node.image.childImageSharp.fluid,
                    }}
                  />
                </div>
                <h5 className='title'>{node.role}</h5>
                <h5 className='organisation'>{node.company}</h5>
                <h5 className='date'>{node.date}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work