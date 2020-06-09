import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Illustration from '../sections/illustration'
import KoreanArt from '../sections/koreanArt'

const IndexPage = () => (
  <Layout>
    <SEO title="Details" />
    <Illustration />
    <KoreanArt />
  </Layout>
)

export default IndexPage
