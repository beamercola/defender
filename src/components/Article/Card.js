import React from "react"
import Highlight from "../Highlight"
import Link from "../Link"

const classNames = require("classnames")

const Card = ({ className, article, styles = {}, showTeaser = false }) => {
  return (
    <div className={classNames(className, "group")}>
      <div className={classNames(styles.categoryWrapper, "flex")}>
        <Link to={`/${article.data.category?.document?.uid}`}>
          <Highlight className={styles.category}>
            {article.data.category?.document?.data?.title}
          </Highlight>
        </Link>
      </div>
      <Link to={`/${article.uid}`}>
        <img
          className={classNames(styles.image, "bg-black object-cover")}
          src={article.data.cover?.url}
          alt={article.data.cover?.alt || ""}
        />
        <h5
          className={classNames(styles.title, "group-hover:text-red uppercase")}
        >
          {article.data.title}
        </h5>
        {showTeaser && (
          <div
            className={classNames(styles.teaser, "leading-snug mt-2")}
            dangerouslySetInnerHTML={{
              __html: article.data.teaser.html,
            }}
          />
        )}
      </Link>
    </div>
  )
}

export default Card

// const Card = ({ className, styles }) => {
//   return (
//     <div className={className}>
//       <div className="flex justify-end">
//         <Highlight>{article.data.category?.document?.data?.title}</Highlight>
//       </div>
//     </div>
//   )
// }

// const Category = ({ children }) => (
//   <div className="flex justify-end">
//     <Highlight>{children}</Highlight>
//   </div>
// )
