import '../style/app.scss';

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
          left
        </div>
        <div class="content">
          {children}
        </div>
      </div>
    );
  },
};
