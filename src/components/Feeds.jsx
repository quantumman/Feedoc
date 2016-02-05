import '../style/Feeds.scss';

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
          CHANNELS <span>({args.feeds().length})</span>
        </h4>
        <ul class="list">
        {
          args.feeds().map(f => {
            return (
              <li class="item" key={f.id}>
                <a className={f.id === args.params.feedId && 'active'}
                   href={`/feeds/${f.id}`}
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
