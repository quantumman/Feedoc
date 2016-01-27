import './style/index.scss';
import './index.html?output=index.html';

import App from './layouts/App.jsx';
import MainPage from './pages/MainPage.jsx';

const routes = {
  '/': App,
  '/channels': MainPage,
  '/channels/:id': MainPage,
  '/channels/:id/posts': MainPage,
  '/channels/:id/posts/new': App,
  '/channels/:id/posts/:postId': MainPage,
  '/channels/:id/posts/:postId/edit': MainPage,
};

m.route(document.body, '/', routes);
