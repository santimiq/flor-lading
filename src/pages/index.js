import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "animate.css"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Form from "../components/form"
import Slider from "../components/slider"
import About from "../components/about"

const IndexPage = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <link rel="canonical" href="https://florenciafranco.com" />

      {/* <!-- Primary Meta Tags --> */}
      <title>FLORENCIA FRANCO - Timeless portraiture</title>
      <meta name="title" content="FLORENCIA FRANCO - Timeless portraiture" />
      <meta
        name="description"
        content="Acapulco photographer, family photos cdmx Mexico City, portrait photography Mexico - Florencia franco 2022."
      />
      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://florenciafranco.com/" />
      <meta
        property="og:title"
        content="FLORENCIA FRANCO - Timeless portraiture"
      />
      <meta
        property="og:description"
        content="This website is so awesome that I really don't think you can handle how much awesome that is happening here."
      />
      <meta
        property="og:image"
        content="https://florenciafranco.com/facebookimage.jpg"
      />
      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://florenciafranco.com/" />
      <meta
        property="twitter:title"
        content="FLORENCIA FRANCO - Timeless portraiture"
      />
      <meta
        property="twitter:description"
        content="This website is so awesome that I really don't think you can handle how much awesome that is happening here."
      />
      <meta
        property="twitter:image"
        content="https://florenciafranco.com/twitterimage.jpg"
      />
    </Helmet>
    <Layout>
      <Form />
      <Slider />
      <About />
    </Layout>
  </div>
)

export default IndexPage
