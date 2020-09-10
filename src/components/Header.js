import { Link } from "gatsby"
import React from "react"
import Logo from "../images/logo.svg"

const Header = () => {
  return (
    <>
      <header className="">
        <div className="px-8 mx-auto">
          <img
            className="mx-auto h-32 object-contain"
            src={Logo}
            alt="Defender"
          />
        </div>
      </header>
      <div className="sticky top-0 z-50">
        <nav className="flex border-t bg-white border-b border-yellow text-yellow px-2 text-lg text-center font-snell">
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
        </nav>
      </div>
    </>
  )
}

export default Header
