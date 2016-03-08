import './style.scss';

import App from '../App';

const Empty = {
  view() {
    return <div></div>;
  },
};

export default {
  controller(initialProps) {
    return initialProps;
  },

  view(ctrl) {
    const Groups = ctrl.GroupList || Empty;
    const Posts = ctrl.PostList || Empty;
    const Markdown = ctrl.Markdown || Empty;
    return (
      <App>
        <div class="root">
          <div class="groups-page layout">
            <div class="- list-view left">
              <Groups {...ctrl} />
            </div>
            <div class="- list-view middle">
              <Posts {...ctrl} />
            </div>
            <div class="flex right">
              <Markdown {...ctrl} />
            </div>
          </div>
        </div>
      </App>
    );
  },
};
