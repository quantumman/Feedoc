import HeaderPanel from 'polythene/header-panel/header-panel';

const defaultProps = {
  class: 'pe-header-panel--fit',
  fixed: true,
};
export default {
  view(_ctrl, props, children) {
    return m.component(
      HeaderPanel,
      Object.assign({}, defaultProps, {
        header: {
          toolbar: {
            topBar: [
              <h3 class="fixed-header-panel__title">{props.title}</h3>,
              <span class="flex"></span>,
              <div class="fixed-header-panel__nav">{props.nav}</div>,
            ],
          },
        },
        content: (<div class="fixed-header-panel__content">{children}</div>),
      })
    );
  },
};
