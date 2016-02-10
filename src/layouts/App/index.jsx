import 'css/bootstrap.css';
import 'jquery';
import 'js/bootstrap.js';

import './style.scss';

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
        <div class="content">
          {children}
        </div>
      </div>
    );
  },
};
