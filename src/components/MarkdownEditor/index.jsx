import './style.scss';

import Toolbar from 'polythene/toolbar/toolbar';
import IconArrowBack from 'mmsvg/google/msvg/navigation/arrow-back';
import IconButton from 'polythene/icon-button/icon-button';

const toolbar = [
  <IconButton icon={{ msvg: IconArrowBack }}
              events={{ onclick: () => window.history.back() }} />,
];

export default {
  view(_ctrl, _props) {
    return (
      <div class="markdown-editor">
        <Toolbar content={toolbar} />
        <div class="editor">
          <div class="edit-area">TEST</div>
          <div class="preview-area">TEST</div>
        </div>
      </div>
    );
  },
};
