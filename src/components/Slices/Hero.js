import React from "react"
import { graphql } from "gatsby"
import Cover from "../Cover"
import Link from "../Link"
import ReactHover, { Trigger, Hover } from "react-hover"

export default ({ slice: { primary: cover } }) => {
  return (
    <div className="-mx-8">
      <ReactHover options={{ followCursor: true, shiftX: 20, shiftY: 20 }}>
        <Trigger type="trigger">
          <Link to={`/${cover.link?.uid}`}>
            <Cover className="h-80vh border-b" image={cover.image.url}></Cover>
          </Link>
        </Trigger>
        <Hover type="hover">
          <div
            className="bg-yellow p-2 w-72 font-mono text-sm"
            dangerouslySetInnerHTML={{ __html: cover?.content?.html }}
          />
        </Hover>
      </ReactHover>
    </div>
  )
}

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
