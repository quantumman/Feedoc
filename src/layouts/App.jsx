import 'css/bootstrap.css';
import 'jquery';
import 'js/bootstrap.js';

import '../style/app.scss';

import ListMenuItem from '../components/ListMenuItem.jsx';
import VerticalMenu from './VerticalMenu.jsx';

export default {
  controller() {
    m.redraw.strategy('diff');
  },

  view(_ctrl, _args, children) {
    return (
      <div>
        <div class="fixed-menu-top">
          top
        </div>
        <div class="fixed-menu-left">
          <VerticalMenu>
            <div></div>
            <ListMenuItem />
          </VerticalMenu>
        </div>
        <div class="content">
          {children}
        </div>
      </div>
    );
  },
};
