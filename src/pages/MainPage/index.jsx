import './style.scss';

import App from '../../layouts/App';
import { Tabs, Tab } from '../../layouts/TabMenu';
import Feeds from '../../components/Feeds';
import Posts from '../../components/Posts';

export default {
  controller() {
  },

  view(ctrl, props) {
    return (
      <App>
        <div class="wrap">
          <div class="main-page-container">
            <div class="feeds-item">
              <Feeds {...props} />
            </div>
            <div class="posts-item">
              <Tabs feedName={props.feeds().find((f) => f.id === props.params.feedId).name}>
                <Tab title="POST" isActive={false}>
                </Tab>
                <Tab title="TIMELINE" isActive={true}>
                  <Posts {...props} />
                </Tab>
                <Tab title="WIP" isActive={false}>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </App>
    );
  },
};
