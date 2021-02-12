import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Link from "./Link"
import { SectionHeader } from "./Slices"

const Explore = () => {
  const {
    prismicLayout: { data: page },
  } = useStaticQuery(graphql`
    query ExploreQuery {
      prismicLayout {
        data {
          explore {
            title {
              text
            }
            path
            paragraph {
              html
            }
          }
        }
      }
    }
  `)

  return (
    <div className="overflow-hidden">
      <SectionHeader className="px-4 md:px-8 border-t">
        EXPLORE MORE
      </SectionHeader>
      <div className="p-4 md:flex justify-end p-6 border-black -mx-4">
        {page.explore.map((cell, i) => (
          <div className="md:w-1/4 leading-tight px-4 mb-8" key={i}>
            <Link
              className="block uppercase font-black font-bureau-wide text-lg mb-2 hover:text-red"
              to={cell.path}
            >
              {cell.title.text}
            </Link>
            <div
              className="prose prose-sm"
              dangerouslySetInnerHTML={{ __html: cell.paragraph.html }}
            />
            <Link className="block mt-8" to={cell.path}>
              <img className="h-2" src="/arrow.svg" alt="View" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Explore
