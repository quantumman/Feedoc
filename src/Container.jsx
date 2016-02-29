import Feeds from './models/Feeds.js';
import Posts from './models/Posts.js';

function asNumber(x) {
  const val = Number(x);
  return isNaN(val) ? undefined : val;
}

const props = {
  init(args) {
    this.feeds = this.feeds || Feeds.retrieve();

    if (args.feedId !== undefined) {
      this.posts = Posts.retrieve(args.feedId);
    }

    if (args.postId !== undefined) {
      this.post = Posts.get(args.postId)
                       .then(post => {
                         this.markdown = m.prop(post.content);
                         return post;
                       });
    }

    this.params = args;
  },
};

export default function container(Component) {
  return {
    controller() {
      this.params = this.params || {};
      this.params.feedId = asNumber(m.route.param('id'));
      this.params.postId = asNumber(m.route.param('postId'));

      props.init(this.params);
    },

    view() {
      return (
        <Component {...props} />
      );
    },
  };
}
