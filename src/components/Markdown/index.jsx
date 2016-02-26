import './style.scss';

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

export default {
  view(_ctrl, props) {
    return (
      <div class="markdown">
        {m.trust(marked(props.src))}
      </div>
    );
  },
};
