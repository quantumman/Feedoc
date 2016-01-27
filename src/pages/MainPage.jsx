import '../style/MainPage.scss';

import App from '../layouts/App.jsx';
import Channels from '../components/Channels.jsx';
import Posts from '../components/Posts.jsx';

import ChannelsModel from '../models/Channels.js';
import PostsModel from '../models/Posts.js';

function asNumber(x) {
  const val = Number(x);
  return isNaN(val) ? undefined : val;
}

const vm = {
  init(args) {
    this.channels = this.channels || ChannelsModel.retrieve();

    if (args.channelId) {
      this.posts = PostsModel.retrieve(args.channelId);
    }

    if (args.postId) {
      this.post = PostsModel.get(args.postId);
    }
  },
};

export default {
  controller() {
    this.params = {};
    this.params.channelId = asNumber(m.route.param('id'));
    this.params.postId = asNumber(m.route.param('postId'));

    vm.init(this.params);
  },

  view(ctrl) {
    const Post = <div></div>;
    return (
      <App>
        <div class="main-page-container">
          <div class="channels-item">
            <Channels {...ctrl.params} channels={vm.channels()} />
          </div>
          <div class="posts-item">
            <Posts {...ctrl.params} posts={vm.posts()} />
          </div>
          {
            (() => {
              if (ctrl.params.postId) {
                return <div class="post-item">
                  <Post {...ctrl.params} />
                </div>;
              }
            })()
          }
        </div>
      </App>
    );
  },
};
