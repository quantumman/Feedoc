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
  view() {
    return (
      <div class="timeline">
      </div>
    );
  },
};
