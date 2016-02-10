import './style/index.scss';
import './index.html?output=index.html';

import App from './layouts/App';
import MainPageContainer from './MainPageContainer.jsx';

const routes = {
  '/': App,
  '/feeds': MainPageContainer,
  '/feeds/:id': MainPageContainer,
  '/feeds/:id/posts': MainPageContainer,
  '/feeds/:id/posts/new': App,
  '/feeds/:id/posts/:postId': MainPageContainer,
  '/feeds/:id/posts/:postId/edit': MainPageContainer,
};

m.route(document.body, '/', routes);
