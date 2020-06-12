import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SectionTitle = ({icon, title}) => {
  return (
    <h3 className='section-title'>
      <FontAwesomeIcon icon={icon} /> {title}
    </h3>
  )
}

export default SectionTitle