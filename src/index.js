import './style/index.scss';
import './index.html?output=index.html';

import App from './layouts/App';
import container from './Container.jsx';
import MainPage from './pages/MainPage';

const routes = {
  '/': App,
  '/feeds': container(MainPage),
  '/feeds/:id': container(MainPage),
  '/feeds/:id/posts': container(MainPage),
  '/feeds/:id/posts/new': App,
  '/feeds/:id/posts/:postId': container(MainPage),
  '/feeds/:id/posts/:postId/edit': container(MainPage),
};

m.route(document.body, '/', routes);
