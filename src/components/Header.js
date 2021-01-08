import React from "react"
import Link from "./Link"
import { LogoType } from "./SVG"

const Header = () => {
  return (
    <>
      <header className="sticky top-0 flex flex-col z-50">
        <div className="px-8 flex-grow flex items-center justify-center">
          <Link to="/">
            <LogoType className="h-20 text-yellow" />
          </Link>
        </div>
        <div className="z-50">
          <nav className="flex border-t border-b border-yellow text-yellow px-2 text-2xl text-center font-snell">
            <Link className="flex-grow" to="/">
              Menu
            </Link>
            <Link className="flex-grow" to="/">
              Resources
            </Link>
            <Link className="flex-grow" to="https://wearedefender.wedid.it/">
              Donate
            </Link>
            <Link className="flex-grow" to="/">
              Shop
            </Link>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
