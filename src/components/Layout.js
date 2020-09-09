import React from "react"
import { ParallaxProvider } from "react-scroll-parallax"
import Footer from "./Footer"
import Header from "./Header"
import Explore from "../components/Explore"
import Newsletter from "../components/Newsletter"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <ParallaxProvider>
      <Header />
      <main className="overflow-x-hidden">
        {children}
        <Explore />
        <Newsletter />
        <Footer />
      </main>
    </ParallaxProvider>
  )
}

export default Layout
