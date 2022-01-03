import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "animate.css"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Form from "../components/form"
import Slider from "../components/slider"
import About from "../components/about"

const IndexPage = () => (
  <Layout>
    <Form />
    <Slider />
    <About />
  </Layout>
)

export default IndexPage
