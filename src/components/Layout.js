import React, { useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import Newsletter from "../components/Newsletter"
import RecentPosts from "../components/RecentPosts"
import Menu from "../components/Menu"
import ScrollToTop from "./ScrollToTop"
// import Explore from "../components/Explore"
// import Link from "../components/Link"

const Layout = ({ children, animatedHeader, includeRecent = true }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggle = () => setMenuOpen(!menuOpen)

  return (
    <>
      <Header toggleMenu={toggle} animated={animatedHeader} />
      <main className="bg-white border-b">
        {children}
        {includeRecent && <RecentPosts />}
        <div className="border-t">
          <a
            className="block p-6 leading-none text-yellow text-center text-2xl font-black font-bureau-wide uppercase hover:bg-black hover:text-white  bg-red"
            href="https://instagram.com/wearedefender"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            className="block p-6 leading-none text-yellow text-center text-2xl font-black font-bureau-wide uppercase hover:bg-black hover:text-white bg-blue"
            href="mailto:rise@wearedefender.com"
            target="_blank"
            rel="noreferrer"
          >
            Email
          </a>
          <a
            className="block p-6 leading-none text-yellow text-center text-2xl font-black font-bureau-wide uppercase hover:bg-black hover:text-white bg-orange"
            href="https://give.communityin.org/theadachiproject"
            target="_blank"
            rel="noreferrer"
          >
            Donate
          </a>
        </div>
        {/* <Explore /> */}
        <Newsletter />
      </main>
      <Footer />
      <Menu toggle={toggle} open={menuOpen} />
      <ScrollToTop />
    </>
  )
}

export default Layout
