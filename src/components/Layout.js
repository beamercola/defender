import React, { useState } from "react"
import Link from "./Link"
import Footer from "./Footer"
import Header from "./Header"
import Explore from "../components/Explore"
import Newsletter from "../components/Newsletter"
import RecentPosts from "../components/RecentPosts"
import Menu from "../components/Menu"

const Layout = ({ children, cover, animatedHeader }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggle = () => setMenuOpen(!menuOpen)

  return (
    <>
      <Header toggleMenu={toggle} animated={animatedHeader} />
      <main className="bg-white border-b">
        {cover}
        {children}
        <RecentPosts />
        <div className="">
          <Link className="block p-6 leading-none text-yellow text-center text-2xl font-black font-bureau-wide uppercase hover:bg-black hover:text-white bg-green">
            Resources
          </Link>
          <Link className="block p-6 leading-none text-yellow text-center text-2xl font-black font-bureau-wide uppercase hover:bg-black hover:text-white bg-blue">
            Contact
          </Link>
          <Link className="block p-6 leading-none text-yellow text-center text-2xl font-black font-bureau-wide uppercase hover:bg-black hover:text-white bg-orange">
            Donate
          </Link>
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
