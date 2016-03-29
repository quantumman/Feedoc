export default {
  url: (args) => `/api/teams/${args.team}`,
  get(args) {
    return m.request({ method: 'GET', url: this.url(args) });
  },
};
