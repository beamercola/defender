import React from "react"
import { graphql } from "gatsby"
import Tippy from "@tippyjs/react/headless"
import { followCursor } from "tippy.js/headless"
import { Fade } from "react-awesome-reveal"
import Cover from "../Cover"
import Link from "../Link"

const Hero = ({ slice: { primary: cover } }) => (
  <Tippy
    render={attrs => (
      <div
        className="bg-yellow p-2 w-72 font-mono text-sm"
        dangerouslySetInnerHTML={{ __html: cover?.content?.html }}
        {...attrs}
      />
    )}
    plugins={[followCursor]}
    followCursor={true}
    placement="bottom-start"
  >
    <div className="">
      <Fade>
        <Link to={cover.link?.uid && `/${cover.link?.uid}`}>
          <Cover className="h-80vh border-b border-t" image={cover.image.url} />
        </Link>
      </Fade>
    </div>
  </Tippy>
)

export default Hero

export const fragments = graphql`
  fragment HeroSlice on PrismicPageBodyHero {
    id
    slice_type
    primary {
      image {
        url(imgixParams: { w: 1200 })
      }
      content: text {
        html
      }
      video {
        url
      }
      link {
        uid
      }
    }
  }
`
