import m from 'mithril';

export default {
  create(channelId, args) {
    return m.request({
      method: 'POST',
      url: `api/channels/${channelId}/posts`,
      data: args,
    });
  },
  retrieve(channelId, args) {
    return m.request({
      method: 'GET',
      url: `api/channels/${channelId}/posts`,
      data: args,
    });
  },
  update(postId, args) {
    return m.request({
      method: 'PATCH',
      url: `api/posts/${postId}`,
      data: args,
    });
  },
};
