import './style.scss';
import u from '../../utility';

import App from '../App';

export const LeftPanel = {
  controller() {
    return {
      name: 'MainPage.LeftPanel',
    };
  },

  view(_ctrl, _props, children) {
    return <div>{children}</div>;
  },
};

export const Content = {
  controller() {
    return {
      name: 'MainPage.Content',
    };
  },

  view(_ctrl, _props, children) {
    return <div>{children}</div>;
  },
};

export const MainPage = {
  view(_ctrl, _props, children) {
    const leftPanel = u.single(
      children,
      c => c.controller().name === 'MainPage.LeftPanel'
    );
    const content = u.single(
      children,
      c => c.controller().name === 'MainPage.Content'
    );

    return (
      <div class="main-page">
        <App>
          <div class="wrap">
            <div class="container">
              <div class="left-panel">
                {leftPanel}
              </div>
              <div class="content">
                {content}
              </div>
            </div>
          </div>
        </App>
      </div>
    );
  },
};
