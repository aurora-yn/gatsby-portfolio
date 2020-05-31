import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '../components/icons'

const Education = () => {
  return (
    <section id='education'>
        <h3 className='section-title'>
          <FontAwesomeIcon icon={faGraduationCap} /> 
          Education
        </h3>
        <div className='time-flow'>
          <div className='time-bar'></div>
          <div className='time-container'>
            <div className='time-sequence'>
              <div className='time-point'></div>
              <div className='time-desc'>
                <div className='logo'></div>
                <h5 className='title'>Computer Applications Development</h5>
                <h5 className='organisation'>Conestoga College</h5>
                <h5 className='date'>2019.Sep - Present</h5>
              </div>
            </div>
            <div className='time-sequence'>
              <div className='time-point'></div>
              <div className='time-desc'>
                <div className='logo'></div>
                <h5 className='title'>Visual Communication Design</h5>
                <h5 className='organisation'>Myongji University</h5>
                <h5 className='date'>2009.Mar - 2014.Feb</h5>
              </div>
            </div>
            <div className='time-sequence'>
              <div className='time-point'></div>
              <div className='time-desc'>
                <div className='logo'></div>
                <h5 className='title'>Sanbon High School</h5>
                <h5 className='organisation'>High School</h5>
                <h5 className='date'>2006.Mar - 2009.Feb</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Education