require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `TUF Website`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken":process.env.ACCESS_TOKEN,
      "spaceId":process.env.SPACE_ID
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-postcss"]
};