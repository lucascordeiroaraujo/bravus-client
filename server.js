// const express = require('express');

// const next = require('next');

// const dev = process.env.NODE_ENV !== 'production';

// const app = next({ dev });

// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   const server = express();

//   server.get('/blog/:slug', (req, res) => {
//     return app.render(req, res, '/blog-post', {
//       slug: req.params.slug
//     });
//   });

//   server.get('/blog/categoria/:slug', (req, res) => {
//     return app.render(req, res, '/blog', {
//       category: req.params.slug
//     });
//   });

//   server.all('*', (req, res) => {
//     return handle(req, res);
//   });

//   server.listen(3000, err => {
//     if (err) throw err;

//     console.log('🚀 Ready on http://localhost:3000');
//   });
// });

// server.js
const next = require('next');
const routes = require('./routes');
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);

// With express
const express = require('express');
app.prepare().then(() => {
  express()
    .use(handler)
    .listen(3000);
});
