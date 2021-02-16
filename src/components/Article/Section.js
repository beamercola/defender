import React from "react"
import { Fade } from "react-awesome-reveal"
import classNames from "classnames"
const Section = ({ callout, children, last }) => (
  <div className="md:flex md:items-stretch">
    <div className="md:w-80 flex-shrink-0">
      <Fade className="sticky top-12" triggerOnce>
        {callout}
      </Fade>
    </div>
    <div
      className={classNames(
        "flex-grow border-l px-5 md:px-16",
        last && "pb-24"
      )}
    >
      {children}
    </div>
  </div>
)

export default Section
