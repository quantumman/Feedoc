import './style.scss';

import List from 'polythene/list/list';
import ListTile from 'polythene/list-tile/list-tile';
import Icon from 'polythene/icon/icon';
import IconStarOutline from 'mmsvg/templarian/msvg/star-outline';

import moment from 'moment';

export default {
  view(_ctrl, props) {
    const posts = props.posts || m.prop([]);

    const avatar = p => m(Icon, {
      type: 'large',
      class: 'pe-icon--avatar',
      src: p.creator.avatar,
    });

    const secondary = p => {
      return {
        content: (
          <div>
            <small>
              {
                moment(p.createdOn).format('L')
              }
            </small>
            <div class="flex"></div>
            <Icon msvg={IconStarOutline} />
          </div>
        ),
      };
    };

    const tiles = posts().map(p => {
      return (
        <ListTile title={p.title}
                  front={avatar(p)}
                  highSubtitle={<div>{p.creator.name}</div>}
                  positionSelected={false}
                  ink={true}
                  url={{
                    href: `/${props.teamId}/groups/${p.group_id}/posts/${p.id}`,
                    config: m.route,
                  }}
                  secondary={secondary(p)}
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
