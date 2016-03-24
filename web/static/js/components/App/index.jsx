import './style.scss';

import VerticalMenu from '../../layouts/VerticalMenu';
import IconButton from 'polythene/icon-button/icon-button';
import Edit from 'mmsvg/google/msvg/image/edit';
import Settings from 'mmsvg/google/msvg/action/settings';
import Groups from 'mmsvg/google/msvg/av/library-books';
import Tag from 'mmsvg/templarian/msvg/tag';

const MenuItem = {
  view(_ctrl, props) {
    return (
      <IconButton {...props}
                  active={ m.route() === props.url.href }
      />
    );
  },
};

export default {
  controller() {
    return {
      name: m.route.param('name'),
    };
  },

  view(ctrl, _props, children) {
    return (
      <div class="app horizontal layout">
        <div class="nav self-start">
          <VerticalMenu>
            <MenuItem id="new"
                      icon={{ msvg: Edit }}
                      url={{ href: `/${ctrl.name}/new`, config: m.route }}
            />
            <MenuItem id="groups"
                      icon={{ msvg: Groups }}
                      url={{ href: `/${ctrl.name}/groups`, config: m.route }}
            />
            <MenuItem id="tags"
                      icon={{ msvg: Tag }}
                      url={{ href: `/${ctrl.name}/tags`, config: m.route }}
            />
            <div class="spacer"></div>
            <MenuItem id="settings"
                      icon={{ msvg: Settings }}
                      url={{ href: `/${ctrl.name}/settings`, config: m.route }}
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
