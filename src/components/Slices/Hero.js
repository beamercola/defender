import React from "react"
import { graphql } from "gatsby"
import Cover from "../Cover"
import Link from "../Link"
import ReactHover, { Trigger, Hover } from "react-hover"
import { Fade } from "react-awesome-reveal"

export const Hero = ({ slice: { primary: cover } }) => (
  <div>
    <Fade>
      <ReactHover options={{ followCursor: true, shiftX: 20, shiftY: 20 }}>
        <Trigger type="trigger">
          <Link to={cover.link?.uid && `/${cover.link?.uid}`}>
            <Cover
              className="h-80vh border-b border-t"
              image={cover.image.url}
            ></Cover>
          </Link>
        </Trigger>
        <Hover type="hover">
          <div
            className="bg-yellow p-2 w-72 font-mono text-sm"
            dangerouslySetInnerHTML={{ __html: cover?.content?.html }}
          />
        </Hover>
      </ReactHover>
    </Fade>
  </div>
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
