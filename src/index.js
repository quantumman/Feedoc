import './style/index.scss';
import './index.html?output=index.html';

import App from './layouts/App.jsx';

const routes = {
  '/': App,
  '/channels/:id': App,
  '/channels/:id/posts': App,
  '/channels/:id/posts/new': App,
  '/channels/:id/posts/:id': App,
  '/channels/:id/posts/:id/edit': App,
};

m.route(document.body, '/', routes);
