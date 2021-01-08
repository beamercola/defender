import React from "react"
import Link from "./Link"

export default ({ toggleMenu }) => (
  <header className="sticky top-0 z-50 h-40">
    <div className="p-4 flex-grow flex items-center justify-center duration-1000 transition-all h-32">
      <Link className="h-full" to="/">
        <img className="h-full w-auto mx-auto" src="/logotype.svg" />
      </Link>
    </div>
    <div className="z-50">
      <nav className="flex border-t border-b border-yellow text-yellow px-2 text-2xl text-center font-snell h-8">
        <button className="flex-grow" onClick={toggleMenu}>
          Menu
        </button>
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
)
