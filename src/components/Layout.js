import React from "react"
import Link from "./Link"
import Footer from "./Footer"
import Header from "./Header"
import Explore from "../components/Explore"
import Newsletter from "../components/Newsletter"
import RecentPosts from "../components/RecentPosts"

const Layout = ({ children, cover }) => {
  return (
    <>
      <Header />
      <main className="bg-white border-b -mt-32">
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
