import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import AboutMe from "../sections/aboutMe"
import Work from "../sections/work"
import Education from "../sections/education"
import Skills from "../sections/skills"
import Projects from "../sections/projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Youngyun" />
    <Header />
    <AboutMe />
    <div className='grid grid-work-edu-col'>
      <Work />
      <Education />
    </div>
    <Skills />
    <Projects />
    <div>
      <button>See other works</button>
      <button>Contact to Youngyun</button>
    </div>
  </Layout>
)

export default IndexPage
