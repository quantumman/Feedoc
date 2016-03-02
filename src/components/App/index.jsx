import './style.scss';

import VerticalMenu from '../../layouts/VerticalMenu';
import IconButton from 'polythene/icon-button/icon-button';
import Edit from 'mmsvg/google/msvg/image/edit';
import Settings from 'mmsvg/google/msvg/action/settings';
import Groups from 'mmsvg/google/msvg/av/library-books';
import Tag from 'mmsvg/templarian/msvg/tag';


export default {
  view(_ctrl, _props, children) {
    return (
      <div class="app horizontal layout">
        <div class="nav self-start">
          <VerticalMenu>
            <IconButton icon={{ msvg: Edit }}
                        url={{ href: '/new', config: m.route }}
                        active={ m.route() === '/new' }
            />
            <IconButton icon={{ msvg: Groups }}
                        url={{ href: '/groups', config: m.route }}
                        active={ m.route() === '/groups' }
                        className="foobar"
            />
            <IconButton icon={{ msvg: Tag }}
                        url={{ href: '/tags', config: m.route }}
                        active={ m.route() === '/tags' }
            />
            <div class="spacer"></div>
            <IconButton icon={{ msvg: Settings }}
                        url={{ href: '/settings', config: m.route }}
                        active={ m.route() === '/settings' }
            />
            <div class="border"></div>
          </VerticalMenu>
        </div>
        <div class="flex">
          {children}
        </div>
      </div>
    );
  },
};
