import './style/index.scss';
import './index.html?output=index.html';

import 'polythene/theme/theme';
import 'polythene/layout/theme/theme';

import GroupsPage from './components/GroupsPage';

const noop = {};

const routes = {
  '/:name': GroupsPage,
  '/:name/new': noop,
  '/:name/groups': GroupsPage,
  '/:name/groups/:groupId/posts': GroupsPage,
  '/:name/groups/:groupId/posts/:postId': GroupsPage,
  '/:name/tags': noop,
  '/:name/settings': noop,
};

m.route(document.body, '/', routes);
