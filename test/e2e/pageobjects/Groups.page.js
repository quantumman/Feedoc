import Page from './Page';

class GroupsPage extends Page {
  open() {
    super.open('e2e');
    super.groups();
  }

  get groups() {
    return browser
      .elements('.groups .pe-list-tile')
      .value
      .map(e => {
        return {
          title: browser.elementIdElement(e.ELEMENT, '.pe-list-tile__title').getText(),
          link: browser.elementIdElement(e.ELEMENT, 'a.pe-list-tile__primary'),
        };
      });
  }
}

export default new GroupsPage();
