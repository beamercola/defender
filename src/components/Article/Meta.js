import React from "react"

const Meta = ({ readTime, title }) => {
  const url = typeof window !== "undefined" && encodeURI(window.location.href)
  return (
    <div className="border-b border-black mb-8 py-3 font-mono flex justify-between px-4">
      <div>{readTime}</div>
      <div className="">
        <a
          href={`http://www.facebook.com/share.php?u=${url}`}
          target="_blank"
          rel="noreferrer"
        >
          FB
        </a>
        {" | "}
        <a
          href={`https://twitter.com/intent/tweet?text=${url}`}
          target="_blank"
          rel="noreferrer"
        >
          TW
        </a>
        {" | "}
        <a href={`mailto:?subject=${title}&body=${url}`}>EMAIL</a>
      </div>
    </div>
  )
}

export default Meta
