import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Details" />
    <h1>Hi there</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>

    </div>
    <Link to="/">Go to start page</Link>
  </Layout>
)

export default IndexPage
