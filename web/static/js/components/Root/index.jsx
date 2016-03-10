import './style.scss';

import App from '../App';
import u from '../../utility';

const Empty = {
  view() {
    return <div></div>;
  },
};

const container = tag => {
  return {
    controller() {
      this.tag = tag;
    },

    view(_ctrl, props, [Child]) {
      return <Child {...props} />;
    },
  };
};
export const LeftView = container('LeftView');
export const MiddleView = container('MiddleView');
export const RightView = container('RightView');
export const Root = {
  controller(initialProps) {
    m.redraw.strategy('diff');

    return initialProps;
  },

  view(ctrl, _props, children) {
    const instances = children.map(c => c.controller());
    const [LV, MV, RV] = ['LeftView', 'MiddleView', 'RightView']
      .map(tag => {
        return u.singleOrDefault(instances, c => c.tag === tag)
          || Empty;
      });

    return (
      <App>
        <div class="root">
          <div class="groups-page layout">
            <div class="- list-view left">
              <LV {...ctrl} />
            </div>
            <div class="- list-view middle">
              <MV {...ctrl} />
            </div>
            <div class="flex right">
              <RV {...ctrl} />
            </div>
          </div>
        </div>
      </App>
    );
  },
};
