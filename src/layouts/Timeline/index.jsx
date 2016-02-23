import './style.scss';
import Icon from 'polythene/icon/icon';

export const Content = {
  controller(props) {
    this.icon = props.icon;
  },

  view(_ctrl, props) {
    return (
      <div class="timeline-content">
        <div class="timeline-header">
          {props.header}
        </div>
        <div class="timeline-box">
          <div class="timeline-body">
            {props.body}
          </div>
          <div class="timeline-footer">
            {props.footer}
          </div>
        </div>
      </div>
    );
  },
};

export const Timeline = {
  view(_ctrl, _props, children) {
    const contents = children
      .reduce((a, b) => a.concat(b), [])
      .map(c => c.controller());
    return (
      <div class="timeline">
        <ul>
        {
          contents.map((c, index) => {
            return (
              <li key={index}>
                <div class="icon">
                  <Icon msvg={c.icon} />
                </div>
                <div class="content">
                  {c}
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
