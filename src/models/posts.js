import m from 'mithril';

export default {
  get(postId, args) {
    return m.request({
      method: 'GET',
      url: `api/posts/${postId}`,
      data: args,
    });
  },
  create(feedId, args) {
    return m.request({
      method: 'POST',
      url: `api/feeds/${feedId}/posts`,
      data: args,
    });
  },
  retrieve(feedId, args) {
    return m.request({
      method: 'GET',
      url: `api/feeds/${feedId}/posts`,
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
