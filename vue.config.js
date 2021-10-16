const path = require("path");

//GitHub Pages requires dist files to be in a /docs/ folder or root
module.exports = {
  outputDir: path.resolve(__dirname, "./docs/"),
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/'
}