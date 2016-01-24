import m from 'mithril';

export default {
  url: 'api/channels',
  retrieve() {
    return m.request({ method: 'GET', url: this.url, initialValue: [] });
  },
};
