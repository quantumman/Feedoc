import '../style/VerticalMenu.scss';

export default {
  controller() {
  },

  view(_ctrl, _args, children) {
    return (
      <ul class="vertical-menu">
        {
          children.map(c => {
            return <li class="menu-item">
              {c}
            </li>;
          })
        }
      </ul>
    );
  },
};
