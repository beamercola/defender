import React, { useState } from "react"
import Link from "./Link"
import Footer from "./Footer"
import Header from "./Header"
import Explore from "../components/Explore"
import Newsletter from "../components/Newsletter"
import RecentPosts from "../components/RecentPosts"
import Menu from "../components/Menu"

const Layout = ({ children, animatedHeader }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggle = () => setMenuOpen(!menuOpen)

  return (
    <>
      <Header toggleMenu={toggle} animated={animatedHeader} />
      <main className="bg-white border-b">
        {children}
        <RecentPosts />
        <div className="border-t">
          <a
            className="block p-6 leading-none text-yellow text-center text-2xl font-black font-bureau-wide uppercase hover:bg-black hover:text-white bg-green"
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
            Contact
          </a>
          <a
            className="block p-6 leading-none text-yellow text-center text-2xl font-black font-bureau-wide uppercase hover:bg-black hover:text-white bg-orange"
            href="https://wearedefender.wedid.it"
            target="_blank"
            rel="noreferrer"
          >
            Donate
          </a>
        </div>
        <Explore />
        <Newsletter />
      </main>
      <Footer />
      <Menu toggle={toggle} open={menuOpen} />
    </>
  )
}

export default Layout
