import React from "react"
import { Link as GatsbyLink } from "gatsby"

const Link = ({ children, to, activeClassName, partiallyActive, ...props }) => {
  // If there's no path just make it a div
  if (!to) return <div {...props}>{children}</div>

  // Check for /relative path
  if (/^\/(?!\/)/.test(to)) {
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...props}
      >
        {children}
      </GatsbyLink>
    )
  }

  // Fallback
  return (
    <a href={to} {...props}>
      {children}
    </a>
  )
}

export default Link
