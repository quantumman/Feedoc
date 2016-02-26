import './style.scss';

import Toolbar from 'polythene/toolbar/toolbar';
import IconArrowBack from 'mmsvg/google/msvg/navigation/arrow-back';
import IconButton from 'polythene/icon-button/icon-button';
import Markdown from '../Markdown';

const toolbar = [
  <IconButton icon={{ msvg: IconArrowBack }}
              events={{ onclick: () => window.history.back() }} />,
];

export default {
  view(_ctrl, props) {
    return (
      <div class="markdown-editor">
        <Toolbar content={toolbar} />
        <div class="editor">
          <div class="edit-area">TEST</div>
          <div class="preview-area">
            <Markdown src={props.src()}/>
          </div>
        </div>
      </div>
    );
  },
};
