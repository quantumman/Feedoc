import './style/index.scss';
import './index.html?output=index.html';

import App from './layouts/App';
import container from './Container.jsx';
import Home from './pages/Home';

const routes = {
  '/': App,
  '/feeds': container(Home),
  '/feeds/:id': container(Home),
  '/feeds/:id/posts': container(Home),
  '/feeds/:id/posts/new': App,
  '/feeds/:id/posts/:postId': container(Home),
  '/feeds/:id/posts/:postId/edit': container(Home),
};

m.route(document.body, '/', routes);
