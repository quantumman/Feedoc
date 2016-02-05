import MainPage from './pages/MainPage.jsx';

import Channels from './models/Channels.js';
import Posts from './models/Posts.js';

function asNumber(x) {
  const val = Number(x);
  return isNaN(val) ? undefined : val;
}

const props = {
  init(args) {
    this.channels = this.channels || Channels.retrieve();

    if (args.channelId) {
      this.posts = Posts.retrieve(args.channelId);
    }

    if (args.postId) {
      this.post = Posts.get(args.postId);
    }

    this.params = args;
  },
};

export default {
  controller() {
    this.params = this.params || {};
    this.params.channelId = asNumber(m.route.param('id'));
    this.params.postId = asNumber(m.route.param('postId'));

    props.init(this.params);
  },

  view() {
    return (
      <MainPage {...props}/>
    );
  },
};
