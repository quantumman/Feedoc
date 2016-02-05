import '../style/MainPage.scss';

import App from '../layouts/App.jsx';
import Channels from '../components/Channels.jsx';
import Post from '../components/Post.jsx';
import Posts from '../components/Posts.jsx';

export default {
  controller() {
  },

  view(ctrl, props) {
    return (
      <App>
        <div class="main-page-container">
          <div class="channels-item">
            <Channels {...props} />
          </div>
          <div class="posts-item">
            <Posts {...props} />
          </div>
          {
            (() => {
              if (props.post) {
                return <div class="post-item">
                  <Post {...props} />
                </div>;
              }
            })()
          }
        </div>
      </App>
    );
  },
};
