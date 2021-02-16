import React, { useState } from "react"
import Link from "./Link"
import Ticker from "react-ticker"
import PageVisibility from "react-page-visibility"
import StickyBox from "react-sticky-box"
const classNames = require("classnames")

const Header = ({ toggleMenu }) => {
  const [pageIsVisible, setPageIsVisible] = useState(true)

  const handleVisibilityChange = isVisible => {
    setPageIsVisible(isVisible)
  }

  return (
    <>
      <header className="bg-red relative">
        <div className="flex flex-col-reverse md:grid grid-cols-3 md:-mb-4">
          <p className="text-center font-snell text-yellow text-2xl md:text-3xl md:col-start-2">
            &ldquo;From Injustice We Rise&rdquo;
          </p>
          <p className="text-yellow text-lg text-center md:text-right px-3">
            VOLUME 00
          </p>
        </div>
        <Link className="h-full" to="/">
          <img className="mx-auto h-full" src="/logotype.svg" alt="Defender" />
        </Link>
      </header>

      <StickyBox
        className="z-50"
        offsetTop={0}
        // onChangeMode={(o, n) => console.log(o, n)}
      >
        <nav className="border-t border-b border-yellow text-yellow text-2xl text-center font-snell w-screen py-1 bg-red">
          <PageVisibility onChange={handleVisibilityChange}>
            {pageIsVisible && (
              <Ticker direction="toRight" offset="100%">
                {() => (
                  <div className="flex w-screen">
                    <button className="flex-grow" onClick={toggleMenu}>
                      Menu
                    </button>
                    <Link className="flex-grow" to="/about">
                      About
                    </Link>
                    <a
                      className="flex-grow"
                      href="https://adachiproject.wedid.it"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Donate
                    </a>
                    <Link className="flex-grow" to="/shop">
                      Shop
                    </Link>
                  </div>
                )}
              </Ticker>
            )}
          </PageVisibility>
        </nav>
      </StickyBox>
    </>
  )
}

export default Header
