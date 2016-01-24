import './style/index.scss';
import './index.html?output=index.html';

import App from './layouts/App.jsx';

const routes = {
  '/': app,
  '/channels/:id': app,
  '/channels/:id/posts': app,
  '/channels/:id/posts/new': app,
  '/channels/:id/posts/:id': app,
  '/channels/:id/posts/:id/edit': app,
};

m.route(document.body, '/', routes);
