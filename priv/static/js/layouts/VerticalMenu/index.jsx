import './style.scss';

export default {
  view(_ctrl, _args, children) {
    return (
      <div class="vertical-menu layout vertical inline">
        {
          children.map(c => {
            return <div class="menu-item">
              {c}
            </div>;
          })
        }
      </div>
    );
  },
};
