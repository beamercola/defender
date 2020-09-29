import React from "react"
import { Link } from "gatsby"
import Footer from "./Footer"
import Header from "./Header"
import Explore from "../components/Explore"
import Newsletter from "../components/Newsletter"
import RecentPosts from "../components/RecentPosts"
import "./layout.css"

const Layout = ({ children, cover }) => {
  return (
    <>
      <Header />
      <main
        className="overflow-x-hidden bg-white border-b"
        style={{ marginBottom: "50vh" }}
      >
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
    </>
  )
}

export default Layout
