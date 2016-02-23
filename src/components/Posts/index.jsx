import './style.scss';
import Button from 'polythene/button/button';
import Icon from 'polythene/icon/icon';
import book from 'mmsvg/google/msvg/action/book';

const Avatar = {
  view(_ctrl, props) {
    return m(Icon, {
      src: props.src,
      class: 'pe-icon--avatar',
    });
  },
};

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
                    <Icon msvg={book} />
                  </div>
                  <div class="timeline-content">
                    <div class="header">
                      <a href="#">
                        <Avatar src={p.creator.avatar} />
                        <span class="username header-text">{p.createdBy}</span>
                      </a>
                      <span class="content-type header-text">
                        <span class="tiny">POSTED </span>
                        <small>{p.contentType}</small>
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
                                <Avatar src={i.avatar} />
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
                      <div class="footer">
                        <Button label="EDIT" ink={false} />
                        <Button label={`COMMENTS(${p.comments})`} ink={false} />
                      </div>
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
