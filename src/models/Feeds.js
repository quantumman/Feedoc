import m from 'mithril';

export default {
  url: 'api/feeds',
  retrieve() {
    return m.request({ method: 'GET', url: this.url, initialValue: [] });
  },
};
