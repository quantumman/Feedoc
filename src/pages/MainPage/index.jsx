import './style.scss';

import App from '../../layouts/App';
import Feeds from '../../components/Feeds';
import Posts from '../../components/Posts';

export default {
  controller() {
  },

  view(ctrl, props) {
    return (
      <App>
        <div class="main-page-container">
          <div class="channels-item">
            <Feeds {...props} />
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
