Router.route('/', {
  name: 'home'
});

Router.route('/about', {
  name: 'about'
});

Router.route('/portfolio', {
  name: 'portfolio'
});

Router.route('/services', {
  name: 'services'
});

Router.route('/contact', {
  name: 'contact'
});

Router.route('/dashboard', {
  name: 'dashboard'
});

Router.route('/items/new', {
  name: 'items.new'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});
