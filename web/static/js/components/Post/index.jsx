import './style.scss';

import Toolbar from 'polythene/toolbar/toolbar';
import IconArrowBack from 'mmsvg/google/msvg/navigation/arrow-back';
import IconButton from 'polythene/icon-button/icon-button';
import ModeEdit from 'mmsvg/google/msvg/editor/mode-edit';
import Markdown from '../Markdown';

export default {
  view(_ctrl, props) {
    const toolbar = [
      <IconButton icon={{ msvg: IconArrowBack }}
                  events={{ onclick: () => window.history.back() }} />,
      <span class="flex">
        <h3 class="fixed-header-panel__title">{props.post().title}</h3>
      </span>,
      <IconButton
          icon={{ msvg: ModeEdit }}
          url={{
            href: `/feeds/${props.params.feedId}/posts/${props.params.postId}/edit`,
            config: m.route,
          }}
      />,
    ];
    return (
      <div class="post">
        <Toolbar content={toolbar} />
        <Markdown src={props.post().content} />
      </div>
    );
  },
};
