const nextRoutes = require('next-routes');
const routes = (module.exports = nextRoutes());

routes.add('blog-post', '/blog/:slug');
routes.add('sobre-nos');
