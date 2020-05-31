import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagic } from '../components/icons'

const Projects = () => {
  const {data} = useStaticQuery(graphql`
    {
      data: allProjectsJson {
        edges {
          node {
            id
            title
            description
            tags
            link
            github
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
        {data.edges.map(({ node }, index) => (
          <div key={node.id} className='project'>
            <h5 className='project-title'>{node.title}</h5>
            <p className='project-description'>{node.description}</p>
            <p className='project-tags'>{node.tags}</p>
            <p className='project-link'>{node.link}</p>
            <p className='project-github'>{node.github}</p>
          </div>
        ) )}
      </div>
    </section>
  )
}

export default Projects