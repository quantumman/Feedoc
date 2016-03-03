import './style/index.scss';
import './index.html?output=index.html';

import 'polythene/theme/theme';
import 'polythene/layout/theme/theme';

import GroupsPage from './components/GroupsPage';

const noop = {};

const routes = {
  '/:teamId': noop,
  '/:teamId/new': noop,
  '/:teamId/groups': GroupsPage,
  '/:teamId/groups/:groupId/posts': GroupsPage,
  '/:teamId/groups/:groupId/posts/:postId': GroupsPage,
  '/:teamId/tags': noop,
  '/:teamId/settings': noop,
};

m.route(document.body, '/', routes);
