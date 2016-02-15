import './style.scss';

export const Tab = {
  controller(args) {
    this.title = args.title;
    this.isActive = args.isActive;
  },

  view(ctrl, args, children) {
    return (
      <div>
        {children}
      </div>
    );
  },
};

export const Tabs = {
  controller() {
  },

  view(_ctrl, args, children) {
    const tabs = children.map(c => c.controller());
    return (
      <div class="tab-menu">
        <div class="nav-menu">
          <h2 class="header">{args.feedName}</h2>
          <ul class="nav nav-pills" role="tablist">
            {
              tabs.map((t, index) => {
                return (
                  <li role="presentation"
                      class={t.isActive && 'active'}
                  >
                    <a href={`#${index}`}
                       arial-controls={index}
                       role="tab"
                       data-toggle="pill"
                    >
                      {t.title}
                    </a>
                  </li>
                );
              })
            }
          </ul>
        </div>
        <div class="tab-content">
        {
          tabs.map((t, index) => {
            return (
              <div role="tabpanel"
                   class={t.isActive ? 'tab-pane active' : 'tab-pane'}
                   id={index}
              >
                {t}
              </div>
            );
          })
        }
        </div>
      </div>
    );
  },
};
