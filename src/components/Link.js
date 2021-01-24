import React from "react"
import { Link as GatsbyLink } from "gatsby"

export default ({
  children,
  to,
  activeClassName,
  partiallyActive,
  ...props
}) => {
  if (!to) return <div {...props}>{children}</div>

  const internal = /^\/(?!\/)/.test(to)
  if (internal) {
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
  return (
    <a href={to} {...props}>
      {children}
    </a>
  )
}
