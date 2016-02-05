import '../style/Posts.scss';

import moment from 'moment';

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
      <div class="posts">
        <ul class="list media-list">
          {
            args.posts().map(p => {
              return (
                <li key={p.id} class="item media">
                  <div class="media-left">
                    <a href="#">
                      <img src={p.avatar} alt="avatar" />
                    </a>
                  </div>
                  <div class="media-body">
                    <h4 class="media-heading">
                      <a
                          href={`/channels/${args.params.channelId}/posts/${p.id}`}
                          config={m.route}
                      >
                        {p.title}
                      </a>
                    </h4>
                    <small>post date: {
                      moment(
                        p.createdOn,
                        'dd MM D HH:mm:ss UTCZ YYYY'
                      ).format('L')
                    }
                    </small>
                  </div>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  },
};
