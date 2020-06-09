import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette } from '../components/icons'

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
      <h3 className='section-title'>
        <FontAwesomeIcon icon={faPalette} /> 
        Research on Korean Art
      </h3>
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