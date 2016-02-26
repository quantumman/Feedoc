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

function config(markdown) {
  return (element, isInitialized) => {
    if (!isInitialized && markdown) {
      $(element).html(marked(markdown));
    }
  };
}

export default {
  view() {
    return (
      <div class="markdown">
      </div>
    );
  },
};
