import './style.scss';

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

export default {
  view(_ctrl, _props) {
    return (
      <div class="main-page">
      </div>
    );
  },
};
