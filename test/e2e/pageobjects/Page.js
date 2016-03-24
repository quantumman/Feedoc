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
}
