import './style.scss';

import Toolbar from 'polythene/toolbar/toolbar';

const toolbar = [
];

export default {
  view(_ctrl, _props) {
    return (
      <div class="markdown-editor">
        <Toolbar content={toolbar} />
      </div>
    );
  },
};
