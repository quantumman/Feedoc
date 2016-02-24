import './style/index.scss';
import './index.html?output=index.html';

import App from './layouts/App';
import container from './Container.jsx';
import { FeedsPage, PostsPage, PostViewPage } from './pages/Home';

const routes = {
  '/': App,
  '/feeds': container(FeedsPage),
  '/feeds/:id': container(PostsPage),
  '/feeds/:id/posts': container(PostsPage),
  '/feeds/:id/posts/new': App,
  '/feeds/:id/posts/:postId': container(PostViewPage),
  '/feeds/:id/posts/:postId/edit': container(PostViewPage),
};

m.route(document.body, '/', routes);
