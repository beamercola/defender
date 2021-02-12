import React from "react"
import { graphql } from "gatsby"
import SectionHeader from "./SectionHeader"
import Ticker from "react-ticker"

const sizeFromPrismic = size => {
  switch (size) {
    case "heading1":
      return "xl"
    default:
      return "xs"
  }
}

const Title = ({ slice }) => {
  const size = slice.primary?.title?.raw[0]?.type

  return (
    <div className="border-t w-full border-b">
      <Ticker direction="toRight" offset="100%">
        {() => (
          <div className="flex w-screen">
            <SectionHeader
              className="w-screen border-none"
              size={sizeFromPrismic(size)}
            >
              {slice.primary?.title.text}
            </SectionHeader>
            <SectionHeader
              className="w-screen border-none"
              size={sizeFromPrismic(size)}
            >
              {slice.primary?.title.text}
            </SectionHeader>
          </div>
        )}
      </Ticker>
    </div>
  )
}

export default Title

export const fragments = graphql`
  fragment TitleSlice on PrismicPageBodyTitle {
    id
    slice_type
    primary {
      title {
        text
        raw
      }
    }
  }
`
