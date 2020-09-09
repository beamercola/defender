import { Link } from "gatsby"
import React from "react"
import Logo from "../images/logo.svg"

const Header = () => {
  return (
    <header>
      <div className="px-8 mx-auto bg-red-600">
        <img
          className="mx-auto h-32 object-contain"
          src={Logo}
          alt="Defender"
        />
      </div>
      <div className="flex border-t border-b border-black px-2 text-lg text-center">
        <Link className="flex-grow" to="/">
          Menu
        </Link>
        <Link className="flex-grow" to="/">
          Resources
        </Link>
        <Link className="flex-grow" to="/">
          Donate
        </Link>
        <Link className="flex-grow" to="/">
          Shop
        </Link>
      </div>
    </header>
  )
}

export default Header
