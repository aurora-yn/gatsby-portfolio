import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"

import { faPalette } from '../components/icons'
import SectionTitle from '../components/sectionTitle'

const KoreanArt = () => {
  const data = useStaticQuery(graphql`
    {
      allKoreanArtsJson {
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
    <section id='koreanArt'>
      <SectionTitle icon={faPalette} title='Research on Korean Art' />
      <div className='illustrations-container'>
        {data.allKoreanArtsJson.edges.map(({ node }, index) => (
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

export default KoreanArt