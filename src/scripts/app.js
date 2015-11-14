
const myAppDependencies = [
  'ui.router',
  'restangular'
];

/*ngInject;*/
angular
  .module('myApp', myAppDependencies)
  .config(($stateProvider, $locationProvider, $urlRouterProvider, STATE) => {

    $stateProvider
      .state(STATE.general, {
        url: '/',
        templateUrl: 'views/layout.html'
      })

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise(($injector) => {
      $injector.get('$state').go(STATE.general, { reload: true, location: 'replace' });
    });

  })
  .run(($rootScope, $state, Restangular, CONFIG, STATE) => {

    $rootScope.$on('$stateChangeStart', (ev, toState) => {
      // authorization
    });

    Restangular.setBaseUrl(CONFIG.host);
    Restangular.setDefaultHttpFields({ withCredentials: true });
    Restangular.setErrorInterceptor((response) => {
      if (response.status === 401) {
        // signout
      }
    });

  });
