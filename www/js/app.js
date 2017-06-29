angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'ion-autocomplete'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.links', {
    cache: false,
    url: '/links',
    views: {
      'menuContent': {
        templateUrl: 'templates/links.html',
        controller: 'LinksCtrl'
      }
    }
  })

  .state('app.query', {
    cache: false,
    url: '/query',
    views: {
      'menuContent': {
        templateUrl: 'templates/query.html',
        controller: 'QueryCtrl'
      }
    }
  })

  .state('app.science', {
    cache: false,
    url: '/science',
    views: {
      'menuContent': {
        templateUrl: 'templates/science.html',
        controller: 'ScienceCtrl'
      }
    }
  })

  .state('app.features', {
    cache: false,
    url: '/features',
    views: {
      'menuContent': {
        templateUrl: 'templates/features.html',
        controller: 'FeaturesCtrl'
      }
    }
  })

  .state('app.instruments', {
    cache: false,
    url: '/instruments',
    views: {
      'menuContent': {
        templateUrl: 'templates/instruments.html',
        controller: 'InstrumentsCtrl'
      }
    }
  })

  .state('app.faqs', {
    cache: false,
    url: '/faqs',
    views: {
      'menuContent': {
        templateUrl: 'templates/faqs.html',
        controller: 'FaqsCtrl'
      }
    }
  })

  .state('app.info', {
    cache: false,
    url: '/info',
    views: {
      'menuContent': {
        templateUrl: 'templates/info.html',
        controller: 'InfoCtrl'
      }
    }
  })

  .state('app.zodiac', {
    cache: false,
    url: '/zodiacsigns',
    views: {
      'menuContent': {
        templateUrl: 'templates/zodiac.html',
        controller: 'ZodiacCtrl'
      }
    }
  })

  .state('app.contact_form', {
    cache: false,
    url: '/contact_form',
    views: {
      'menuContent': {
        templateUrl: 'templates/contact_form.html',
        controller: 'ContactFormCtrl'
      }
    }
  });;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/links');
});
