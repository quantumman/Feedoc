import './style.scss';

import Toolbar from 'polythene/toolbar/toolbar';
import IconArrowBack from 'mmsvg/google/msvg/navigation/arrow-back';
import IconButton from 'polythene/icon-button/icon-button';
import ModeEdit from 'mmsvg/google/msvg/editor/mode-edit';
import Markdown from '../Markdown';

export default {
  view(_ctrl, props) {
    const post = props.post || m.prop({ title: '' });

    const toolbar = [
      <IconButton icon={{ msvg: IconArrowBack }}
                  events={{ onclick: () => window.history.back() }} />,
      <span class="flex">
        <h3 class="fixed-header-panel__title">{post().title}</h3>
      </span>,
      <IconButton
          icon={{ msvg: ModeEdit }}
          url={{
            href: `/${props.teamId}/groups/${props.groupId}/posts/${props.postId}/edit`,
            config: m.route,
          }}
      />,
    ];
    return (
      <div class="post">
        <Toolbar content={toolbar} />
        <Markdown src={props.src} />
      </div>
    );
  },
};
