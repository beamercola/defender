import React from "react"
import { graphql } from "gatsby"
import Tippy from "@tippyjs/react/headless"
import { followCursor } from "tippy.js/headless"
import { Fade } from "react-awesome-reveal"
import Cover from "../Cover"
import Link from "../Link"
const Hero = ({ slice: { primary: cover } }) => {
  return (
    <Tippy
      render={attrs => (
        <div
          className="bg-yellow p-2 w-72 font-mono text-sm"
          dangerouslySetInnerHTML={{ __html: cover?.cursor_text?.html }}
          {...attrs}
        />
      )}
      plugins={[followCursor]}
      followCursor={true}
      placement="bottom-start"
      disabled={!cover?.cursor_text?.html?.length > 0}
    >
      <div className="">
        <Fade>
          <Link to={cover.link?.uid && `/${cover.link?.uid}`}>
            <Cover
              className="h-80vh border-b border-t"
              image={cover.image.url}
              video={cover.video?.url}
            >
              {/* <Fade> */}
              {cover?.content?.text && (
                <h1 className="font-black font-bureau-wide text-yellow uppercase text-4xl lg:text-5xl text-center">
                  {cover?.content?.text}
                </h1>
              )}
              {cover?.overlay && (
                <div
                  className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${cover?.overlay?.url})` }}
                />
              )}
              {/* </Fade> */}
            </Cover>
          </Link>
        </Fade>
      </div>
    </Tippy>
  )
}

export default Hero

export const fragments = graphql`
  fragment HeroSlice on PrismicPageBodyHero {
    id
    slice_type
    primary {
      image {
        alt
        url(imgixParams: { w: 1200 })
      }
      overlay {
        url(imgixParams: { w: 1200 })
      }
      content: text {
        text
      }
      cursor_text {
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
