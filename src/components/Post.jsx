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

  view(_ctrl, args) {
    return (
      <div class="post">
        <div config={vm.config(args.post())}>
        </div>
      </div>
    );
  },
};
