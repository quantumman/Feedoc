import './style/index.scss';
import './index.html?output=index.html';

import App from './layouts/App.jsx';
import MainPageContainer from './MainPageContainer.jsx';

const routes = {
  '/': App,
  '/channels': MainPageContainer,
  '/channels/:id': MainPageContainer,
  '/channels/:id/posts': MainPageContainer,
  '/channels/:id/posts/new': App,
  '/channels/:id/posts/:postId': MainPageContainer,
  '/channels/:id/posts/:postId/edit': MainPageContainer,
};

m.route(document.body, '/', routes);
