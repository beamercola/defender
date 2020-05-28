import { Link } from "gatsby"
import React from "react"
import Logo from "../images/logo.svg"

const Header = () => (
  <header className="fixed top-0 inset-x-0 xl:px-24">
    <div className="container border-b-2 border-black py-4">
      <h1 className="text-center text-6xl">
        <Link to="/">
          <img className="h-32 mx-auto" src={Logo} />
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
