import './style.scss';

import { Root, LeftView, MiddleView, RightView } from '../Root';
import GroupList from '../Groups';
import PostList from '../Posts';
import Post from '../Post';

import Groups from '../../models/groups';
import Posts from '../../models/posts';

export default {
  controller() {
    const name = this.name = m.route.param('name');
    m.request({
      method: 'GET',
      url: `api/teams/${name}`,
    })
     .then(({ id }) => {
       const teamId = id;
       const groupId = this.groupId = m.route.param('groupId');
       const postId = this.postId = m.route.param('postId');
       this.groups = this.groups || Groups.retrieve({ teamId });
       this.posts = this.posts || Posts.retrieve({ teamId, groupId });
       this.post = this.post || Posts.get({ teamId, groupId, postId });
       this.src = this.post && this.post.then(p => p.content);
     });
  },

  view(ctrl) {
    return (
      <Root>
        <LeftView>
          <GroupList {...ctrl} />
        </LeftView>
        <MiddleView>
          <PostList {...ctrl} />
        </MiddleView>
        <RightView>
          <Post {...ctrl} />
        </RightView>
      </Root>
    );
  },
};
