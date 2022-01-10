/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Video from "./video"

import "./style.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <Video />
      <div className="container-mio">
        <main>{children}</main>
        <footer className="footer">
          <a
            href="https://instagram.com/florenciafranc0"
            target="_blank"
            className=""
          >
            INSTAGRAM
          </a>
          <a href="https://pin.it/4n7BQ6p" target="_blank" className="">
            PINTEREST
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
