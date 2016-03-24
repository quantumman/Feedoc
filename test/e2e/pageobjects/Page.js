function _go(id) {
  return browser.click('#' + id);
}

export default class Page {
  constructor() {
    _go.bind(this);
  }

  open(path) {
    browser.url('/?/' + path);
  }

  new() {
    _go('new');
  }

  groups() {
    _go('groups');
  }

  _go(id) {
    return browser.click(id);
  }
}
