import './style.scss';

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
        <ul class="list">
          {
            args.posts().map(p => {
              return (
                <li key={p.id} class="item">
                  <div class="timeline-icon"></div>
                  <div class="timeline-content">
                    <div>
                      <a href="#">
                        <img src={p.avatar} alt="avatar" />
                      </a>
                    </div>
                    <div>
                      <h4>
                        <a
                            href={`/feeds/${args.params.feedId}/posts/${p.id}`}
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
