import './style.scss';

import { MainPage, LeftPanel, Content } from '../../layouts/MainPage';
import { Tabs, Tab } from '../../layouts/TabMenu';
import Feeds from '../../components/Feeds';
import Post from '../../components/Post';
import Posts from '../../components/Posts';

const MainBlock = {
  view(_ctrl, props, children) {
    return (
      <MainPage>
        <LeftPanel>
          <div class="feeds-item">
            <Feeds {...props} />
          </div>
        </LeftPanel>
        <Content>
          {children}
        </Content>
      </MainPage>
    );
  },
};

export const PostsPage = {
  view(_ctrl, props) {
    return (
      <MainBlock {...props}>
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
      </MainBlock>
    );
  },
};

export default {
  controller() {
  },

  view(ctrl, props) {
    return (
      <MainPage>
        <LeftPanel>
          <div class="feeds-item">
            <Feeds {...props} />
          </div>
        </LeftPanel>
        <Content>
          {
            props.params.postId
            ? <div class="post-item"><Post {...props}></Post></div>
            : (
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
            )
          }
        </Content>
      </MainPage>
    );
  },
};
