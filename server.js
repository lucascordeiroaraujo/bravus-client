const express = require('express');

const next = require('next');

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/blog/:slug', (req, res) =>
    app.render(req, res, '/blog-post', {
      id: req.params.id,
      slug: req.params.slug
    })
  );

  server.get('*', (req, res) => handle(req, res));

  server.listen(3000, err => {
    if (err) throw err;

    console.log('🚀 Ready on http://localhost:3000');
  });
});