import './style.scss';

import List from 'polythene/list/list';
import ListTile from 'polythene/list-tile/list-tile';

export default {
  view(_ctrl, props) {
    const posts = props.posts || m.prop([]);

    const tiles = posts().map(p => {
      return (
        <ListTile title={p.title}
                  highSubtitle={<div>{p.creator.name}</div>}
                  positionSelected={false}
                  ink={true}
                  url={{
                    href: `/${props.teamId}/groups/${p.groupId}/posts/${p.id}`,
                    config: m.route,
                  }}
        />
      );
    });

    return (
      <div class="posts">
        <List hoverable={true}
              tiles={tiles}
        />
      </div>
    );
  },
};
