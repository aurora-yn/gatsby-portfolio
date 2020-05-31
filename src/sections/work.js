import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '../components/icons'

const Work = () => {
  return (
    <section id='work'>
        <h3 className='section-title'>
          <FontAwesomeIcon icon={faLaptopCode} /> 
          Work
        </h3>
        <div className='time-flow'>
          <div className='time-bar'></div>
          <div className='time-container'>
            <div className='time-sequence'>
              <div className='time-point'></div>
              <div className='time-desc'>
                <div className='logo'></div>
                <h5 className='title'>Development Volunteer</h5>
                <h5 className='organisation'>Mechanical Engineering, University of Toronto</h5>
                <h5 className='date'>2019.Jun - 2019.Dec</h5>
              </div>
            </div>
            <div className='time-sequence'>
              <div className='time-point'></div>
              <div className='time-desc'>
                <div className='logo'></div>
                <h5 className='title'>Front-end Developer, UX/UI Designer</h5>
                <h5 className='organisation'>Cybersky</h5>
                <h5 className='date'>2014.Jul - 2018.Dec</h5>
              </div>
            </div>
            <div className='time-sequence'>
              <div className='time-point'></div>
              <div className='time-desc'>
                <div className='logo'></div>
                <h5 className='title'>Graphic Designer</h5>
                <h5 className='organisation'>Samsung Fire & Marine Insurance</h5>
                <h5 className='date'>2013.Sep - 2013.Dec</h5>
              </div>
            </div>
            <div className='time-sequence'>
              <div className='time-point'></div>
              <div className='time-desc'>
                <div className='logo'></div>
                <h5 className='title'>Editorial Designer</h5>
                <h5 className='organisation'>AnyDATA Korea</h5>
                <h5 className='date'>2012.Nov - 2013.Jan</h5>
              </div>
            </div>
            <div className='time-sequence'>
              <div className='time-point'></div>
              <div className='time-desc'>
                <div className='logo'></div>
                <h5 className='title'>Graphic Designer</h5>
                <h5 className='organisation'>Samsung Economics Research Institute</h5>
                <h5 className='date'>2012.Jan - 2012.Feb</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Work