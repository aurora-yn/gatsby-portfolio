import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '../components/icons'
import Image from "../components/image"

const AboutMe = () => {
  return (
    <section id='about-me'>
      <h3 className='section-title'><FontAwesomeIcon icon={faUser} /> About Me</h3>
      <div className='grid grid-col-5'>
        <div id='about-me-img' className='col-span-2'>
          <Image />
        </div>
        <div id='about-me-desc' className='col-span-3'>
          <p>Hi there,</p>
          <p>
            I am Youngyun currently living in Waterloo, Ontario, Canada.
          </p>
          <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit architecto libero vero hic saepe repellendus rem tempore itaque doloribus inventore explicabo eveniet ut quo tenetur, exercitationem, sequi soluta quas quidem.
          Neque debitis obcaecati deleniti numquam perferendis, reprehenderit aliquam. Soluta modi illum aliquid quae nemo aliquam! Ipsum incidunt veniam facere minima, eligendi doloremque nesciunt nostrum doloribus, natus qui, consectetur ullam asperiores.
          Nostrum minus mollitia minima a reprehenderit odio, officia exercitationem voluptatibus reiciendis aspernatur pariatur consequatur omnis illo debitis delectus, similique laborum! Similique provident quaerat omnis quam quo, maiores in incidunt cupiditate.
          Amet adipisci rerum saepe est a quaerat esse voluptate necessitatibus consequuntur dolore repellendus omnis doloremque in assumenda ullam ad error impedit blanditiis harum quibusdam natus, molestiae sapiente dolores tenetur. Dolor?
          Vero fuga error consectetur officia sunt nam dolores, dolorem voluptatibus facere blanditiis atque commodi delectus quis totam quas ducimus, nobis, hic et nostrum cum! Nihil excepturi quo recusandae voluptas quae!
          Voluptate obcaecati porro aut minus quidem fuga culpa doloremque veritatis repudiandae sunt. Aspernatur, placeat in vitae, beatae officiis enim eaque consequatur est magni iste nostrum. Error iusto nisi asperiores aspernatur.
          </p>
          <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit architecto libero vero hic saepe repellendus rem tempore itaque doloribus inventore explicabo eveniet ut quo tenetur, exercitationem, sequi soluta quas quidem.
          Neque debitis obcaecati deleniti numquam perferendis, reprehenderit aliquam. Soluta modi illum aliquid quae nemo aliquam! Ipsum incidunt veniam facere minima, eligendi doloremque nesciunt nostrum doloribus, natus qui, consectetur ullam asperiores.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe