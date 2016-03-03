import './style/index.scss';
import './index.html?output=index.html';

import 'polythene/theme/theme';
import 'polythene/layout/theme/theme';

const noop = {};

const routes = {
  '/:teamId': noop,
  '/:teamId/new': noop,
  '/:teamId/groups': noop,
  '/:teamId/tags': noop,
  '/:teamId/settings': noop,
};

m.route(document.body, '/', routes);
