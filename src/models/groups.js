import m from 'mithril';

export default {
  url: (args) => `/api/teams/${args.teamId}/groups`,
  create(args) {
    return m.request({ method: 'POST', url: this.url(args), data: args });
  },
  retrieve(args) {
    return m.request({ method: 'GET', url: this.url(args), data: args });
  },
  update(args) {
    return m.request({ method: 'PATCH', url: this.url(args), data: args });
  },
  delete(args) {
    return m.request({ method: 'DELETE', url: this.url(args), data: args });
  },
};
