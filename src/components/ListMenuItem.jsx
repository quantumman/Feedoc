import '../style/MenuButton.scss';

const vm = {
  init() {
  },

  onclick() {
    m.route('/list');
  },
};

export default {
  controller() {
    this.vm = vm;
    vm.init();
  },

  view(ctrl) {
    return (
      <button type="button" class="btn btn-menu" onclick={ctrl.vm.onclick}>
        <span class="glyphicon glyphicon-book glyphicon-large" aria-hidden="true">
        </span>
      </button>
    );
  },
};
