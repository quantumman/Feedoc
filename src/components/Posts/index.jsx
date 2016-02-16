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
                  <div class="timeline-icon">
                    <span class="icon glyphicon glyphicon-book"></span>
                  </div>
                  <div class="timeline-content">
                    <div class="header">
                      <a href="#">
                        <img src={p.avatar} alt="avatar" class="img-circle avatar" />
                        <span class="username">{p.createdBy}</span>
                      </a>
                      <span class="content-type">
                        <small><span class="tiny">POSTED</span> {p.contentType}</small>
                      </span>
                    </div>
                    <div class="body">
                      <h3>
                        <a
                            href={`/feeds/${args.params.feedId}/posts/${p.id}`}
                            config={m.route}
                        >
                          {p.title}
                        </a>
                      </h3>
                      <div class="contributors">
                        <small>
                          CONTRIBUTORS
                        </small>
                        {
                          p.contributors.slice(0, 6).map(i => {
                            return (
                              <span>
                                <img src={i.avatar} alt="contributors" class="img-circle avatar" />
                              </span>
                            );
                          })
                        }
                        {
                          p.contributors.length >= 6
                          ? (
                            <span class="vertical-middle glyphicon glyphicon-option-horizontal">
                            </span>
                          )
                          : ''
                        }
                      </div>
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
