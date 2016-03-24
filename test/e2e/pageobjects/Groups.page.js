import Page from './Page';

class GroupsPage extends Page {
  open() {
    super.open('e2e');
    super.groups();
  }
}

export default new GroupsPage();
