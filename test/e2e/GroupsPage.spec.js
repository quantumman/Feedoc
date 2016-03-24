const assert = require('power-assert');

import page from './pageobjects/Groups.page';

describe('GroupsPage', () => {
  before(() => {
    page.open();
  });

  it('should show groups', () => {
    page.groups.forEach(g => {
      assert(g.title);
    });
  });
});
