import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagic } from '../components/icons'

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            id
            title
            description
            tags
            link
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
    <section id='projects'>
      <h3 className='section-title'>
        <FontAwesomeIcon icon={faMagic} /> 
        Projects
      </h3>
      <div className='projects-container'>
        {data.allProjectsJson.edges.map(({ node }, index) => (
          <div key={node.id} className='project'>
            <GatsbyImage 
              sizes={{
                ...node.image.childImageSharp.fluid,
                aspectRatio: 1 / 1,
              }}
            />
            <h5 className='project-title'>{node.title}</h5>
            <p className='project-description'>{node.description}</p>
            <p className='project-tags'>{node.tags}</p>
            <p className='project-link'>{node.link}</p>
          </div>
        ) )}
      </div>
    </section>
  )
}

export default Projects