import React from "react"
import { Fade } from "react-awesome-reveal"

const Section = ({ callout, children }) => (
  <div className="md:flex md:items-stretch">
    <div className="md:w-80 flex-shrink-0">
      <Fade className="sticky top-24" triggerOnce>
        {callout}
      </Fade>
    </div>
    <div className="flex-grow border-l px-5 md:px-16">{children}</div>
  </div>
)

export default Section
