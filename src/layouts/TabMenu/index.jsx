import './style.scss';
import PTabs from 'polythene/tabs/tabs';

export const Tab = {
  controller(args) {
    this.title = m.prop(args.title);
    this.isActive = m.prop(args.isActive);
  },

  view(ctrl, args, children) {
    ctrl.title(args.title);
    ctrl.isActive(args.isActive);
    return (
      <div>{children}</div>
    );
  },
};

const vm = {
  init(_props, children) {
    this.children = children
       .map(c => c.controller());

    this.buttons = this.children
       .map((c, index) => {
         return {
           id: index,
           label: c.title(),
         };
       });

    this.selectedTab = m.prop(
      this.children.find(c => c.isActive()).id
    );
  },
};

export const Tabs = {
  controller(props, children) {
    vm.init(props, children);
  },

  view(_ctrl, args) {
    return (
      <div class="tab-menu">
        <div class="nav-menu">
          <h2 class="header">{args.feedName}</h2>
          <PTabs buttons={vm.buttons}
                autofit={true}
                selectedTab={vm.selectedTab()}
                activeSelected={true}
                getState={state => {
                  vm.selectedTab(state.index);
                }}
          />
        </div>
        <div class="tab-content">
          {vm.children[vm.selectedTab()]}
        </div>
      </div>
    );
  },
};
