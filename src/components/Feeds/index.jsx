import './style.scss';

const vm = {
  init() {
  },
};

export default {
  controller() {
    vm.init();
  },

  view(_ctrl, args) {
    return (
      <div class="feeds">
        <h4 class="header">
          FEEDS <span>({args.feeds().length})</span>
        </h4>
        <ul class="list  nav nav-pills nav-stacked">
        {
          args.feeds().map(f => {
            return (
              <li class={f.id === args.params.feedId ? 'item active' : 'item'}
                  key={f.id}
              >
                <a href={`/feeds/${f.id}`}
                   config={m.route}>
                  # {f.name}
                </a>
              </li>
            );
          })
        }
        </ul>
      </div>
    );
  },
};
