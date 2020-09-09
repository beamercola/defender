require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Defender`,
    description: ``,
    author: ``,
  },
  plugins: [
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.PRISMIC_NAME,
        accessToken: process.env.PRISMIC_TOKEN,
        schemas: {
          article: require("./src/schemas/article.json"),
          page: require("./src/schemas/page.json"),
        },
        shouldDownloadImage: ({ node, key, value }) => {
          return false
        },
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: "ndh8xzt",
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-theme-tailwindcss`,
      options: {
        postCssPlugins: [require("autoprefixer")],
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://evenoddfilms.us10.list-manage.com/subscribe/post?u=6fc42c7780850744db834e177&amp;id=a6cf0e406b",
      },
    },
  ],
}
