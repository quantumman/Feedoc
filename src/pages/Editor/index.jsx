import './style.scss';

import App from '../../layouts/App';
import MarkdownEditor from '../../components/MarkdownEditor';

export default {
  view(_ctrl, props, _children) {
    return (
      <div class="edit">
        <App>
          <MarkdownEditor src={props.markdown} />
        </App>
      </div>
    );
  },
};
