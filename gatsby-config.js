module.exports = {
  siteMetadata: {
    title: `笔记`,
    description: `个人笔记记录`,
    author: `@gao`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,// css-in-js
    `gatsby-remark-katex`,
    { // mdx插件，兼容md和mdx格式文件
      resolve: `gatsby-plugin-mdx`,
      options:{
        extensions:['.mdx','.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`
            }
          }
        ],
        // defaultLayouts:{
        //   default:require.resolve('./src/components/PostLayout/index.js')
        // }
      }
    },
    'gatsby-remark-reading-time',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        includePaths: [],
        excludePaths: [],
        height: 2,
        prependToBody: false,
        color: `linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-167029866-1",
      },
    },
    {
      resolve: `gatsby-plugin-baidu-analytics`,
      options: {
        // baidu analytics siteId
        siteId: "dcdbf65e019fdc9379a6624541a3b721",
        // Put analytics script in the head instead of the body [default:false]
        head: false,
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
        icon: `src/images/javascript-color.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
