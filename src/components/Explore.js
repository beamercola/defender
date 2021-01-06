import React from "react"
import Link from "./Link"
import { SectionHeader } from "./Slices"

const Explore = ({}) => {
  return (
    <div className="overflow-hidden">
      <SectionHeader className="px-8 border-t">EXPLORE MORE</SectionHeader>
      <div className="p-4 md:flex justify-end p-6 border-black -mx-4">
        <Box className="md:w-1/4 leading-tight px-4 mb-8" title="About Us">
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit, sed diam nonummy nibh eu- ismod tincidunt ut laoreet dolore
            magna aliquam erat volutpat. Ut wisi enim ad
          </p>
        </Box>
        <Box className="md:w-1/4 leading-tight px-4" title="Shop">
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit, sed diam nonummy nibh eu- ismod tincidunt ut laoreet dolore
            magna aliquam erat volutpat. Ut wisi enim ad
          </p>
        </Box>
      </div>
    </div>
  )
}

export default Explore

const Box = ({ className, title, children, to }) => (
  <div className={className}>
    <h4 className="uppercase font-black font-bureau-wide text-lg mb-2">
      {title}
    </h4>
    {children}
    <Link className="block mt-2" to={to}>
      Arrow
    </Link>
  </div>
)
