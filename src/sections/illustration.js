import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"

import { faPalette } from '../components/icons'
import SectionTitle from '../components/sectionTitle'

const Illustration = () => {
  const data = useStaticQuery(graphql`
    {
      allIllustrationsJson {
        edges {
          node {
            title
            description
            date
            image {
              childImageSharp {
                fluid(maxWidth: 320) {
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
    <section id='illustration'>
      <SectionTitle icon={faPalette} title='Illustration' />
      <div className='illustrations-container'>
        {data.allIllustrationsJson.edges.map(({ node }, index) => (
          <div key={index} className='illustration'>
            <GatsbyImage 
              sizes={{
                ...node.image.childImageSharp.fluid
              }}
            />
            <h5 className='project-title'>{node.title}</h5>
            <p className='project-description'>{node.description}</p>
            <p className='project-tags'>{node.date}</p>
          </div>
        ) )}
      </div>
    </section>
  )
}

export default Illustration