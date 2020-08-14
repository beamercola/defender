import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ParallaxProvider } from "react-scroll-parallax"
import Footer from "./Footer"
import Header from "./Header"
import Explore from "../components/Explore"
import Newsletter from "../components/Newsletter"
import "./layout.css"

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
    <ParallaxProvider>
      <Header />
      <main className="">
        {children}
        <Explore />
        <Newsletter />
        <Footer />
      </main>
    </ParallaxProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
