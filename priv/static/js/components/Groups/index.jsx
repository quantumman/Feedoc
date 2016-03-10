import './style.scss';

import List from 'polythene/list/list';
import ListTile from 'polythene/list-tile/list-tile';

export default {
  view(_ctrl, props) {
    const groups = props.groups || m.prop([]);

    const tiles = groups().map(g => {
      return (
        <ListTile title={g.name}
                  positionSelected={false}
                  ink={false}
                  url={{ href: `/${props.teamId}/groups/${g.id}/posts`, config: m.route }}
        />
      );
    });

    return (
      <div class="groups">
        <List hoverable={true}
              tiles={tiles}
        />
      </div>
    );
  },
};
