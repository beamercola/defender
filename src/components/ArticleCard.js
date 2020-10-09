import { React } from "gatsby"

const ArticleCard = ({ className, article }) => {
  return (
    <div className={`${className}`}>
      <div className="flex justify-end">
        <span className="highlight">Photo Essay</span>
      </div>
      <img className="w-full h-64 bg-black mb-4" />
      <h5 className="text-lg">{article.title}</h5>
    </div>
  )
}

export default ArticleCard
