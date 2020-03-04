const routes = require('next-routes');

// Name   Page      Pattern
module.exports = routes() // ----   ----      -----
  .add('sobre-nos') // about  about     /about
  .add('blog-post', '/blog/:slug');
