import React from "react"
import { ParallaxProvider } from "react-scroll-parallax"
import Footer from "./Footer"
import Header from "./Header"
import Explore from "../components/Explore"
import Newsletter from "../components/Newsletter"
import RecentPosts from "../components/RecentPosts"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <ParallaxProvider>
      <Header />
      <main className="overflow-x-hidden">
        {children}
        <RecentPosts />
        <Explore />
        <Newsletter />
        <Footer />
      </main>
    </ParallaxProvider>
  )
}

export default Layout
