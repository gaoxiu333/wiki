module.exports = {
  siteMetadata: {
    title: `笔记`,
    description: `个人笔记记录`,
    author: `@gao`,
  },
  plugins: [
    `gatsby-plugin-emotion`,// css-in-js
    { // mdx插件，兼容md和mdx格式文件
      resolve: `gatsby-plugin-mdx`,
      options:{
        extensions:['.mdx','.md'],
        defaultLayouts:{
          default:require.resolve('./src/components/layout.js')
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
