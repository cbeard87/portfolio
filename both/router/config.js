Router.configure({
  controller: 'AppController',
  loadingTemplate: 'loading',
  layoutTemplate: 'appLayout'
});

Router.plugin('dataNotFound', {dataNotFoundTemplate: 'notFound'});
