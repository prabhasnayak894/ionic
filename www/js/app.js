// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ion-autocomplete'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
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
    url: '/links',
    views: {
      'menuContent': {
        templateUrl: 'templates/links.html',
        controller: 'LinksCtrl'
      }
    }
  })

  .state('app.query', {
    url: '/query',
    views: {
      'menuContent': {
        templateUrl: 'templates/query.html',
        controller: 'QueryCtrl'
      }
    }
  })

  .state('app.science', {
    url: '/science',
    views: {
      'menuContent': {
        templateUrl: 'templates/science.html',
        controller: 'ScienceCtrl'
      }
    }
  })

  .state('app.features', {
    url: '/features',
    views: {
      'menuContent': {
        templateUrl: 'templates/features.html',
        controller: 'FeaturesCtrl'
      }
    }
  })

  .state('app.instruments', {
    url: '/instruments',
    views: {
      'menuContent': {
        templateUrl: 'templates/instruments.html',
        controller: 'InstrumentsCtrl'
      }
    }
  })

  .state('app.faqs', {
    url: '/faqs',
    views: {
      'menuContent': {
        templateUrl: 'templates/faqs.html',
        controller: 'FaqsCtrl'
      }
    }
  })

  .state('app.zodiac', {
    url: '/zodiacsigns',
    views: {
      'menuContent': {
        templateUrl: 'templates/zodiac.html',
        controller: 'ZodiacCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/links');
});
