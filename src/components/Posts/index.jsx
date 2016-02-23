import './style.scss';
import { Timeline, Content } from '../../layouts/Timeline';
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

const Header = {
  view(_ctrl, props) {
    return (
      <div class="header">
        <a href="#">
          <Avatar src={props.creator.avatar} />
          <span class="username header-text">{props.createdBy}</span>
        </a>
        <span class="content-type header-text">
          <span class="tiny">POSTED </span>
          <small>{props.contentType}</small>
        </span>
      </div>
    );
  },
};

const Body = {
  view(_ctrl, props) {
    return (
      <div class="body">
        <h3>
          <a
              href={`/feeds/${props.feedId}/posts/${props.id}`}
              config={m.route}
          >
            {props.title}
          </a>
        </h3>
        <div class="contributors">
          <small>
            CONTRIBUTORS
          </small>
          {
            props.contributors.slice(0, 6).map(i => {
              return (
                <span>
                  <Avatar src={i.avatar} />
                </span>
              );
            })
          }
          {
            props.contributors.length >= 6
            ? (
              <span class="vertical-middle glyphicon glyphicon-option-horizontal">
              </span>
            )
              : ''
          }
        </div>
      </div>
    );
  },
};

const Footer = {
  view(_ctrl, props) {
    return (
      <div class="footer">
        <Button label="EDIT" ink={false} />
        <Button label={`COMMENTS(${props.comments})`} ink={false} />
      </div>
    );
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
        <Timeline>
        {
          args.posts().map(p => {
            const header = <Header {...p} />;
            const body = <Body {...p} feedId={args.params.feedId} />;
            const footer = <Footer {...p} />;
            return (
              <Content
                  icon={book}
                  header={header}
                  body={body}
                  footer={footer}
              />
            );
          })
        }
        </Timeline>
      </div>
    );
  },
};
