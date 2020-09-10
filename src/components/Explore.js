import React from "react"
import { Link } from "gatsby"

const Explore = ({}) => {
  return (
    <div className="p-12 flex justify-end p-6 border-t border-black -mx-4">
      <Box className="w-1/4 leading-tight px-4" title="About Us">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
          sed diam nonummy nibh eu- ismod tincidunt ut laoreet dolore magna
          aliquam erat volutpat. Ut wisi enim ad
        </p>
      </Box>
      <Box className="w-1/4 leading-tight px-4" title="Shop">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
          sed diam nonummy nibh eu- ismod tincidunt ut laoreet dolore magna
          aliquam erat volutpat. Ut wisi enim ad
        </p>
      </Box>
    </div>
  )
}

export default Explore

const Box = ({ className, title, children, to }) => (
  <div className={className}>
    <h4 className="uppercase font-black font-bureau-wide text-lg mb-1">
      {title}
    </h4>
    {children}
    <Link className="block mt-2" to={to}>
      Arrow
    </Link>
  </div>
)
