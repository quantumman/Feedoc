import './style.scss';

import Toolbar from 'polythene/toolbar/toolbar';
import IconArrowBack from 'mmsvg/google/msvg/navigation/arrow-back';
import IconButton from 'polythene/icon-button/icon-button';
import ModeEdit from 'mmsvg/google/msvg/editor/mode-edit';

import marked from 'marked';
marked.setOptions({
  rendered: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: true,
  sanitize: true,
  smartLists: true,
  smarttypants: true,
});

const vm = {
  init() {
  },

  config(markup) {
    return (element, isInitialized) => {
      if (!isInitialized && markup) {
        $(element).html(marked(markup.content));
      }
    };
  },
};

export default {
  controller() {
    vm.init();
  },

  view(_ctrl, props) {
    const toolbar = [
      <IconButton icon={{ msvg: IconArrowBack }}
                  events={{ onclick: () => window.history.back() }} />,
      <span class="flex">
        <h3 class="fixed-header-panel__title">{props.post().title}</h3>
      </span>,
      <IconButton icon={{ msvg: ModeEdit }} />,
    ];
    return (
      <div class="post">
        <Toolbar content={toolbar} />
        <div config={vm.config(props.post())}>
        </div>
      </div>
    );
  },
};
