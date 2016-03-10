import './style.scss';
import PTabs from 'polythene/tabs/tabs';
import FixedHeaderPanel from '../FixedHeaderPanel';

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
           ink: false,
           label: c.title(),
         };
       });

    this.selectedTab = m.prop(
      this.children
          .map((c, index) => {
            return { child: c, index };
          })
          .find(x => x.child.isActive())
          .index
    );
  },
};

export const Tabs = {
  controller(props, children) {
    vm.init(props, children);
  },

  view(_ctrl, args) {
    const tabs = (
      <PTabs buttons={vm.buttons}
             autofit={true}
             selectedTab={vm.selectedTab()}
             activeSelected={true}
             getState={state => {
               vm.selectedTab(state.index);
             }}
      />
    );

    return (
      <div class="tab-menu">
        <FixedHeaderPanel title={args.feedName} nav={tabs}>
          <div class="tab-content">
            {vm.children[vm.selectedTab()]}
          </div>
        </FixedHeaderPanel>
      </div>
    );
  },
};
