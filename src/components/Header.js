import React, { useState } from "react"
import Link from "./Link"
import Ticker from "react-ticker"
import PageVisibility from "react-page-visibility"

export default ({ toggleMenu }) => {
  const [pageIsVisible, setPageIsVisible] = useState(true)

  const handleVisibilityChange = isVisible => {
    setPageIsVisible(isVisible)
  }

  return (
    <PageVisibility onChange={handleVisibilityChange}>
      <header className="sticky top-0 z-50 h-40">
        <div className="p-4 flex-grow flex items-center justify-center duration-1000 transition-all h-32">
          <Link className="h-full" to="/">
            <img className="h-full w-auto mx-auto" src="/logotype.svg" />
          </Link>
        </div>
        <div className="z-50">
          <nav className="border-t border-b border-yellow text-yellow text-2xl text-center font-snell h-8 w-screen">
            <div className="flex w-screen">
              <button className="flex-grow" onClick={toggleMenu}>
                Menu
              </button>
              <Link className="flex-grow" to="https://wearedefender.wedid.it/">
                Donate
              </Link>
              <Link className="flex-grow" to="/shop">
                Shop
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </PageVisibility>
  )
}
