import '../style/Channels.scss';

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
      <div class="channels">
        <h4 class="header">
          CHANNELS <span>({args.channels.length})</span>
        </h4>
        <ul class="list">
        {
          args.channels.map(c => {
            return (
              <li class="item" key={c.id}>
                <a className={c.id === args.channelId && 'active'}
                   href={`/channels/${c.id}`}
                   config={m.route}>
                  # {c.name}
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
